import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import CustomSelect from "../inputSection/select/customSelect";
import DisableAutoComplte from "./disable";
import style from '../benificerySection/benificery.module.css'
import { useFormContext } from "react-hook-form";
export default function ImpactComponent() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <>
            <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
                <Typography className={style.header} sx={{ color: "#424242" }}>Impact and Feasibilty</Typography>
                <Box sx={{ display: "flex", width: "100%", gap: "16px" }}>
                    <Box sx={{ flex: 1 }}>
                        <CustomSelect labelValue={"User impact"} {...register("userImpact")}
                            error={!!errors.userImpact}
                            helperText={errors.userImpact?.message as string} /></Box>

                    <Box sx={{ flex: 1 }}>  <DisableAutoComplte labelValue={"impact"} /></Box>
                </Box>

                <Box sx={{ display: "flex", width: "100%", gap: "16px" }}>
                    <Box sx={{ flex: 1 }}> <CustomSelect labelValue={"Complexity and effort"}{...register("complexityAndEffort")}
                        error={!!errors.complexityAndEffort}
                        helperText={errors.complexityAndEffort?.message as string} /></Box>
                    <Box sx={{ flex: 1 }}>   <DisableAutoComplte labelValue={"Client priority"} /></Box>
                </Box>
                <Box sx={{ width: "49%" }}><CustomSelect labelValue={"Status"} {...register("status")}
                    error={!!errors.status}
                    helperText={errors.status?.message as string} /></Box>
            </Box>

        </>
    )
}