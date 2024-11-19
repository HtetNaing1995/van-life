import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { imageUrl } = useOutletContext();
  console.log(imageUrl);

  return (
    <div>
      <img width="103px" src={imageUrl} alt="" />
    </div>
  );
};

export default HostVanPhotos;
