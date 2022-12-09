import { useState } from 'react'
import { Text } from './components/atoms'
import { Selector } from './components/molecules'
import { dimensions } from './styles'

function App() {
  const [figure, setFigure] = useState({
    Triangle: { size: '99', color: '#FF0000' },
    Circle: { size: '100', color: '#00FF00' },
    Square: { size: '101', color: '#0000FF' },
  })

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      <Text fontSize={dimensions.xl}>Ejercicio useState y useEffect</Text>
      <div>
        <Selector
          shape='Triangle'
          shapeSize={figure.Triangle.size}
          shapeColor={figure.Triangle.color}
          setFigure={setFigure}
          figure={figure}
        />
        <Selector
          shape='Circle'
          shapeSize={figure.Circle.size}
          shapeColor={figure.Circle.color}
          setFigure={setFigure}
          figure={figure}
        />
        <Selector
          shape='Square'
          shapeSize={figure.Square.size}
          shapeColor={figure.Square.color}
          setFigure={setFigure}
          figure={figure}
        />
      </div>
    </div>
  )
}

export default App
