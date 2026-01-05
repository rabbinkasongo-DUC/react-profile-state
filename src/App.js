import React, { Component } from "react";
import Profile from "./components/Profile";
import ToggleButton from "./components/ToggleButton";
import Timer from "./components/Timer";
import "./App.css";

class App extends Component {
  state = {
    Person: {
      fullName: "Rabbi Kasongo",
      bio: "Développeur passionné par le web et React",
      profession: "Développeur Web"
    },
    shows: false
  };

  toggleProfile = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { Person, shows } = this.state;

    return (
      <div className="app-container">
        <ToggleButton shows={shows} onToggle={this.toggleProfile} />
        {shows && (
          <>
            <Timer />
            <Profile person={Person} />
          </>
        )}
      </div>
    );
  }
}

export default App;
