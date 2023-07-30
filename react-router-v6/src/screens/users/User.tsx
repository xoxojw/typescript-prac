import { useParams } from "react-router-dom";
import { users } from "../../db";

const User = () => {
  const { userId } = useParams();
  console.log(userId);
  return (
    <>
      <h1>User</h1>
      <h2>User with Id {userId} is named: {users[Number(userId) - 1].name}</h2>
    </>
  );
};

export default User;
