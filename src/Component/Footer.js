import React from 'react'
import '../Style/Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';

function Footer() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#2D312F" fill-opacity="1" d="M0,192L80,192C160,192,320,192,480,213.3C640,235,800,277,960,282.7C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <div className='foottt'>
                <div className='foot-contact'>
                    <IconButton className="foot-icon">
                        <FacebookIcon fontSize='large'/>
                    </IconButton>
                    <IconButton className="foot-icon">
                        <TwitterIcon fontSize='large'/>
                    </IconButton>
                    <IconButton className="foot-icon">
                        <GitHubIcon fontSize='large'/>
                    </IconButton>
            </div>
                <div className='foot-end'>
                    ©Róck Cát Project From 2021 To The Moon.
                </div>
            </div>
        </>
    )
}

export default Footer
