import SearchBar from "./components/SearchBar";

function App() {

  return (
    <div className="bg-slate-800 h-[100vh]">
      <h1 className="text-xl text-center font-bold text-white pt-2 pb-5">Query Filter Builder</h1>
      <div className="flex flex-row justify-center" >
        <SearchBar />
      </div>
    </div>
  )
}

export default App
