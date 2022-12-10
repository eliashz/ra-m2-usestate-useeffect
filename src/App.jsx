import { useState } from 'react'
import { Triangle, Circle, Square, Text } from './components/atoms'
import { Selector } from './components/molecules'
import allEqual from './helpers/allEqual'
import { dimensions } from './styles'

function App() {
  const [triangle, setTriangle] = useState(['99', '#FF0000'])
  const [circle, setCircle] = useState(['100', '#00FF00'])
  const [square, setSquare] = useState(['101', '#0000FF'])

  allEqual(triangle, square, circle, 0)
  allEqual(triangle, square, circle, 1)

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      <Text fontSize={dimensions.xl}>Ejercicio useState y useEffect</Text>
      <div>
        <Selector setValue={setTriangle} value={triangle}>
          Triangle
        </Selector>
        <Triangle size={triangle[0]} color={triangle[1]} />
        <Selector setValue={setCircle} value={circle}>
          Circle
        </Selector>
        <Circle size={circle[0]} color={circle[1]} />
        <Selector setValue={setSquare} value={square}>
          Square
        </Selector>
        <Square size={square[0]} color={square[1]} />
      </div>
    </div>
  )
}

export default App
