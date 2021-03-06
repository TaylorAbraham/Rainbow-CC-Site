import React, { Component, useRef } from 'react';
import ParticlesBg  from "particles-bg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  render() {

    if(this.props.data){
      var discord = this.props.data.discord;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
    }

    return (
      <header id="home">
      <video playsInline autoPlay muted loop>
        <source src="/images/Pride_Flag.webm" type="video/webm" />
      </video>
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	          <li><a className="smoothscroll" href="#events">Events</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>
            <hr />
            <ul className="social">
               <a href={discord} target="_blank" className="button btn project-btn"><FontAwesomeIcon icon={faDiscord} />Join us on Discord!</a>
               {/* <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Twitter</a> */}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
