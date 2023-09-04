import { useState, useMemo, useCallback } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { Effect } from "effect"
import { PokemonLog } from "PokemonLog"


export const App = () => {
  const [count, setCount] = useState(0)

  const task = useMemo(
    () => Effect.sync(() => setCount((current) => current + 1)),
    [setCount]
  )

  const increment = useCallback(() => Effect.runSync(task), [task])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <PokemonLog />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
