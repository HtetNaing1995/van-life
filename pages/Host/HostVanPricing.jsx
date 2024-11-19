import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { price } = useOutletContext();
  return (
    <div>
      <span style={{ fontSize: "1.5rem" }}>${price}.00 </span>
      <span style={{ color: "#4D4D4D" }}>/day</span>
    </div>
  );
};

export default HostVanPricing;
