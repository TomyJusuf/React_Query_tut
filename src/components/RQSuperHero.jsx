import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHero = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function RQSuperHero() {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'super-heroes',
    fetchSuperHero,
    {
      enabled: false,
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
      {data?.data.map((heroes) => {
        return <h2 key={heroes.name}>{heroes.name}</h2>;
      })}
    </>
  );
}
