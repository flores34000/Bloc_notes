import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MarkdownInput from "./components/create-note/MarkdownInput";
import ViewNote from "./components/viewAddNote/ViewNote";

function App() {
  return (
    <div className="App d-flex">
      <MarkdownInput className="col-7" />
    </div>
  );
}

export default App;
