import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Table from './Table'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.Navbar_Items = [
      { name: "Profile", URL: '#' , target: '_SELF'},
      { name: "Blog", URL: '#' , target: '_SELF'},
      { name: "Link", URL: '#' , target: '_SELF'},
      { name: <FontAwesomeIcon icon={faHackerrank} />, URL: 'https://www.hackerrank.com/mcgill_will' , target: '_blank'},
      { name: <FontAwesomeIcon icon={faLinkedin} />, URL: 'https://www.linkedin.com/in/will-mcgill/' , target: '_blank' },
      { name: <FontAwesomeIcon icon={faGithub} />, URL: 'https://github.com/WillMcGill' , target: '_blank'}];
  }
  render() {

    return (
      //<div className="container">
      <Navbar NavbarItems={this.Navbar_Items} />

      //</div>
    );
  }
}

export default App
