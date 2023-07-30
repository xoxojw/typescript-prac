# React Router DOM v6
- **BrowerRouter**
  - `<BrowserRouter>`, `<Routes>`, `<Route>`를 이용하는 방법
```
// Router.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
```
```
// App.tsx
import Router from "./Router";

const App = () => {
  return (
    <>
      <Router />
    </>
  )
}

export default App;
```

<br />

- **createBrowserRouter**
  - `<Outlet />`을 이용하는 방법
  - `Router.tsx`에서 children을 설정하면, 그 children들이 `<Outlet />` 자리에서 렌더링
```
// Router.tsx
import { createBrowserRouter } from "react-router-dom";
import RootRouter from "./RootRouter";
import About from "./screens/About";
import Home from "./screens/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootRouter />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      }
    ]
  }
])

export default Router
```
```
// RootRouter.tsx
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
```
```
// App.tsx
import RootRouter from "./RootRouter";

const App = () => {
  return (
    <>
      <RootRouter />
    </>
  )
}

export default App;
```
```
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
```

<br />

- **Route**
  - `errorElement` : 컴포넌트에 에러가 발생해서 충돌하거나, 컴포넌트의 위치를 찾지 못할 때 사용
  ```
  // Router.tsx
  import { createBrowserRouter } from "react-router-dom";
  import RootRouter from "./RootRouter";
  import About from "./screens/About";
  import Home from "./screens/Home";
  import NotFound from "./screens/NotFound";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <RootRouter />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />,
        }
      ],
      errorElement: <NotFound />
    }
  ])

  export default Router
  ```

- **useNavigate**
  - 유저가 로그인한 뒤 redirect 시키고 싶을 때, 어떤 페이지로 갔는데 authorization이 없을 때
  - location이나 location.push를 import 해서 쓰는 것보다 좋은 방법
  - `navigate(-1)`은 뒤로 버튼을 누르는 것과 같은 효과
  ```
  // Header.tsx
  import { Link, useNavigate } from "react-router-dom"

  const Header = () => {
    const navigate = useNavigate();
    const onAboutClick = () => {
      navigate("/about");
    }

    return (
      <>
        <header>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <button onClick={onAboutClick}>About</button>
            </li>
          </ul>
        </header>
      </>
    )
  }

  export default Header
  ```

<br />

- **useParams**
  - useParams 훅은 `<Route path>`와 일치하는 현재 URL에서 동적 매개변수의 key/value 쌍 객체를 반환한다. 하위 경로는 상위 경로에서 모든 매개변수를 상속한다.
  - `path: "users/:userId"`처럼 :(콜론)을 넣어주어야 함. 콜론을 통해 뒤에 오는 페이지를 동적으로 구현할 수 있음
  ```
  // Home.tsx
  import { Link } from 'react-router-dom';
  import { users } from '../db';

  const Home = () => {
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
  ```
  ```
  // Router.tsx
  import { createBrowserRouter } from "react-router-dom";
  import RootRouter from "./RootRouter";
  import About from "./screens/About";
  import Home from "./screens/Home";
  import NotFound from "./screens/NotFound";
  import ErrorComponent from "./components/ErrorComponent";
  import User from "./screens/users/User";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <RootRouter />,
      children: [
        {
          path: "",
          element: <Home />,
          errorElement: <ErrorComponent />
        },
        {
          path: "about",
          element: <About />,
        },
        // 아래 부분 추가
        {
          path: "users/:userId",
          element: <User />,
        }
      ],
      errorElement: <NotFound />
    }
  ])

  export default Router
  ```
  ```
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
  ```

<br />

- **Outlet**

<br />

- **useOutletContext**