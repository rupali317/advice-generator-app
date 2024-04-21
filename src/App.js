import { AdviceCard } from "./components/AdviceCard";
import * as GlobalStyles from "./styles/Global.style";

function App() {
  return (
    <>
      <GlobalStyles.BaseStyles />
      <GlobalStyles.ResetStyles />
      <GlobalStyles.DefaultStyles />
      <AdviceCard />
    </>
  );
}

export default App;
