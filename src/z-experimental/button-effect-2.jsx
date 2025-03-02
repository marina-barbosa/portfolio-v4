import React from "react";

const ShareButton = () => {
  return (
    <button className="share-button">
      <span>Share</span>
      <div className="container">
        <p className="icon">A</p><p className="icon">B</p><p className="icon">C</p>
      </div>

      <style>
        {`

.share-button {
  height: 4em;
  width: 15em;
  border: none;
  border-radius: 40px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.share-button span {
  z-index: 1;
  display: inline-block;
  background-color: black;
  height: 3em;
  width: 11.5em;
  border-radius: 25px;
  color: #fff;
  line-height: 55px;
  font-size: 18px;
  letter-spacing: 3px;
  text-align: center;
  transition: all 0.5s;
}

.share-button .container {
  z-index: -1;
  width: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  transition: all 0.4s;
}

.share-button .container .icon {
  padding: 0 10px;
}

.share-button:hover span {
  width: 0;
}

.share-button:hover .container {
  z-index: 2;
  width: 100%;
}

        `}
      </style>
    </button>
  );
};

export default ShareButton;
