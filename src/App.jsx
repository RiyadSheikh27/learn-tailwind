import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <div className="flex bg-slate-900 items-center text-white justify-between p-4">
        <div className="font-bold">Logo</div>
          <div className="hidden sm:flex gap-2">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        <button className="text-xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}>☰</button>
      </div>
        {open && (
          <div className="flex flex-col justify-center gap-2 bg-slate-900 text-white p-4 sm:hidden">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white p-4 gap-4 text-center font-semibold sm:text-sm">
        <div className="bg-slate-800 p-4 rounded hover:bg-slate-900 hover:scale-105 transition-all duration-300">Feature One</div>
        <div className="bg-slate-800 p-4 rounded hover:bg-slate-900 hover:scale-105 transition-all duration-300">Feature Two</div>
        <div className="bg-slate-800 p-4 rounded hover:bg-slate-900 hover:scale-105 transition-all duration-300">Feature Three</div>
        <div className="bg-slate-800 p-4 rounded hover:bg-slate-900 hover:scale-105 transition-all duration-300">Feature Four</div>
        <div className="bg-slate-800 p-4 rounded hover:bg-slate-900 hover:scale-105 transition-all duration-300">Feature Five</div>
        <div className="bg-slate-800 p-4 rounded hover:bg-slate-900 hover:scale-105 transition-all duration-300">Feature Six</div>
        <div className="bg-slate-800 p-4 rounded hover:bg-slate-900 hover:scale-105 transition-all duration-300">Feature Seven</div>
      </div>
    </div >
  );
}

export default App;