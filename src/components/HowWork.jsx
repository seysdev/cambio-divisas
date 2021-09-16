import { ReactComponent as Complain } from "assets/complain.svg";
import { ReactComponent as Currency } from "assets/currency.svg";
import { ReactComponent as Money } from "assets/money.svg";
export function HowWork() {
  return (
    <div className="about-us bg-white rounded-lg p-4 pb-10 text-black mb-20">
      <h2 className="text-black text-3xl font-bold mb-6">Como funciona</h2>
      <div className="md:flex justify-center">
        <div className="mb-8 mx-auto md:mx-4 text-center shadow border rounded-full w-72 h-72 flex flex-col justify-center">
          <Currency className="w-32 h-32 mx-auto" />
          <h3 className="text-lg font-bold mt-4">Calcula tu dinero</h3>
        </div>
        <div className="mb-8 mx-auto md:mx-4 text-center shadow border rounded-full w-72 h-72 flex flex-col justify-center">
          <Money className="w-32 h-32 mx-auto" />
          <h3 className="text-lg font-bold mt-4">Elige tu conversión</h3>
        </div>
        <div className="mx-auto md:mx-4 text-center shadow border rounded-full w-72 h-72 flex flex-col justify-center">
          <Complain className="w-32 h-32 mx-auto" />
          <h3 className="text-lg font-bold mt-4">Contacta con un asesor</h3>
        </div>
      </div>
    </div>
  );
}
