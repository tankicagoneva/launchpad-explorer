import Launches from "./launches/page";
import logo from "./assets/logo.svg";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <div className="space-y-8 p-8">
          <img src={logo} alt="Launchpad explorer logo" width="300px;" />
          <Launches />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
