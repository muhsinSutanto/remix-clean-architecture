import { useEffect, useState } from "react";

interface ApiResponse<T> {
  data: {
    Data: T;
  };
}

type User = {
  id: number;
  name: string;
};

type Error<T> = {
  response: {
    data: T;
  };
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await fetch(
        `https://api.mudoapi.tech/menus?perPage=10&page=1`
      );
      const result: ApiResponse<User[]> = await response.json();

      setUsers(result.data.Data);
      setError(null); // Clear previous errors if any
    } catch (error: Error<T>) {
      setError(error.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>Error: {error}</p>}
      {users.length > 0 ? (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}
