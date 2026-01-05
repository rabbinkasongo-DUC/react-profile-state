import React from "react";

class ToggleButton extends React.Component {
  render() {
    const { shows, onToggle } = this.props;

    return (
      <button className="btn" onClick={onToggle}>
        {shows ? "Masquer le profil" : "Afficher le profil"}
      </button>
    );
  }
}

export default ToggleButton;
