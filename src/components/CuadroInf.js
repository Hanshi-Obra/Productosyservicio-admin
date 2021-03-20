import React from "react";
import imagenes from "../assets/imagenes";
import { Button } from "react-bootstrap";
import Linea from "../assets/Linea";
import Editar from "../components/Editar";


export default function CuadroInf(props) {
  return (
    <div
      style={{
        margin: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
      }}
    >
      <div style={{ marginRight: 30,  width: "12%" }}>
        <img
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            objectFit: "cover",
          }}
          src={imagenes[props.number].img}
        />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", width:"100%" }}>
          <div>
          <h5>{imagenes[props.number].title}</h5>
          </div>
          <div style={{ display: "flex", justifyContent:"flex-end",marginRight:"18%", width:"100%" }}>
          <Linea />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginBottom: 130, width:"83%" }}>
            {imagenes[props.number].texto}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "12%",
            }}
          >
            <Button
              style={{
                marginBottom: "11%",
                fontSize: 18,
                marginTop: "10%",
                backgroundColor: "red",
              }}
            >
              Apagar
            </Button>
            <Button style={{ fontSize: 18, backgroundColor: "green" }}>
              Encender
            </Button>
          </div>
        </div>
        <Editar />
      </div>
    </div>
  );
}
