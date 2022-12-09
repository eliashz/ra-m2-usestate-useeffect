import React, { useState } from 'react'
import useEqual from '../../hooks/useEqual'
import { Figure, Input } from '../atoms'
import PropTypes from 'prop-types'

const Selector = ({ shape, shapeSize, shapeColor, setFigure, figure }) => {
  const [size, setSize] = useState(shapeSize)
  const [color, setColor] = useState(shapeColor)

  useEqual(setFigure, figure, shape, size, color)

  return (
    <div style={{ marginBottom: '50px' }}>
      <Input type='number' value={size} min='1' style={{ width: '50px' }} setValue={setSize}>
        {shape} Size
      </Input>
      <Input type='color' setValue={setColor} value={color}>
        {shape} Color
      </Input>
      <Figure shape={shape} shapeSize={size} shapeColor={color} />
    </div>
  )
}

Selector.propTypes = {
  shape: PropTypes.string.isRequired,
  shapeSize: PropTypes.string.isRequired,
  shapeColor: PropTypes.string.isRequired,
  setFigure: PropTypes.func.isRequired,
  figure: PropTypes.object,
}

export default Selector
