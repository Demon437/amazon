import { BrowserRouter } from "react-router-dom";
import Counter from "./COUNTER2.0/Counter";
import Routing1 from "./Routing1";
import Usestatefun from "./Use State Hook/Usestate fun ";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routing1></Routing1>
      </BrowserRouter>
    </div>
  );
}
export default App;
