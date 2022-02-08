import React from "react";

export default function HomeFeatures({ icon, title, description }) {
  return (
    <div>
      <div>
        <img src={icon} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
