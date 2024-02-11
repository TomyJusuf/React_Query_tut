import { useParams } from 'react-router-dom';
import { useSuperHeroData } from '../hooks/useSuperHeroData';

export default function RQ_Super_Hero() {
  const { heroId } = useParams();
  const { isloading, data, isError, error } = useSuperHeroData(heroId);

  if (isloading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
}
