import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
import styled from "styled-components";

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 25%;
  margin: 1%;
  border: none;
  background-color: ;
  width: 10%;
  border-radius: 5px;
  input {
    margin: 10%;
    border: dotted salmon 3px;
    width: 60%;
  }
`;

const AddColorForm = ({ updateColors }) => {
  const addColor = (values) => {
    axiosWithAuth()
      .post("/api/colors", values)
      .then((response) => updateColors(response.data));
  };

  const getColor = (event) => {
    const color = event.target.value.slice(1);
    console.log(color);
    axios
      .get(
        ` https://cors-anywhere.herokuapp.com/http://thecolorapi.com/id?hex=${color}`
      )
      .then((response) => {
        console.log(response);
        addColor({
          code: { hex: response.data.name.closest_named_hex },
          color: response.data.name.value
        });
      });
  };

  return (
    <div>
      <StyledLabel>
        Add a new color
        <input type="color" onChange={getColor} />
      </StyledLabel>
    </div>
  );
};

export default AddColorForm;
