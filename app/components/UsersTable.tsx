import { User } from "../types";

interface UsersTableProps {
  usersPromise: Promise<User[]>;
}

const UsersTable: React.FC<UsersTableProps> = async ({ usersPromise }) => {
  const users = await usersPromise;
  return (
    <table className="min-w-full p-5">
      <thead className="p-4">
        <tr>
          <th className="py-2">ID</th>
          <th className="py-2">Name</th>
          <th className="py-2">Username</th>
          <th className="py-2">Email</th>
          <th className="py-2">Address</th>
          <th className="py-2">Phone</th>
          <th className="py-2">Website</th>
          <th className="py-2">Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-b">
            <td className="py-2">{user.id}</td>
            <td className="py-2">{user.name}</td>
            <td className="py-2">{user.username}</td>
            <td className="py-2">{user.email}</td>
            <td className="py-2">
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </td>
            <td className="py-2">{user.phone}</td>
            <td className="py-2">{user.website}</td>
            <td className="py-2">{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
