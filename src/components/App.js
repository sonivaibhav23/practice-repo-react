import React, { Component } from "react";
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Jokes from './Jokes';
import profile from '../assets/profile.jpg';

class App extends Component {
  state = { displayBio: false };

  //   constructor() {
  //     super();
  //     this.state = { displayBio: false };

  //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  //   }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    const bio = this.state.displayBio ? (
      <div>
        <p>I live in Noida, and I code everyday.</p>
        <p>
          My favorite language is Java and Javascript. And React.js is awesome.
        </p>
        <p>Besides coding, I also love music and tv.</p>
        <button onClick={this.toggleDisplayBio}>Read Less</button>
      </div>
    ) : (
      <div>
        <button onClick={this.toggleDisplayBio}>Read More</button>
      </div>
    );

    return (
      <div>
        <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Vaibhav</p>
        { this.state.displayBio ? <Title /> : null }
        <p>I am always looking forward for meaningful projects.</p>
        {bio}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
        <hr />
        <Jokes />
      </div>
    );
  }
}

export default App;
