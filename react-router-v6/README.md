# React Router DOM v6
- BrowerRouter
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

- createBrowserRouter
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

- Route
  - errorElement : 컴포넌트에 에러가 발생해서 충돌하거나, 컴포넌트의 위치를 찾지 못할 때 사용
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

- useNavigate
- useParams
- Outlet
- useOutletContext