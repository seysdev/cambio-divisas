export function Header() {
  return (
    <header className="header bg-primary">
      <div className="container mx-auto py-8">
        <strong className="text-2xl bg-yellow-400 inline-flex py-2 px-4 rounded-full text-black">
          Cambia Divisas{" "}
          <span className="w-8 h-8 ml-2 text-center rounded-full bg-green-900 flex items-center justify-center text-white">
            $
          </span>
        </strong>
      </div>
    </header>
  );
}
