import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "@iframe-resizer/child";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
