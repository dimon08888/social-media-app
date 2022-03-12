import { useAppSelector } from '../../app/hooks';
import { selectAllUsers } from './usersSlice';
import { Link } from 'react-router-dom';

export function Users() {
  const users = useAppSelector(selectAllUsers);
  return (
    <section className="flex justify-center items-center flex-col">
      <h2 className="text-white text-xl font-bold mt-5">Users</h2>
      <div className="text-center mt-5 bg-slate-200 rounded px-3 py-2">
        <ul>
          {users.map(user => (
            <li className="hover:underline" key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
