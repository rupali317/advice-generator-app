import React from "react";
import { DesktopWidth } from "../../constants/Breakpoints";
import * as AdviceCardStyle from "../../styles/AdviceCard.style";

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
    <AdviceCardStyle.Container>
      <AdviceCardStyle.RibbonText>
        advice #{advice.id}
      </AdviceCardStyle.RibbonText>
      <AdviceCardStyle.Quote>{advice.text}</AdviceCardStyle.Quote>
      <picture>
        <source
          srcSet="/images/pattern-divider-desktop.svg"
          media={`(min-width:${DesktopWidth})`}
        />
        <img
          src="/images/pattern-divider-mobile.svg"
          alt=""
          role="presentation"
        />
      </picture>
      <AdviceCardStyle.Button
        onClick={fetchAdviceApi}
        aria-label="Generate advice"
      >
        <img src="/images/icon-dice.svg" alt="" role="presentation" />
      </AdviceCardStyle.Button>
    </AdviceCardStyle.Container>
  );
};
