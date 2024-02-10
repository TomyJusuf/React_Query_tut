import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHero = async () => {
  try {
    return axios.get('http://localhost:4000/superheroes');
  } catch (error) {
    throw new Error(error.message);
  }
};

export const useSuperHeroesData = (onSuccess, onError) =>
  useQuery('super-heroes', fetchSuperHero, {
    onSuccess,
    onError,
    select: (data) => {
      // I can use filter/map or any other method I need.
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
