import React, { version } from 'react'
import ReactDOM from 'react-dom'

/*
const Title = ({course}) => <h1>{course}</h1>
*/

const Title = (props) => {
  return <h1>{props.course}</h1>
}
const Parrafo= ({frase,numero} )=> <p>{frase}  {numero}</p>
const Calcular = ({a,b,c}) => <p>Number of excercises {a+b+c}</p>
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Title course = {course}/>
      
        <Parrafo frase={part1} numero = {exercises1} />   
        <Parrafo frase={part2} numero = {exercises2} />
        <Parrafo frase={part3} numero = {exercises3} />
        <Calcular a={exercises1} b={exercises2} c={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))