import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar'

function SocialIcon(props) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = (event) => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const avatarStyle = {
        backgroundColor: isHover ? '#fff' : 'var(--main-color)',
        border: '2px solid #fff',
        padding: '1.5rem',
        width: '2.2rem',
        height: '2.2rem',
        color: isHover ? 'var(--main-color)' : '#fff',
    }

    return (
        <a 
            target='_blank'
            rel='noopener'
            href={props.link}
            alt={props.title}
            className="px-2">
        
            <Avatar 
                style={avatarStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {props.icon}
            </Avatar>
        
        </a>
    )
}

export default SocialIcon