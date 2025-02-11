const TemplateExpressions = () => {
  const name = "Gabriel";
  const data = {
    age: 31,
    job: "Progamador",
    redidence: "Manaus",
  };
  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>
        {name} tem {data.age} anos, é {data.job} e reside em {data.redidence}
      </p>
      <p>Soma de números 4 + 4= {4 + 4}</p>
      <p>{console.log("JSX")}</p>
    </div>
  );
};

export default TemplateExpressions;
