import axios from 'axios';
import { useEffect, useState } from 'react';

export default function SuperHeroes() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Super Hero Page</h2>
      {data.map((hero) => {
        return (
          <div className="" key={hero.name}>
            {hero.name}
          </div>
        );
      })}
    </>
  );
}
