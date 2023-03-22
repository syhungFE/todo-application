import Main from "./pages/main";
import "./App.css";

import { ToastProvider } from "./hook/toast/providers/toast-provider";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Main />
      </ToastProvider>
    </div>
  );
}

export default App;
