# React Router DOM v6
1. <a href="https://github.com/xoxojw/typescript-practice/tree/main/react-router-v6#browserrouter">BrowserRouter</a>
2. <a href="https://github.com/xoxojw/typescript-practice/tree/main/react-router-v6#createbrowserrouter">createBrowserRouter</a>
3. <a href="https://github.com/xoxojw/typescript-practice/tree/main/react-router-v6#route">Route</a>
4. <a href="https://github.com/xoxojw/typescript-practice/tree/main/react-router-v6#usenavigate">useNavigate</a>
5. <a href="https://github.com/xoxojw/typescript-practice/tree/main/react-router-v6##useparams">useParams</a>
6. <a href="https://github.com/xoxojw/typescript-practice/tree/main/react-router-v6##outlet">Outlet</a>
7. <a href="https://github.com/xoxojw/typescript-practice/tree/main/react-router-v6##useoutletcontext">useOutletContext</a>

## BrowserRouter
- `<BrowserRouter>`, `<Routes>`, `<Route>`를 이용하는 방법
```ts
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
```ts
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

## createBrowserRouter
- `<Outlet />`을 이용하는 방법
- `Router.tsx`에서 children을 설정하면, 그 children들이 `<Outlet />` 자리에서 렌더링

```ts
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
```ts
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
```ts
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
```ts
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

## Route
- `errorElement` : 컴포넌트에 에러가 발생해서 충돌하거나, 컴포넌트의 위치를 찾지 못할 때 사용

  ```ts
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

  <br />

## useNavigate
- 유저가 로그인한 뒤 redirect 시키고 싶을 때, 어떤 페이지로 갔는데 authorization이 없을 때
- location이나 location.push를 import 해서 쓰는 것보다 좋은 방법
- `navigate(-1)`은 뒤로 버튼을 누르는 것과 같은 효과  

  ```ts
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

## useParams
- useParams 훅은 `<Route path>`와 일치하는 현재 URL에서 동적 매개변수의 key/value 쌍 객체를 반환한다. 하위 경로는 상위 경로에서 모든 매개변수를 상속한다.
- `path: "users/:userId"`처럼 :(콜론)을 넣어주어야 함. 콜론을 통해 뒤에 오는 페이지를 동적으로 구현할 수 있음  

  ```ts
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
  ```ts
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
  ```ts
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

## Outlet
- Outlet은 하위 경로 요소를 렌더링하기 위해 상위 경로 요소에서 사용한다.
이렇게 하면 하위 경로가 렌더링될 때 중첩된 UI가 표시될 수 있다. 상위 경로가 정확히 일치하면 하위 index 경로를 렌더링하거나 index 경로가 없으면 아무것도 렌더링하지 않는다.
- `<Link to="/followers">See Followers</Link>`와 `<Link to="followers">See Followers</Link>`의 차이 구분 (절대경로, 상대경로)
- 위치를 체크할 때, 새로운 router를 만들 때 하나하나 만들어주지 않고 `<Outlet />`을 렌더하면 됨

  ```ts
  import { createBrowserRouter } from "react-router-dom";
  import RootRouter from "./RootRouter";
  import About from "./screens/About";
  import Home from "./screens/Home";
  import NotFound from "./screens/NotFound";
  import ErrorComponent from "./components/ErrorComponent";
  import User from "./screens/users/User";
  import Followers from "./screens/users/Followers";

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
        {
          path: "users/:userId",
          element: <User />,
          // children 추가
          children: [
            {
              path: "followers",
              element: <Followers />
            }
          ]
        }
      ],
      errorElement: <NotFound />
    }
  ])

  export default Router
  ```
  ```ts
  import { Outlet, useParams } from "react-router-dom";
  import { users } from "../../db";
  import { Link } from "react-router-dom";

  const User = () => {
    const { userId } = useParams();
    console.log(userId);
    return (
      <>
        <div>
          <h1>User</h1>
          <h2>User with Id {userId} is named: {users[Number(userId) - 1].name}</h2>
          <hr />
          <Link to="followers">See Followers</Link>
          {/* 아래 Outlet 추가 */}
          <Outlet />
        </div>
      </>
    );
  };

  export default User;
  ```

<br />

## useOutletContext
- Outlet은 Root의 children들을 렌더링한다.
- Root에서 어떤 state가 있다면 그 state를 children들에 내려줄 수 있음
  - ex) `<Outlet context={{ darkMode: true }} />` 
  ```ts
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
        <h1>Followers</h1>
      </>
    );
  };

  export default Followers;
  ```