export function Results(props) {
  const { results } = props;
  console.log("results", results);
  return (
    <div className="results bg-white rounded-lg p-4 pb-10 mb-20">
      <h2 className="text-black text-3xl font-bold mb-6">Conversion</h2>
      <div className="overflow-x-auto" data-theme="retro">
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
            {results.map((result) => (
              <tr className="text-black">
                <td className="py-2 px-4 border-black border">
                  {result.import}
                </td>
                <td className="py-2 px-4 border-black border">{result.de}</td>
                <td className="py-2 px-4 border-black border">{result.a}</td>
                <td className="py-2 px-4 border-black border">
                  {result.change.toFixed(2)}
                </td>
                <td className="py-2 px-4 border-black border w-40">
                  <button
                    data-theme="dark"
                    className="btn btn-secondary w-full"
                    onClick={() =>
                      window.open(
                        `https://api.whatsapp.com/send?phone=+51923708059&text=Desearia%20cambiar%20${result.import}%20de%20${result.de}%20a%20${result.a}%20con%20un%20cambio%20de%20${result.change.toFixed(2)}`,
                        "_blank"
                      )
                    }
                  >
                    Cambiar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
