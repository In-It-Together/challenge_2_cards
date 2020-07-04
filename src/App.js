import React from "react";
import { boilerPlateData } from "./data.js";

export default () => {
  const generateCardsFromData = collection => {
    return collection.map(item => {
      return (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h4>{item.price}</h4>
          <p>{item.description}</p>
        </div>
      );
    });
  };

  return <>{generateCardsFromData(boilerPlateData)}</>;
};

