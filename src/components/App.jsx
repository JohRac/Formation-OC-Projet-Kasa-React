import { NavLink, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import { HousingList } from "./HousingList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "Accueil",
        element: <div>Accueil</div>
      },
      {
        path: "A propos",
        element: <div>A propos</div>
      },
    ]
  }
]);

function Root () {
  return <>
    <header>
      <nav>
        <NavLink to={"/"}>Accueil</NavLink>
        <NavLink to={"/A propos"}>A propos</NavLink>
      </nav>
    </header>
    <div>
      <Outlet/>
    </div>
  </>
}

function App() {

  return <RouterProvider router={router}/>
}

export default App
