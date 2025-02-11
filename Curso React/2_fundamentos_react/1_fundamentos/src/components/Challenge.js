const Challenge = () => {
  const x = 5;
  const y = 10;
  const sumEvent = () => console.log(`${x} + ${y} = ${x + y}`);
  return (
    <button onClick={sumEvent}>Veja a soma dos números no console.</button>
  );
};

export default Challenge;
