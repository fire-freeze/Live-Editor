import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import EditorRoute from "./pages/editor/Editor.page";
import HomeRoute from "./pages/home/Home.page";
import LoginRoute from "./pages/login/Login.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EditorRoute />,
  },

  {
    path: "/editor",
    element: <EditorRoute />,
  },

  {
    path: "/login",
    element: <LoginRoute />,
  },
  {
    path: "/home",
    element: <HomeRoute />,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
