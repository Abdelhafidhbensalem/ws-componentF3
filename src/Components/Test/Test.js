import React from 'react'
import PropTypes from 'prop-types';

const Test = ({bg,y}) => {

    return (
    <div style={{backgroundColor: bg}}>hello {y
    }</div>
  )
}


Test.propTypes={
    y:PropTypes.string
}
export default Test