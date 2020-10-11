import React, { useEffect, useStata } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useFecthReceta } from "../hooks/useFecthReceta";

export const Receta = ({ Receta }) => {

  const receta = useFecthReceta()
  console.log(receta);
  return (
    <div>
      <div className="cardm container-fluid  col-8 ">
        <div className="card ">
          <div className="card-header">
            <h8>INGREDIENTES</h8>
            <h1>Nombre del plato</h1>
            <Link to="/" className="lection">
              Seleccionar todo |
            </Link>
            <Link to="/" className="lection">
              Deseleccionar todo
            </Link>
          </div>
          <div>
            <div className=" container row align-items-center">
              <div className="custom-control custom-checkbox ">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultUnchecked"
                />
                <label
                  className="custom-control-label"
                  for="defaultUnchecked"
                ></label>
              </div>
              <input className="int col-1" type="text" />
              <div className="col">
                <h6>Articulo</h6>
                <span>
                  <h8>Marca</h8>
                </span>
                <p>x Kg.</p>
              </div>
              <div className="price">
                <p>precio</p>
              </div>
            </div>
            <div className="calculate">
              <p>Items:</p>
              <p>Subtotal</p>
              <p>Gastos de envio</p>
              <div className="total row ">
              <p>Total</p> </div>
              <div className="total2 text-right">
               <p>9,95 €</p>
              </div>
              </div>
           
            <div className="fluid d-flex justify-content-center">
              <Link href="#" className="btn">
                Comparar ingredientes:
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};