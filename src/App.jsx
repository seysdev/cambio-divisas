import {
  Header,
  Main,
  Footer,
  CurrencyCalc,
  Results,
  HowWork,
  AboutUs,
} from "components";
import { ReactComponent as MoneyExchange } from "assets/money-exchange.svg";

import "styles/main.scss";
export function App() {
  return (
    <div className="wrapper flex flex-col h-screen">
      <Header />
      <Main>
        <div className="md:flex justify-center pt-14 mb-24">
          <h1 className="text-7xl font-bold leading-snug mt-10 inline-block md:mr-10 text-center md:text-left">
            Cambia tus divisas <br />
            de <span className="text-yellow-400">Soles</span> a{" "}
            <span className="text-yellow-400">Dolares</span>
            <MoneyExchange className="w-48 h-48 fill-current mt-4 mx-auto md:mx-none" />
          </h1>
          <CurrencyCalc />
        </div>
        <Results />
        <HowWork />
        <AboutUs />
      </Main>
      <Footer />
    </div>
  );
}
