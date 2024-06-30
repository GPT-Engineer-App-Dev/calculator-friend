import Calculator from "../components/Calculator";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div>
        <h1 className="text-3xl text-center">Calculator App</h1>
        <Calculator />
      </div>
    </main>
  );
}

export default Index;