import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import { HousingList } from "./HousingList"
import { PageError } from "./PageError";
import { Footer, Header } from "./Banner";
import { About } from "./About";
import "../styles/index.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path: "/",
        element: <div>Accueil</div>,
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "logement",
        children: [
          {
            path: ":id",
            element: <HousingList/>
          },
        ]
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
