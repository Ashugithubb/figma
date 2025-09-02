import { Box, Stack, Typography } from "@mui/material";
import CustomTextFeild from "./textFeild.tsx/textfeildComponent";
import CustomSelect from "./select/customSelect";
import CustomAutoComplete from "./autoComplete/cutomAutoComplete";
import { useFormContext, Controller } from "react-hook-form";

export default function InputSection() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                <CustomTextFeild labelValue={"Name"}
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message as string} />

                <CustomTextFeild labelValue={"Rquested by"} {...register("requestedBy")}
                    error={!!errors.requestedBy}
                    helperText={errors.requestedBy?.message as string} />

                <Box sx={{ display: "flex", gap: "16px", width: "100%" }}>
                    <Box sx={{ flex: 1 }}>
                        <CustomSelect labelValue={"Requesting Institution"}{
                            ...register("requestingInstitution")}
                            error={!!errors.requestingInstitution}
                            helperText={errors.requestingInstitution?.message as string} /></Box>
                    <Box sx={{ flex: 1 }}> <CustomSelect labelValue={"Type"}{
                            ...register("type")}
                            error={!!errors.type}
                            helperText={errors.type?.message as string} /></Box>
                </Box>
                <Box sx={{ width: "100%" }}> <CustomSelect labelValue={"Domain"} {
                            ...register("domain")}
                            error={!!errors.domain}
                            helperText={errors.domain?.message as string} /></Box>

                <Box sx={{ display: "flex", gap: "16px", width: "100%" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}> <CustomAutoComplete labelValue={"Collaborator domains"} /><Typography sx={{ fontSize: "11px", height: "16px", marginLeft: "16px", color: "#9E9E9E" }}>Optional</Typography></Box>
                    <Box sx={{ flex: 1 }}>  <CustomAutoComplete labelValue={"Follower Domain"} /><Typography sx={{ fontSize: "11px", height: "16px", marginLeft: "16px", color: "#9E9E9E" }}>Optional</Typography></Box>
                </Box>

            </Box>

        </>
    )
}