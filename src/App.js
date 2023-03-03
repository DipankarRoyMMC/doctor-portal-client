import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes";

function App() {
  return (
    <div className="xl:container mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
