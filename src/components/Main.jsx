export function Main(props) {
  const { children, className = "" } = props;
  return (
    <main className={`main flex-grow ${className}`}>
      <div className="container mx-auto py-6 h-full">{children}</div>
    </main>
  );
}
