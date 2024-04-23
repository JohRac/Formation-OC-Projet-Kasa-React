import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import { HousingList } from "./HousingList"
import { PageError } from "./PageError";
import { Footer, Header } from "./Banner";

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
        element: <div>A propos</div>
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
    <header><Header/></header>
    <div>
      <Outlet/>
    </div>
    <footer><Footer/></footer>
  </>
}

function App() {

  return <RouterProvider router={router}/>
}

export default App
