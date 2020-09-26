import React from 'react';
import Logo from '../img/Netflix-logo.png';

class Footer extends React.Component{
    render() {
        return (
            <footer>
                <img src={Logo} />
                <p>©2020. All Rights Reserved</p>
                
            </footer>
        )
    }
}

export default Footer;