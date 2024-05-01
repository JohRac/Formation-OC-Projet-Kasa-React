import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import { PageError } from "./PageError";
import { Footer, Header } from "./Banner";
import { About } from "./About";
import "../styles/Index.scss"
import { Home } from "./Home";
import { Accommodation } from "./Accommodation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: ":id",
        element: <Accommodation/>
      },
    ]
  }
]);

function Root () {
  return <>
    <header className="margin"><Header/></header>
    <div className="margin">
      <Outlet/>
    </div>
    <footer><Footer/></footer>
  </>
}

function App() {

  return <RouterProvider router={router}/>
}

export default App
 