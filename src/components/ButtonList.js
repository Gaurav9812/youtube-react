import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Haming",
  "Basketball",
  "Soccer",
  "Gaming",
  "Skrossi",
  "Hellranger",
  "valorant",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((listItem, index) => (
        <Button name={listItem} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
