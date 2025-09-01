'use client'

import { Box, TextField } from "@mui/material";
import style from "./testfeild.module.css"

export default function CustomTextFeild({ labelValue }: { labelValue: string }) {
    return (
        <Box>
            <TextField 
            size="small"
             sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '8px', 
            },
        }}
            
            className={style.textfield} label={labelValue} variant="outlined" />
        </Box>
    );
}