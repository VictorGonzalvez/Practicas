import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [promedio, setPromedio] = useState(0)
  const Title = ({prop}) => <h1>{prop}</h1>
  const Estado = ({frase, contador}) => <p>{frase} {contador}</p>
  const handleClickGood = () =>{
    setGood(good+1);
    setTotal(total + 1);
    setPromedio(promedio + 1)
    console.log(total)
  }
  const handleClickNeutral = () =>{
    setNeutral(neutral+1);
    setTotal(total + 1);
  }
  const handleClickBad = () =>{
    setBad(bad+1);
    setTotal(total + 1);
    setPromedio(promedio - 1)
  }
  
  
  /*Amplíe su aplicación para que muestre más estadísticas sobre los comentarios recopilados:
   el número total de comentarios recopilados, la puntuación promedio 
  (buena: 1, neutral: 0, mala: -1) y el porcentaje de comentarios positivos.
  */
  

  return (
    <div>
      <Title prop = 'Give Feedback'/>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <Title prop = 'Statistics'/>
      <Estado frase = 'Good' contador = {good}/>
      <Estado frase = 'Neutral' contador = {neutral}/>
      <Estado frase = 'Bad' contador = {bad}/>
      <Estado frase = 'All' contador= {bad + neutral + good}/>
      <Estado frase = 'Promedio' contador = {promedio/total}/>
      <Estado frase = 'Porcentaje de positivos' contador={good*100/total} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)