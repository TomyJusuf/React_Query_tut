import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHero = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function RQSuperHero() {
  const { isLoading, data, isError, error } = useQuery(
    'super-heroes',
    fetchSuperHero
  );

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
