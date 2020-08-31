import React, {Component} from "react";
import Section from './Section';

class Main extends Component {
  render() {
    const {sectionVisibility} = this.props;
    return (
      <main className="app__main">
        {sectionVisibility && <Section />}
        {sectionVisibility && <Section />}
      </main>
    );
  }
}

export default Main;
