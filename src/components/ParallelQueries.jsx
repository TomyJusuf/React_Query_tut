import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends');
};

export default function ParallelQueries() {
  useQuery('super-heroes', fetchSuperHeroes);
  useQuery('friends', fetchFriends);

  return <div>ParallelQueries</div>;
}
