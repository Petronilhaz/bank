import { useContext } from "react";
import { TransationsContext } from "../../contexts/trasations/transations";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import "./style.css";

const InputBox = () => {
  const { setTransations } = useContext(TransationsContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setTransations((prevState) => [...prevState, data]);
  };

  return (
    <form className="trasation-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="trasation-label">
        Descrição
        <input
          className="trasation-input"
          type="text"
          {...register("description")}
        />
      </label>

      <label className="trasation-label">
        Valor
        <input
          className="trasation-input"
          type="text"
          {...register("transationValue")}
        />
      </label>

      <label className="trasation-label">
        Entrada
        <input
          className="trasation-radio-input"
          value="entrance"
          type="radio"
          name="type"
          {...register("transationType")}
        />
      </label>

      <label className="trasation-label">
        Saída
        <input
          className="trasation-radio-input"
          value="exits"
          type="radio"
          name="type"
          {...register("transationType")}
        />
      </label>

      <button type="submit" className="btn-add">
        Adicionar
      </button>
    </form>
  );
};

export { InputBox };
