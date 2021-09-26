import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@mui/material';

import Home from './components/Home';
import NewToDoList from './components/NewToDoList';
import ToDoList from './components/ToDoList';
import AppToolbar from './components/AppToolbar';

import './App.css';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <AppToolbar />
        <Switch>
          <Route path="/todo-list" children={ToDoList} />
          <Route path="/new-todo-list" children={NewToDoList} />
          <Route path={['/home', '/']} children={Home} exact />
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
