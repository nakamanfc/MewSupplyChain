import React from 'react'
import '../../Style/BodyButton.css'

function BodyButton({text, type}) {
    return (
        <>
        {type?(
        <div className='BodyButton-box-1'>
            {text}
        </div>
        ):(
        <div className='BodyButton-box'>
            {text}
        </div>
        )}
        </>
    )
}

export default BodyButton
