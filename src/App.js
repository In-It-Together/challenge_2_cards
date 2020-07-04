import React from "react";
import { boilerPlateData } from "./data.js";
import Card from './components/Card';

export default () => {
  
  // const generateCardsFromData = collection => {
  //   return collection.map(item => {
  //     return (
  //       <div key={item.id}>
  //         <h2>{item.name}</h2>
  //         <h4>{item.price}</h4>
  //         <p>{item.description}</p>
  //       </div>
  //     );
  //   });
  // };

  const renderCards = data => {
    return data.map((item, index) => {
      return (<Card data={item} key={index} />);
    });
  };

  return (<>{renderCards(boilerPlateData)}</>);
};

