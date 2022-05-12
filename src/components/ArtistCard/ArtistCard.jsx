import React from "react";
import "./ArtistCard.scss";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ artist }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="artist-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        navigate(`/artist/${artist.id}`);
      }}
    >
      <div className="artist-card-img">
        <img
          src={artist.photo}
          alt="artist"
          onError={(e) =>
            (e.currentTarget.src =
              "https://i.scdn.co/image/ab6761610000e5eb601fb0059594d52f3f7939a9")
          }
        />
      </div>
      <div
        className={`artist-card-info-container ${
          isHovered ? "artist-card-hide" : ""
        }`}
      >
        <div className="artist-card-info">
          <h3 className="artist-card-name">{artist.name}</h3>
          <h2 className="artist-card-age">{artist.age} Years Old</h2>
        </div>
      </div>
      <div
        className={`artist-card-hover-container ${
          isHovered ? "artist-card-show" : ""
        }`}
      >
        <span>City: {artist.city}</span>
        <span>Nationality: {artist.nationality}</span>
        <span>Email: {artist.email}</span>
      </div>
    </div>
  );
};

export default ArtistCard;
