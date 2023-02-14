import { Box } from "@mui/material";
import { ControlBox } from "../ControlBox/ControlBox";
import { BiUpArrowCircle } from "react-icons/bi";
import { BiDownArrowCircle } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { useContext } from "react";
import { TransationsContext } from "../../contexts/trasations/transations";

const MoneyManager = () => {
  const { total, entrance, exits } = useContext(TransationsContext);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <ControlBox
          title={"Entrada"}
          value={entrance}
          icon={<BiUpArrowCircle color="green" />}
        />
        <ControlBox
          title={"Saída"}
          value={exits}
          icon={<BiDownArrowCircle color="red" />}
        />
        <ControlBox title={"Total"} value={total} icon={<MdAttachMoney />} />
      </Box>
    </>
  );
};

export { MoneyManager };
