import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameOfMyUser: string;
}

const Followers = () => {
  // const context = useOutletContext();
  const { nameOfMyUser } = useOutletContext<FollowersContext>();
  console.log("useOutletContext => ", nameOfMyUser);
  return (
    <>
      <h1>Here are {nameOfMyUser}'s Followers</h1>
    </>
  );
};

export default Followers;
