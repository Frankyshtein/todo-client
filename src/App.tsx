import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import NewToDoList from './components/NewToDoList';
import ToDoList from './components/ToDoList';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todo-list" children={ToDoList}/>
        <Route path="/new-todo-list" children={NewToDoList}/>
        <Route path={['/home', '/']} children={Home} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
