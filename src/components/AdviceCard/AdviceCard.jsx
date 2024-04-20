import React from "react";

export const AdviceCard = () => {
  const [advice, setAdvice] = React.useState({ id: "", text: "" });

  React.useEffect(() => {
    fetchAdviceApi();
  }, []);

  const fetchAdviceApi = async () => {
    await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then(({ slip }) => setAdvice({ id: slip.id, text: slip.advice }));
  };

  return (
    <div>
      <p>{advice.id}</p>
      <q>{advice.text}</q>
      <button onClick={fetchAdviceApi}></button>
    </div>
  );
};
