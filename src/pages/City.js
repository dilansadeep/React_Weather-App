import React from "react";
import { SingleCard } from "../components";
import { useParams } from "react-router-dom";

export const City = () => {
  const { cityCode } = useParams();
  return (
    <div>
      <SingleCard cityCode={cityCode} />
    </div>
  );
};

export default City;
