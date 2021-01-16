/* eslint-disable
jsx-a11y/anchor-has-content
jsx-a11y/anchor-is-valid
jsx-a11y/click-events-have-key-events
jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import '../styles/index.sass';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
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
        <div className="header" onClick={() => setShowMenu(!showMenu)}>
          <div
            className={`burger ${showMenu ? 'open' : 'closed'}`}
          >
            <div className="burger_line" />
            <div className="burger_line" />
            <div className="burger_line" />
          </div>
          <nav className={`navItems_container ${showMenu ? 'open' : 'closed'}`}>
            {data.header.navItems.map((item) => (
              <div className="navItem">
                <Link to={item.href}>{item.label}</Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    />
  );
};

export default Header;
