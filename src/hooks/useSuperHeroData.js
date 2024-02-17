import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

// the queryKey is ['super-hero', heroId] which is stored in cache data!!
// and the function will be executed if the data is lost form cache data!!
const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];

  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();

  return useQuery(['super-hero', heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData('super-heroes')
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
  });
};
