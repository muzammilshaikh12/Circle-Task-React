import React,{useState} from 'react';

import './Circle.css'

const Circle = props =>{
    const [flag,setFlag] = useState(true)
    const addClass = event => {
        event.preventDefault()
        setFlag(!flag)
    }
    return <div className={flag === true?'circle': 'circle-grey'} onClick={addClass}>

    </div>
}

export default Circle