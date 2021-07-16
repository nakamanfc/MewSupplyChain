import React from 'react'
import '../../Style/Introduce.css'
import Card from './Card';

function Introduce() {
    window.addEventListener('scroll',console.log(window.scrollX));
    return (
        <div className='Introduce-container'>
            <div className='Introduce-content-up'>
                <div className='Introduce-content-title'>
                    <div className='Introduce-content-title-1'>
                        Proof of Origin on the Blockchain
                    </div>
                    <div className='Introduce-content-title-2'>
                        Applying blockchain technology provides transparency, authentication, and traceability.
                    </div>
                </div>
            </div>
            <div className='Introduce-content-down'>
                <Card type='1'/>
                <Card type='2'/>
                <Card type='3'/>
            </div>
        </div>
    )
}

export default Introduce
