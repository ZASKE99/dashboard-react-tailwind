import { useState } from "react";

export function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleTheme = () =>{
    setDarkMode(!darkMode)
    const body = document.querySelector("body")
    if(darkMode){
      body.classList.remove("dark")
    }else{
      body.classList.add("dark")
    }
  }

  return (
    <>
        <header className="flex items-center justify-between">
            <div>
                <h1 className="font-bold text-2xl text-slate-800 dark:text-slate-200">Social Media Dashboard</h1>
                <p className="text-slate-600 font-bold dark:text-slate-300">Seguidores Totales: 500,000</p>
            </div>

            {/* Toggle */}
            <div className="toggle">
              <label htmlFor="checkbox" className="font-bold text-slate-600 text-sm cursor-pointer select-none dark:text-slate-300">Modo Oscuro</label>
              <input type="checkbox" className="checkbox" id="checkbox" checked={darkMode} onChange={toggleTheme}/>
              <label for="checkbox" className="label">
                  <div className="ball"></div>
              </label>
            </div>
        </header>
    </>
  );
}