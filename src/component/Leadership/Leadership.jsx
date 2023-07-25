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
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/w_gBUMIeeBE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div style={{ backgroundColor: "#ededed" }} className="p-5">
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

        <LeaderCard
          data={{
            img: "https://igeniusglobal.com/static/media/codeChad.bd8f1cc0694568a2a54e.png",
            name: "CHAD GARNER President",
            des: "Chad brings over 18 years of sales, operations, and marketing experience. Chad was a founding member of the executive team for Daily Bread, a successful direct sales company that was sold to a private equity firm. He has built and scaled multiple high impact sales organizations throughout his career. Chad led the Inside Sales, Outside Sales, Affiliate Sales, Business Development, and Customer Success departments while helping raise venture capital for a technology startup called PeopleKeep. His passion is helping others improve their financial situation so they can live stress-free and enjoy life.            ",
          }}
        />
      </div>
      <div style={{ backgroundColor: "#ededed" }} className="p-5">
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
