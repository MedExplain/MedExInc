// @mui
import { styled, alpha } from "@mui/material/styles";
import { TextField } from "@mui/material";

// ----------------------------------------------------------------------

const InputStyle = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "stretchStart",
})(({ stretchStart, theme }) => ({
  "& .MuiInputBase-root": {
    paddingRight: '0',
    overflow: 'hidden'
  },
  "& .MuiOutlinedInput-root": {
    transition: theme.transitions.create(["box-shadow", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": {
      boxShadow: "rgba(145, 158, 171, 0.16) 0px 20px 40px -4px",
    },
    ...(stretchStart && {
      width: stretchStart,
      "&.Mui-focused": {
        boxShadow: "rgba(145, 158, 171, 0.16) 0px 20px 40px -4px",
        [theme.breakpoints.up("sm")]: {
          width: stretchStart + 60,
        },
      },
    }),
  },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${alpha("#919EAB", 0.32)} !important`,
  },
}));

export default InputStyle;
