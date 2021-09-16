import { useState } from "react";
import { CurrencyInput } from "components";
import { dataCurrency } from "./data.config";

export function CurrencyCalc(props) {
  const { cb } = props;

  const [amount, setAmount] = useState({
    import: "",
    de: "SOL",
    a: "USD",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = dataCurrency.divisas
      .filter((divisa) => divisa.currency !== amount.de)
      .map((divisa) => {
        // console.log("divisa", divisa);
        return {
          import: amount.import,
          de: "Soles",
          a: divisa.text,
          change:
            parseFloat(amount.import.replace(/,/g, "")) /
            parseFloat(divisa.rates.SOL),
        };
      });

    cb(result);
  };

  return (
    <div className="currency bg-gray-800 p-8 rounded-2xl w-96 md:ml-10 self-start mt-10 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-lg mb-2 block text-yellow-400">Importe</label>
          <CurrencyInput
            className="bg-white rounded p-3 w-full text-black focus:outline-none focus:border"
            type="text"
            value={amount.import}
            onKeyUp={(event) => {
              setAmount((state) => ({
                ...state,
                import: event.target.value,
              }));
            }}
            maskOptions={{
              prefix: "",
              suffix: "",
              includeThousandsSeparator: true,
              thousandsSeparatorSymbol: ",",
              allowDecimal: true,
              decimalSymbol: ".",
              decimalLimit: 2,
              allowNegative: false,
            }}
          />
        </div>
        <div className="mb-4">
          <label className="text-lg mb-2 block text-yellow-400">De</label>
          <select
            className="bg-white rounded py-3 w-full text-black focus:outline-none focus:border"
            onChange={(event) =>
              setAmount((state) => ({ ...state, de: event.target.value }))
            }
            value={amount.de}
            disabled={true}
          >
            {dataCurrency.divisas.map((divisa, id) => (
              <option key={id} value={divisa.currency}>
                {divisa.text}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-8">
          <label className="text-lg mb-2 block text-yellow-400">A</label>
          <select
            className="bg-white rounded py-3 w-full text-black focus:outline-none focus:border"
            onChange={(event) =>
              setAmount((state) => ({ ...state, a: event.target.value }))
            }
            value={amount.a}
          >
            {dataCurrency.divisas.map((divisa, id) => (
              <option key={id} value={divisa.currency}>
                {divisa.text}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <button className="btn btn-primary w-full" disabled={!amount.import}>
            Convertir
          </button>
        </div>
      </form>
    </div>
  );
}
