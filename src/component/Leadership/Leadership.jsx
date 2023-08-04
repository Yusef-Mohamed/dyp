import React, { useEffect, useState } from "react";
import "./Leadership.css";
import LeaderCard from "./LeaderCard";
import img from "../../assets/panars/Leadership.webp";
function Leadership() {
  const [instractors, setInstractors] = useState([]);
  useEffect(() => {
    fetch(`https://api.wealthmakers-fx.com/api/v1/users/instractors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setInstractors(res?.data));
  });
  return (
    <div style={{ overflow: "hidden" }}>
      <img src={img} className="secBanar" alt="" />

      <div className="leaderContainer container">
        {instractors?.map((instractor) => (
          <LeaderCard
            data={{
              img: instractor?.profileImg,
              name: instractor?.name,
              des: instractor?.about,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Leadership;
