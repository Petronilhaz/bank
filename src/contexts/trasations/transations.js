import React, { useEffect, useState } from "react";

const TransationsContext = React.createContext({});

const TransationProvider = ({ children }) => {
  const [transations, setTransations] = useState([]);
  const [total, setTotal] = useState(0);
  const [entrance, setEntrance] = useState(0);
  const [exits, setExits] = useState(0);

  useEffect(() => {
    let valorEntrada = 0;
    let valorSaida = 0;

    transations.forEach((t) => {
      const { transationValue, transationType } = t;
      if (transationType === "entrance") {
        valorEntrada += Number(transationValue);
      } else if (transationType === "exits") {
        valorSaida += Number(transationValue);
      }
    });

    setTotal(valorEntrada - valorSaida);
    setEntrance(valorEntrada);
    setExits(valorSaida);
  }, [transations]);

  return (
    <TransationsContext.Provider
      value={{ transations, setTransations, total, entrance, exits }}
    >
      {children}
    </TransationsContext.Provider>
  );
};

export { TransationsContext, TransationProvider };
