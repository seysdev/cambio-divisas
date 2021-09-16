export function AboutUs() {
  return (
    <div className="about-us bg-white rounded-lg p-4 pb-10 mb-20">
      <h2 className="text-black text-3xl font-bold mb-6">Dicen de nosotros</h2>
      <div className="md:flex -mx-4">
        <div className="text-black shadow flex p-4 border mx-4 mb-8 md:mb-0">
          <img
            src="https://picsum.photos/id/1005/200/200"
            className="w-20 rounded-full"
            alt=""
          />
          <div className="ml-4">
            <h2 className="font-bold">Sebastian Yabiku</h2>
            <p className="text-sm">Excelente aplicacion</p>
          </div>
        </div>
        <div className="text-black shadow flex p-4 border mx-4 mb-8 md:mb-0">
          <img
            src="https://picsum.photos/id/1006/200/200"
            className="w-20 rounded-full"
            alt=""
          />
          <div className="ml-4">
            <h2 className="font-bold">Jose luis Yabiku</h2>
            <p className="text-sm">Muy eficiente</p>
          </div>
        </div>
        <div className="text-black shadow flex p-4 border mx-4 mb-8 md:mb-0">
          <img
            src="https://picsum.photos/id/1002/200/200"
            className="w-20 rounded-full"
            alt=""
          />
          <div className="ml-4">
            <h2 className="font-bold">Melisa Yabiku</h2>
            <p className="text-sm">Los cambios con los mejores precios</p>
          </div>
        </div>
        <div className="text-black shadow flex p-4 border mx-4 mb-8 md:mb-0">
          <img
            src="https://picsum.photos/id/1008/200/200"
            className="w-20 rounded-full"
            alt=""
          />
          <div className="ml-4">
            <h2 className="font-bold">Cristina Yabiku</h2>
            <p className="text-sm">Excelente servicio</p>
          </div>
        </div>
      </div>
    </div>
  );
}
