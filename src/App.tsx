import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "result",
        element: <SearchResult />,
      },
    ],
  },
]);
function App({}) {
  return (
    <RouterProvider router={router} />

    // <BrowserRouter>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //   </Route>
    // </BrowserRouter>
  );
}

export default App;
