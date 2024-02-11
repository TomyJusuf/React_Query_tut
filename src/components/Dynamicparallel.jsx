import axios from 'axios';
import { useQueries } from 'react-query';

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

// Send from (App.js Dynamicparallel {props}) 2 more paramerts as ID and log data.
export default function Dynamicparallel({ heroIds }) {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log({ queryResults });
  return <div>Dynamicparallel</div>;
}
