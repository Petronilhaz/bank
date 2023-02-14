import { Header } from "./components/Header";
import { MoneyManager } from "./components/MoneyManager";
import { InputBox } from "./components/InputBox";
import { Provider } from "./contexts";
import { TransationList } from "./components/TransationList";
import "./style/global.css";

function App() {
  return (
    <>
      <Provider>
        <Header />
        <MoneyManager />
        <InputBox />
        <TransationList />
      </Provider>
    </>
  );
}

export default App;
