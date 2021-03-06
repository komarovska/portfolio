/* eslint-disable
jsx-a11y/anchor-has-content
jsx-a11y/anchor-is-valid
jsx-a11y/click-events-have-key-events
jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import '../styles/index.sass';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState("stage");
  useEffect(() => {
    const pageWrapper = document.querySelector(".page-wrapper");
    const stageHeight = document.querySelector(".stage-container").clientHeight;
    const technologiesHeight = document.querySelector(".technologies-section-container").clientHeight;
    const experienceHeight = document.querySelector(".experience-section-container").clientHeight;
    const projectsHeight = document.querySelector(".projects-container").clientHeight;
    const contactsHeight = document.querySelector(".contacts-container").clientHeight;
    const runOnScroll = () => {
      if (pageWrapper.scrollTop < stageHeight) {
        setPosition("stage");
      }
      if (pageWrapper.scrollTop >= stageHeight && pageWrapper.scrollTop < technologiesHeight + stageHeight) {
        setPosition("technologies");
      }
      if (pageWrapper.scrollTop >= stageHeight + technologiesHeight && pageWrapper.scrollTop < technologiesHeight + stageHeight + experienceHeight) {
        setPosition("experience");
      }
      if (pageWrapper.scrollTop >= technologiesHeight + stageHeight + experienceHeight && pageWrapper.scrollTop < technologiesHeight + stageHeight + experienceHeight + projectsHeight) {
        setPosition("projects")
      }
      if (pageWrapper.scrollTop >= technologiesHeight + stageHeight + experienceHeight + projectsHeight) {
        setPosition("contacts")
      }
    };
    pageWrapper.addEventListener('scroll', runOnScroll);
    return () => pageWrapper.removeEventListener("scroll", runOnScroll);
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          header: datoCmsHeader {
            navItems {
              href
              label
            }
          }
        }
      `}
      render={(data) => (
        <div className={`header header-${position}`} onClick={() => setShowMenu(!showMenu)}>
          <div
            className={`burger ${showMenu ? 'open' : 'closed'}`}
          >
            <div className="burger_line" />
            <div className="burger_line" />
            <div className="burger_line" />
          </div>
          <nav className={`navItems_container ${showMenu ? 'open' : 'closed'}`}>
            {data.header.navItems.map((item) => (
              <div className={`navItem navItem-${position}`}>
                <Link className={position} to={item.href}>{item.label}</Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    />
  );
};

export default Header;
