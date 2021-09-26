import { Box, Typography } from '@mui/material';

export const Home = () => {
  const getData = () => {
    const body = JSON.stringify({ description: `Do the right thing!` });

    fetch('http://localhost:4000/add-item', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
      body,
    })
      .then((response) => response.text())
      .then((text) => console.log(text))
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Typography>Hey there</Typography>
    </Box>
  );
};
