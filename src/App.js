import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Table from './Table'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';


class App extends React.Component{

  constructor(props){
    super(props);
    this.Navbar_Items = ["Profile", "Blog", "Link", <FontAwesomeIcon icon={faHackerrank} /> , <FontAwesomeIcon icon={faLinkedin} />, <FontAwesomeIcon icon={faGithub} />];
  }
  render(){
  
  return (
    //<div className="container">
      <Navbar NavbarItems = {this.Navbar_Items}/>
      
    //</div>
  );
}
}

export default App
