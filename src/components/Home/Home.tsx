export const Home = () => {
  const getData = () => {
    const body = JSON.stringify({ title: 'test' });
    console.log(body);

    fetch('http://localhost:4000/add-todo', {
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
    }).then((response) => {
      // response.json().then((text) => alert(text.text));
    });
  };

  return (
    <>
      <h1>Home Fucking Page</h1>
      <button onClick={getData}>Get Data</button>
    </>
  );
};
