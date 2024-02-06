import { useState } from "react"
import { IncrementComponent } from "./increment"
import { DecrementComponent } from "./decrement"
import { CounterComponent } from "./couter"
import { ChangeNameComponent } from "./change_name"

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Damilola")
  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    if (count === 0) {
      return
    }
    setCount(count - 1)
  }
  function ChangeName() {
    setName("Isreal")
  }


  return (
    <>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 60
      }}>
        <div>
          <DecrementComponent decrement={decrement} />
          <CounterComponent counter={count} />
          <IncrementComponent incrementFunc={increment} />
        </div>
      </div>
      <ChangeNameComponent name={name} changeName={ChangeName} />
    </>
  )
}


export default App

