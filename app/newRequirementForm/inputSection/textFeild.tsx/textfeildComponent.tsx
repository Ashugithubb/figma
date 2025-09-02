'use client';

import { Box, TextField } from "@mui/material";
import style from "./testfeild.module.css";

interface CustomTextFeildProps {
  labelValue: string;
  error?: boolean;
  helperText?: string;
}

export default function CustomTextFeild({
  labelValue,
  error,
  helperText,
 
}: CustomTextFeildProps) {
  return (
    <Box>
      <TextField
        size="small"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "8px",
          },
          "& .MuiInputLabel-root": {
            fontSize: "14px",
            color: "#9E9E9E",
          },
        }}
        className={style.textfield}
        label={labelValue}
        variant="outlined"
        error={error}
        helperText={helperText}
       
      />
    </Box>
  );
}
