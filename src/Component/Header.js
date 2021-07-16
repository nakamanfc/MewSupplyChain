import React from 'react'
import HeaderButton from './Button/HeaderButton'
import '../Style/Header.css'

function Header() {
    return (
        <>
            <div className='header-box'>
                <div className='header-items'>
                    <div className='header-items-left-box'>
                        <img src="https://realitems.io/img/ri-logo-black.png"/>
                    </div>
                    <div className='header-items-right-box'>
                        <div className='header-item-button-list'>
                            <div className='header-items-button'>
                                <HeaderButton/>
                            </div>
                            <div className='header-items-button'>
                                <HeaderButton/>
                            </div>
                            <div className='header-items-button'>
                                <HeaderButton/>
                            </div>
                            <div className='header-items-button'>
                                <HeaderButton/>
                            </div>
                            <div className='header-items-button'>
                                <HeaderButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
