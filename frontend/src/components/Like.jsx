import React, { useState } from "react";
import "../styles/Like.scss";

function LikeButton() {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 200));
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <label className="ui-like">
        <input type="checkbox" onClick={handleClick} />
        <div className="like">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
            <g strokeWidth="0" id="SVGRepo_bgCarrier" />
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              id="SVGRepo_tracerCarrier"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z" />
            </g>
          </svg>
        </div>
        <span className="likes-counter">{`${likes}`}</span>
      </label>
    </div>
  );
}

export default LikeButton;
