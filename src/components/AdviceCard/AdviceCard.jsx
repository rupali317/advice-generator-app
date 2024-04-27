import React from "react";
import { DesktopWidth } from "../../constants/Breakpoints";
import * as AdviceCardStyle from "../../styles/AdviceCard.style";

export const AdviceCard = () => {
  const [advice, setAdvice] = React.useState({ id: "", text: "" });
  const [isButtonStateDisabled, setButtonStateDisabled] = React.useState(false);

  React.useEffect(() => {
    fetchAdviceApi();
  }, []);

  const fetchAdviceApi = async () => {
    setButtonStateDisabled(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const { slip } = data;
    setAdvice({ id: slip.id, text: slip.advice });
    setButtonStateDisabled(false);
  };

  return (
    <AdviceCardStyle.Container
      aria-live="assertive"
      className={advice.id === "" ? "display-none" : "display-flex"}
    >
      <AdviceCardStyle.RibbonText>
        {`advice # ${advice.id}`}
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
        className={
          isButtonStateDisabled ? "disabled" : ""
        } /*RRC: {isButtonStateDisabled ? disabled : ""} */
        onClick={fetchAdviceApi}
        title="Generate advice"
        aria-label="Generate advice"
      >
        <img src="/images/icon-dice.svg" alt="" role="presentation" />
      </AdviceCardStyle.Button>
    </AdviceCardStyle.Container>
  );
};
