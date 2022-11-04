import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import ApiPost from "../utilities/ApiPost";


const InstructionForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dataToPost = {
    "duration": 0,
    "time_exectuted": null,
    "is_sent": false,
    "is_executed": false,
    "actuator": props.actuator["id"],
   
};
  
  const onSubmit = (data) => {
    dataToPost["duration"] = parseInt(data["duration"]);
    console.log(dataToPost);
    ApiPost('/instruction/', dataToPost);
    alert(`Commande envoyée!`)
  };
  const typedict = {
    ATOM: "Brumisateur",
    PERP: "Pompe peristaltique",
  };
  //### Style ###
  const InstructionForm = styled.form`
    /* background-color: #ee6d32; */
    border: solid 2px;
    border-radius: 10px;
    margin: 5px 5px;
    color: ${(props) => props.theme.dark};
    min-width: 220px;
    min-height: 150px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
  `;
  const Div = styled.div`
    &.top {
      flex-grow: 1;
    }
    &.input {
      text-align: end;
    }
  `;
  const Input = styled.input`
    width: 80px;
  `;
  const Span = styled.span`
  &.error{
    font-size: smaller;
  }
  `;
  const Text = styled.p`
    &.name {
      font-size: 1.1rem;
      font-weight: bold;
    }
    &.type {
      font-size: 0.9rem;
    }
  `;

  return (
    <InstructionForm onSubmit={handleSubmit(onSubmit)}>
      <Div className="top">
        <Text className="name">{props.actuator["name"]}</Text>
        <Text className="type">Type: {typedict[props.actuator["type"]]}</Text>
      </Div>
      <Div>
        <Span>Activer pendant: </Span>
      </Div>
      <Div className="input">
        <Input
          type="number"
          placeholder="seconde(s)"
          {...register("duration", { required: true, min: 1, max: 1200 })}
        />

        <Input type="submit" value="Activer" />
      </Div>
        {errors.duration && <Span className="error">Entrez un entier entre 1 et 1200</Span>}
    </InstructionForm>
  );
};

export default InstructionForm;
