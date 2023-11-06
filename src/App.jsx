import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectArmy from "./features/army/SelectArmy";
import SelectBtnBox from "./features/army/SelectBtnBox";
import Battles from "./features/battles/Battles";
import Login from "./features/profile/login/Login";
import Profile from "./features/profile/Profile";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Homepage from "./ui/Homepage";
import { loader as selectArmyLoader } from "./features/army/SelectArmy";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        errorElement: <Error />,
      },
      {
        path: "/select",
        element: <SelectBtnBox />,
      },
      {
        path: "/select/:armyCategory",
        element: <SelectArmy />,
        loader: selectArmyLoader,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/battles",
        element: <Battles />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
