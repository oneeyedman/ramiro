import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function setBodyClass(str) {
  const body = document.body;
  body.classList.add(str);
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionVisibility: false,
      total: 100,
      currentButtonText: ''
    };
    this.showSection = this.showSection.bind(this);
    this.setButtons = this.setButtons.bind(this);
    this.setMyText = this.setMyText.bind(this);
  }

  showSection() {
    this.setState({
      sectionVisibility: true
    });
  }


  setButtons(event) {
    const newTotal = parseInt(event.target.value);
    this.setState({
      total: newTotal
    });
  }

  setMyText(event) {
    const text = event.target.dataset.loquesea;
    this.setState({
      currentButtonText: text
    });

  }

  getButtons() {
    const {total} = this.state;
    const buttons = [];
    for (let i=0; i<total; i++) {
    buttons.push(<button data-loquesea={`paco ${i}`} onClick={this.setMyText}>Nº {i}</button>);
    }
    return buttons;
  }

  render() {
    const {sectionVisibility, total, currentButtonText} = this.state;
    return (
      <div className="app">
        {sectionVisibility && setBodyClass('paco')}
        {!sectionVisibility && setBodyClass('no-paco')}
        <Header action={this.showSection} />
        <Main sectionVisibility={sectionVisibility} />

        <p>{currentButtonText}</p>
        <input type="number" defaultValue={total} onKeyUp={this.setButtons}/>
        {this.getButtons()}
      </div>
    );
  }
}

export default App;
