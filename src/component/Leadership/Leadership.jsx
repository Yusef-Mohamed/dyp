import React, { useEffect, useState } from "react";
import "./Leadership.css";
import LeaderCard from "./LeaderCard";
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
    <div>
      <div className="p-5 bg-grayy">
        <p className="container p-3 text-center">
          <b>Our mission </b> is to help people live brilliant lives.
        </p>
      </div>
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
      <div className="p-5 bg-grayy">
        <p className="container p-3 text-center">
          We are committed to continually provide our members with smart leading
          edge opportunities, resources, tools, and education to help amplify
          quality of life.
        </p>
      </div>
    </div>
  );
}

export default Leadership;
