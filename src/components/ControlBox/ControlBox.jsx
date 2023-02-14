import { Box, Icon, Typography } from "@mui/material";
import { FormatMoney } from "../../utils/FormatMoney";

const ControlBox = ({ title, value, icon }) => {
  return (
    <Box
      sx={{
        width: 150,
        padding: 2,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="p" component="h2">
          {title}
        </Typography>
        <Icon>{icon}</Icon>
      </Box>
      <span>{FormatMoney(value)}</span>
    </Box>
  );
};

export { ControlBox };
