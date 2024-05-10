import { useState } from 'react';

import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGenero";

export const PeliListado = () => {
  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtenerNombreGenero = (valor: string) => {
    for (const objGen of ARREGLO_PELICULA_GENERO) {
      if (objGen.codGenero == valor) {
        return objGen.nombreGenero;
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Nro</th>
                <th style={{ width: "30%" }}>Nombre</th>
                <th style={{ width: "25%" }}>Protagonista</th>
                <th style={{ width: "400%" }}>Imagen</th>
                <th style={{ width: "10%" }}> </th>
              </tr>
            </thead>
            <tbody>
              {arrPeliculas.map((pelicula: any, index: number) => (
                <tr className="align-middle" key={index}>
                  <td>{index + 1}</td>
                  <td>{pelicula.nombre}</td>
                  <td>{pelicula.protagonista}</td>
                  <td>{obtenerNombreGenero(pelicula.codGeneroPelicula)}</td>
                  <td>
                    <img src={pelicula.imagen} alt={pelicula.nombre} />
                  </td>
                  <td className="text-center">
                    <a href="/#">
                      <i className="fa-solid fa-trash-can rojito"></i>
                    </a>{" "}
                    <a href="/pactual/8">
                      <i className="fa-regular fa-pen-to-square verde"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
