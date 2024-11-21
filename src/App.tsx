import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Support from "./pages/Support";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Calculator />,
  },
  {
    path: '/calculator',
    element: <Calculator />,
  },
  {
    path: '/support',
    element: <Support />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}