import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [newColor, setNewColor] = useState('')
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
 
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axiosWithAuth()
        .get("./colors")
        .then(res => {
          console.log(res);
          setColorList(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [newColor]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setNewColor} />
      <Bubbles colors={colorList} />
    </>
  );
};


export default BubblePage;

