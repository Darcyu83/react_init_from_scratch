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
import PDF from "./pages/PDF";
import Canvas from "./pages/Canvas";
import ImgUploaderCarousel from "./pages/ImgUploaderCarousel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <div>Page Not Found</div>,
    children: [
      {
        index: true,
        element: <ImgUploaderCarousel />,
        // element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "result",
        element: <SearchResult />,
      },
      {
        path: "pdf",
        element: <PDF />,
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
