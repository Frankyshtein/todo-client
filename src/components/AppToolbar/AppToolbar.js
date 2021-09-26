import { useHistory } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';

export const AppToolbar = () => {
  const history = useHistory();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={() => history.push('/home')}>
          <ListAltIcon />
        </IconButton>
        <Typography>Yet another fucking ToDo app</Typography>
      </Toolbar>
    </AppBar>
  );
};
