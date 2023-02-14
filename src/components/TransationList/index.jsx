import { useContext } from "react";
import { TransationsContext } from "../../contexts/trasations/transations";
import { FormatMoney } from "../../utils/FormatMoney";
import { BiUpArrowCircle } from "react-icons/bi";
import { BiDownArrowCircle } from "react-icons/bi";
import "./style.css";

const TransationList = () => {
  const { transations } = useContext(TransationsContext);

  return (
    <>
      <div className="list-header">
        <h4 className="description-header">Descrição</h4>
        <h4 className="type-header">Tipo</h4>
        <h4 className="value-header">Valor</h4>
      </div>

      <ul className="list">
        {transations.map((t, key) => {
          let { description, transationType, transationValue } = t;
          transationValue = Number(transationValue);

          return (
            <li key={key} className="item">
              <p className="description">{description}</p>
              <p className="type">
                {transationType === "entrance"
                  ? (transationType = (
                      <BiUpArrowCircle color="green" size={25} />
                    ))
                  : (transationType = (
                      <BiDownArrowCircle color="red" size={25} />
                    ))}
              </p>
              <p className="value">{FormatMoney(transationValue)}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { TransationList };
