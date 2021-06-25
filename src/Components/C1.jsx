import React from "react";
import "./c1.css";
import CallIcon from "@material-ui/icons/Call";
import { NavLink } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import MapIcon from "@material-ui/icons/Map";

const C1 = () => {
  return (
    <div className="d1">
      <div className="d2">
        <img
          src="./images/logo1.png"
          alt="pic"
          style={{ width: "8vw", height: "8vh" }}
          className="logo"
        />
        <CallIcon
          style={{
            width: "2vw",
            height: "3vh",
            marginTop: " 4vh",
            color: "white",
            marginRight: "60vw",
          }}
        />
        <p
          style={{
            width: "9vw",
            height: "2vh",
          }}
          className="ph"
        >
          +91-86XXXX8597
        </p>
        <NavLink className="Trip" to="/">
          TRENDING TRIPS
        </NavLink>
        <NavLink className="work" to="/">
          WORKCATIONS
        </NavLink>
        <NavLink className="blog" to="/">
          BLOGS
        </NavLink>
      </div>
      <div className="box1">
        <p id="txt">India's Coolest Travel Community</p>
      </div>
      <div className="box2">
        <ul className="txt1">
          <li>
            <span>Spreading Happiness</span>
          </li>
          <li>
            <span>Connecting People</span>
          </li>

          <li>
            <span>Creating Memories</span>
          </li>

          <li>
            <span>Creating Stories</span>
          </li>
          <li>
            <span>Fullfilling Adventure</span>
          </li>
        </ul>
      </div>
      <div className="srchbar">
        <SearchBar
          placeholder="Where do you Wanna go? "
          style={{
            width: "40vw",
            height: "8vh",
            float: "right",
            // backgroundColor: "rgba(185, 177, 177, 0.753)",
            backgroundColor: "rgba(201, 194, 194, 0.575)",
            marginRight: "30vw",
            marginTop: "3vh",
            border: "1px solid white",
            color: "white",
            opacity: "0.6",
            // color: "black",
          }}
          className="srch"
        />
      </div>
      <div className="rating">
        <InsertEmoticonIcon
          style={{
            width: "10vw",
            height: "12vh",
            float: "left",
            color: "white",
            marginLeft: "14vw",
            marginTop: "10vh",
          }}
        />
        <p className="hpyfolow">50000+</p>
        <p className="hpytrav">Happy Travellers</p>

        <StarBorderIcon
          style={{
            width: "10vw",
            height: "12vh",
            float: "right",
            color: "white",
            marginTop: "10vh",

            marginRight: "44vw",
          }}
        />
        <p className="liked">2000+</p>
        <p className="stars">5 Star Ratings</p>

        <MapIcon
          style={{
            width: "10vw",
            height: "12vh",
            float: "right",
            color: "white",
            marginTop: "10vh",

            marginRight: "-38vw",
          }}
        />
        <p className="map">300+</p>
        <p className="maps">Itineraries</p>
      </div>
    </div>
  );
};

export default C1;
