
import './App.scss';
import Table from "./page/Table";
import {Route} from "react-router";
import Yamaguchi from "./page/Yamaguchi";
import {Link} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <div className="Nav">
            <Link to="/Table">Тест1</Link>
            <Link to="/Yamaguchi">Тест2</Link>
        </div>
      <Route exact path="/Table" component={Table}/>
      <Route  path="/Yamaguchi" component={Yamaguchi} />
    </div>
  );
}

export default App;
