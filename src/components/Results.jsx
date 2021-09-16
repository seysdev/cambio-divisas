export function Results() {
  return (
    <div className="results bg-white rounded-lg p-4 pb-10 mb-20">
      <h2 className="text-black text-3xl font-bold mb-6">Conversion</h2>
      <div class="overflow-x-auto" data-theme="retro">
        <table className="w-full text-left rounded table-zebra font-sans">
          <thead>
            <tr>
              <th className="bg-gray-900 text-white py-2 px-4 border-black border">
                Importe
              </th>
              <th className="bg-gray-800 text-white py-2 px-4 border-black border">
                De
              </th>
              <th className="bg-gray-900 text-white py-2 px-4 border-black border">
                A
              </th>
              <th className="bg-gray-800 text-white py-2 px-4 border-black border">
                Cambio
              </th>
              <th className="bg-gray-900 text-white py-2 px-4 border-black border">
                Contactar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-black">
              <td className="py-2 px-4 border-black border">2000</td>
              <td className="py-2 px-4 border-black border">Soles</td>
              <td className="py-2 px-4 border-black border">Dolares</td>
              <td className="py-2 px-4 border-black border">4000</td>
              <td className="py-2 px-4 border-black border w-40">
                <button
                  data-theme="dark"
                  class="btn btn-secondary w-full"
                >
                  Cambiar
                </button>
              </td>
            </tr>
            <tr className="text-black">
              <td className="py-2 px-4 border-black border">2000</td>
              <td className="py-2 px-4 border-black border">Soles</td>
              <td className="py-2 px-4 border-black border">Dolares</td>
              <td className="py-2 px-4 border-black border">4000</td>
              <td className="py-2 px-4 border-black border w-40">
                <button data-theme="dark" class="btn btn-secondary w-full">
                  Cambiar
                </button>
              </td>
            </tr>
            <tr className="text-black">
              <td className="py-2 px-4 border-black border">2000</td>
              <td className="py-2 px-4 border-black border">Soles</td>
              <td className="py-2 px-4 border-black border">Dolares</td>
              <td className="py-2 px-4 border-black border">4000</td>
              <td className="py-2 px-4 border-black border w-40">
                <button data-theme="dark" class="btn btn-secondary w-full">
                  Cambiar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
