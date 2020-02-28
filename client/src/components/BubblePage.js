import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWIthAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then((response) => {
        console.log(response);
        setColorList(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading Rainbow</h1>
      ) : (
        <>
          <ColorList colors={colorList} updateColors={setColorList} />
          <Bubbles colors={colorList} />
        </>
      )}
    </>
  );
};

export default BubblePage;
