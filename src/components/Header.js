import React, {Component} from "react";
import './Header.css';

class Header extends Component {
  render() {
    const {action} = this.props;
    return (
      <header className="header app__header">
          <div className="app__wrapper">
            <a href="/" className="header__logo">
              <h1 className="header__title">Ramiro</h1>
            </a>

            <button className="button header__button" onClick={action}>Algo</button>
            
          </div>
        </header>
    );
  }
}

export default Header;