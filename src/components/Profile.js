import React from "react";
import ducPhoto from "./duc_photo.jpg";

class Profile extends React.Component {
  render() {
    const { fullName, bio, profession } = this.props.person;

    return (
      <div className="profile-card">
        <img src={ducPhoto} alt="profil" />
        <h2>{fullName}</h2>
        <p>{bio}</p>
        <p>{profession}</p>
      </div>
    );
  }
}

export default Profile;
