import React from 'react';
import "./Header.css";
function Header(props) {

    const headerMessage="Welcome to HANGMAN Game :) Have Fun!"
    return (
        <div>
          <div className="header center">
              <h1>
              {headerMessage}
              </h1>
          </div>
         
        </div>
    )
}

export default Header
