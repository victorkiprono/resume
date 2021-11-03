import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink } from 'react-router-hash-link';

import { FaGithub , FaTwitter} from 'react-icons/fa';
import { MdMail, MdPhone} from 'react-icons/md';
// import logo from '../images/My-logo4.ico'
import logo from '../images/logoV.png'

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
                <img src={logo} alt='logo' />
                <h1><HashLink smooth to="/#start" className="h1_links"> VICTOR KIPRONO </HashLink></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> kipronovictormutai@gmail.com </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><HashLink smooth to="/#about" className="links">About</HashLink></li>
                    <li className="sidebar-nav-items"><HashLink to="/#education" className="links" >My Journey</HashLink></li>
                    <li className="sidebar-nav-items"><HashLink smooth to="/#interest" className="links">Interest</HashLink></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> 
                            <a 
                                href="https://github.com/victorkiprono" 
                                rel="opener noreferrer" 
                                target="_blank" 
                                // class="fa fas fa-github fa-lg"
                            ><FaGithub size={30} title = 'Github'/> </a>
                        </li>
                        <li className="sidebar-nav-icons"> 
                            <a 
                                href="https://twitter.com/" 
                                rel="opener noreferrer" 
                                target="_blank" 
                                // className="fa fas fa-twitter fa-lg"
                            ><FaTwitter size={30} title = 'Twitter' /> </a>
                        </li>
                        <li className="sidebar-nav-icons"> 
                            <a 
                                href="mailto:kipronovictormutai@gmail.com" 
                                rel="opener noreferrer" 
                                target="_blank" 
                                // class="fa fas fa-envelope fa-lg"
                            ><MdMail size={30} title = 'Gmail'/> </a>
                        </li>
                        <li className="sidebar-nav-icons">
                            <a 
                                href="tel: +254727471551" 
                                rel="opener noreferrer" 
                                target="_blank" 
                                // class="fa fas fa-envelope fa-lg"
                            ><MdPhone size={30} fontWeight='bold' title = '+254727471551'/> </a>
                        </li>
                    </ul>
                </div>
              
            </div>
        )
    }
}

export default Sidebar