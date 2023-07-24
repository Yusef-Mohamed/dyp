import React from "react";

function LeaderCard(props) {
  return (
    <div className="leaderCard">
      <img
        src={props.data.img}
        alt=""
        data-aos="flip-left"
        data-aos-duration="1000"
        style={{ borderRadius: "50%" }}
      />
      <div>
        <h4>{props.data.name}</h4>
        <p>{props.data.des}</p>
      </div>
    </div>
  );
}

export default LeaderCard;
