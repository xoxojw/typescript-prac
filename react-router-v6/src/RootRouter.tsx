import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const RootRouter = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default RootRouter