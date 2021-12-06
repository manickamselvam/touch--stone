import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import serv2 from "../assets/serv2.jpg";
import serv3 from "../assets/serv3.jpg";
import serv4 from "../assets/serv4.jpg";
import serv5 from "../assets/serv5.jpg";
import serv6 from "../assets/serv6.jpg";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check out Events!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={serv2}
              text="Providing a professional, stress-free service making every event a Celebration!!"
              label="Show room open"
            />
            <CardItem
              src={serv3}
              text="Providing a professional, stress-free service making every event a Celebration!!"
              label="Weddings"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={serv4}
              text="Providing a professional, stress-free service making every event a Celebration!!"
              label="Baby Showers"
            />
            <CardItem
              src={serv5}
              text="Providing a professional, stress-free service making every event a Celebration!!"
              label="Cake"
            />
            <CardItem
              src={serv6}
              text="Providing a professional, stress-free service making every event a Celebration!!"
              label="Ballon Decoration"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
