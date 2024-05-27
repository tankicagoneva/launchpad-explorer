import Launches from "./launches/page";
import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <div className="space-y-8 p-8">
        <img src={logo} alt="Launchpad explorer logo" width="300px;" />
        <Launches />
      </div>
    </>
  );
}

export default App;
