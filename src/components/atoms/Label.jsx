import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ children, id }) => {
  return <label htmlFor={id}>{children}</label>
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

export default Label
