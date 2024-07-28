import Launchpads from "./launchpads/page";
import logo from "./assets/logo.svg";
import { ThemeProvider } from "./components/ui/theme-provider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <div className="space-y-8 p-8">
          <img src={logo} alt="Launchpad explorer logo" width="300px;" />
          <Launchpads />
          <ToastContainer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
