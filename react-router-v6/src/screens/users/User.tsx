import { Outlet, useParams } from "react-router-dom";
import { users } from "../../db";
import { Link } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  console.log("useParams로 넘겨준 userId => ", userId);
  return (
    <>
      <div>
        <h1>User</h1>
        <h2>User with Id {userId} is named: {users[Number(userId) - 1].name}</h2>
        <hr />
        <Link to="followers">See Followers</Link>
        <Outlet context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }} />
      </div>
    </>
  );
};

export default User;
