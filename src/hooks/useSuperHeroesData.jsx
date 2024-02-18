import axios from 'axios';
import { useQuery, useMutation } from 'react-query';

const fetchSuperHero = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero);
};

export const useSuperHeroesData = (onSuccess, onError) =>
  useQuery('super-heroes', fetchSuperHero, {
    onSuccess,
    onError,
  });

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
};
