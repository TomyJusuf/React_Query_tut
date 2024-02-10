import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHero = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function RQSuperHero() {
  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = () => {
    console.log('Perform side effect after encountering error');
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'super-heroes',
    fetchSuperHero,
    {
      onSuccess,
      onError,
      select: (data) => {
        // I can use filter/map or any other method I need.
        const superHeroNames = data.data.map((hero) => hero.name);
        return superHeroNames;
      },
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Super Hero Page</h2>
      <button
        onClick={refetch}
        className="border px-2 py-1 bg-violet-500 font-black"
      >
        Fetch heroes
      </button>
      {/* {data?.data.map((heroes) => {
        return <h2 key={heroes.name}>{heroes.name}</h2>;
      })} */}
      {data.map((heroName) => {
        return (
          <div className="" key={heroName}>
            {heroName}
          </div>
        );
      })}
    </>
  );
}
