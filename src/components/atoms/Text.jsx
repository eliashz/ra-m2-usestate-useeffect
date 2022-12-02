import React from 'react';
import { colors, dimensions } from '../../styles';

export const Text = ({children, color = colors.font.base, fontSize = dimensions.font.base }) => {
  return (
    <p style={{ color, fontSize }}>{children}</p>
  )
}