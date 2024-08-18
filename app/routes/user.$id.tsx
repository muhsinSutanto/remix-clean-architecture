import { useParams } from "@remix-run/react";

const UserDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>User Detail {id}</h1>
    </div>
  );
};

export default UserDetail;
