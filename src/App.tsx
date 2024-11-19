import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "../iframe-resizer.child.js";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
