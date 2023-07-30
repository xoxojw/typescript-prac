import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';

const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log("readSearchParams => ", readSearchParams);
  setTimeout(() => {
    setSearchParams({
      day: 'today',
      tomorrow: '123',
    })
  }, 3000)
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home