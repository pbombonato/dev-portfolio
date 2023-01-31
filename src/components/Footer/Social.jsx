import React from "react";
import { GitHub, LinkedIn, Mail } from '@mui/icons-material'

import SocialIcon from "./SocialIcon";

function Social(props) {
    const socialMediaArray = [
        {
            title: 'GitHub',
            link: 'https://www.github.com/pbombonato/',
            icon: <GitHub style={{fontSize: '2.2rem'}} />
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/pablobombonato',
            icon: <LinkedIn style={{fontSize: '2.2rem'}} />
        },
        {
            title: 'Mail',
            link: 'mailto:pablo.h.bombonato@gmail.com',
            icon: <Mail style={{fontSize: '2.2rem'}} />
        }
    ]

    return (
        <div className="row py-5">
            <div className="col-12 d-flex justify-content-center">
                {socialMediaArray.map(e => { return (
                    <SocialIcon {...e} />
                )})}
            </div>
        </div>
    )
}

export default Social