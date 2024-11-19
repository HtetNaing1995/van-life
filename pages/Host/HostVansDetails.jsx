import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetail() {
  const { name, type, description } = useOutletContext();
  return (
    <div className="details-container">
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Category: </strong>
        {type}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
}
