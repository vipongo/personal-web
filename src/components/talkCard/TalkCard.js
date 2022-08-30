import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div
        className={
          talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
        }
      >
        <div className="diagonal-fill"></div>
        <div className="talk-card-title">{talkDetails.title}</div>
        <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

        <div className="card-footer-button-div"></div>
      </div>
    </div>
  );
}
