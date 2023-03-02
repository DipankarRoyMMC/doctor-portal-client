import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes";

function App() {
  return (
    <div className="xl:container mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
