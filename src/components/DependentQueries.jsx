import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export default function DependentQueries({ email }) {
  const { data: user } = useQuery(['user', email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;

  console.log(channelId);
  useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });

  return <div>DependentQueries</div>;
}
