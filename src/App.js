import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Siderbar from "./Siderbar";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Siderbar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
