/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import "../styles/index.sass";

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
            render={data => (
                    <div className="header">
                        <div className={`burger ${showMenu && 'open'}`} onClick={() => setShowMenu(!showMenu)}>
                            <div className="burger_line" />
                            <div className="burger_line" />
                            <div className="burger_line" />
                        </div>
                        <nav className={`navItems_container ${showMenu && 'open'}`}>

                            {data.header.navItems.map(item => <div className="navItem">
                                    <Link to={item.href}>{item.label}</Link>
                                </div>)}
                            </nav>
                    </div>
            )}
        />
    );
};

export default Header;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
