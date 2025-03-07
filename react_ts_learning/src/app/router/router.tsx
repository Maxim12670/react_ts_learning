import { createBrowserRouter } from "react-router";
import { MainPage, WelcomePage, CounterPage } from "../../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "counter",
        element: <CounterPage />,
      },
    ],
  },
]);

export default router;
