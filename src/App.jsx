
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {
  
  function handleClick(){
    alert("I am clicked.")
  }

  const handleClick3 = () => {
    alert("barbar shudu amake click koro")
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
     
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>

      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert("why did you click me again?")
      }}>Click Me again</button>
      <button onClick={handleClick3}>Click me more</button>
      <button onClick={() => alert('abar click korlire ekhon ki hobe re amar')}>click me please</button>
     
     <button onClick={() => handleAdd5(10)}>Click ADD 5</button>
    </>
  )
}

export default App
