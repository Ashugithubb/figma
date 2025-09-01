import { TextField } from "@mui/material";

export default function CustomTextFeild({ labelValue }: { labelValue: string }) {
    return (
        <>
            <TextField label={labelValue} variant="outlined" />
        </>
    );
}