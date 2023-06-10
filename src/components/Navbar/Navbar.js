import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import logo from "../../assets/images/SkillShareHub-svg.svg";
import { social } from "../../assets/social/social";
import { links } from "../../assets/links/links";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
   
    <nav
      className="navbar is-transparent has-text-centered 
                    is-fixed-top "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="logo" width="112" height="28" />
        </a>

        <div
          className={`navbar-burger burger ${showLinks ? "is-active" : ""}`}
          data-target="navbarMenu"
          onClick={toggleLinks}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        id="navbarMenu has-text-centered"
        className={`navbar-menu ${showLinks ? "is-active" : ""}`}
        ref={linksContainerRef}
      >
    
          <div className="navbar-start">
            <ul className="navbar-item" ref={linksRef}>
              {links.map((link) => (
                <li className="navbar-item" key={link.id}>
                  <Link className="navbar-item" to={link.url}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <div class="navbar-item">
              <div className="field is-grouped">
                <p class="control">
                  <a
                    class="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="https://bulma.io"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
                  >
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>Tweet</span>
                  </a>
                </p>
                <p class="control">
                  <a
                    class="button is-primary"
                    href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip"
                  >
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </nav>
  );
};

export default Navbar;
