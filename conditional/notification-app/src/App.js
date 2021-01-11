import Notification from "./components/Notification";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Notification hasRead />
      {/*  default value of props is true  */}
    </div>
  );
}

export default App;
