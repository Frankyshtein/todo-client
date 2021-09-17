export const Home = () => {
  const getData = () => {
    fetch("http://localhost:4000/test/").then((response) => {
        response.json().then(text => alert(text.text));
      }
    );
  };

  return (
    <>
      <h1>Home Fucking Page</h1>
      <button onClick={getData}>Get Data</button>
    </>
  );
};
