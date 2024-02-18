import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

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
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // optional: onSuccess will automaticly refetch the data,so we dont need click on button  with fn refetch
    onSuccess: () => {
      queryClient.invalidateQueries('super-heroes');
    },
  });
};
