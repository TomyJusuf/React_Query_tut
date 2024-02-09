import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHero = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function RQSuperHero() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchSuperHero,
    {
      refetchInterval: 2000, // If data is changing,it will be refetching every 2s
      refetchIntervalInBackground: true, // Data is refetching even the browser is not in focused
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Super Hero Page</h2>
      {data?.data.map((heroes) => {
        return <h2 key={heroes.name}>{heroes.name}</h2>;
      })}
    </>
  );
}
