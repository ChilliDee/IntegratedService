import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ChildIframeResizer from "./IframeScripts/childIframeScript";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const childIframeResizer: ChildIframeResizer = new ChildIframeResizer();
    childIframeResizer.subscribeToDimensionResize();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
