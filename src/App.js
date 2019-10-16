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
      { name: "Profile", URL: '#' },
      { name: "Blog", URL: '#' },
      { name: "Link", URL: '#' },
      { name: <FontAwesomeIcon icon={faHackerrank} />, URL: "https://www.hackerrank.com/mcgill_will" },
      { name: <FontAwesomeIcon icon={faLinkedin} />, URL: 'https://www.linkedin.com/in/will-mcgill/' },
      { name: <FontAwesomeIcon icon={faGithub} />, URL: 'https://github.com/WillMcGill' }];
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
