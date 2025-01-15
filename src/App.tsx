import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ position: "fixed", top: "0px", left: "0px", fontSize: "10px" }}
      >
        {import.meta.env.MODE}
      </div>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
