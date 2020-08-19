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
                        <div className="navItems_container">
                            {data.header.navItems.map(item => <div className="navItem">
                                    <Link to={item.href}>{item.label}</Link>
                                </div>)}
                            </div>
                    </div>
            )}
        />
    );
};

export default Header;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
