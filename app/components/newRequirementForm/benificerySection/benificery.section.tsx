import { Box, Typography } from "@mui/material";
import style from './benificery.module.css'
import CustomAutoComplete from "../inputSection/autoComplete/cutomAutoComplete";
import CustomSelect from "../inputSection/select/customSelect";
import { useFormContext } from "react-hook-form";
export default function BenificerySection() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <>
            <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
                <Typography className={style.header} sx={{ color: "#424242" }}>Beneficiaries and Scope</Typography>
                <CustomAutoComplete labelValue={"Benefited institutions"}   {...register("benefitedInstitutions")}
                    error={!!errors.benefitedInstitutions}
                    helperText={errors.benefitedInstitutions?.message as string} />

                <Box sx={{ display: "flex", gap: "16px", width: "100%" }}>
                    <Box sx={{ flex: 1 }}><CustomSelect labelValue={"Study modality"}    {...register("studyModality")}
                        error={!!errors.studyModality}
                        helperText={errors.studyModality?.message as string} /></Box>
                    <Box sx={{ flex: 1 }}> <CustomSelect labelValue={"Mandatory"}    {...register("name")}
                        error={!!errors.mandatory}
                        helperText={errors.mandatory?.message as string} /></Box>
                </Box>
                <Box sx={{ width: "49%" }}><CustomSelect labelValue={"Alternative solution exists"}   {...register("alternativeSolutionExist")}
                    error={!!errors.alternativeSolutionExist}
                    helperText={errors.alternativeSolutionExist?.message as string} /></Box>

            </Box>
        </>
    )
}