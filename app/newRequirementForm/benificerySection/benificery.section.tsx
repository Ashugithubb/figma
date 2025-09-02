import { Box, Typography } from "@mui/material";
import style from './benificery.module.css'
import CustomAutoComplete from "../inputSection/autoComplete/cutomAutoComplete";
import CustomSelect from "../inputSection/select/customSelect";
export default function BenificerySection() {
    return (
        <>
            <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
                <Typography className={style.header} sx={{ color: "#424242" }}>Beneficiaries and Scope</Typography>
                <CustomAutoComplete labelValue={"Benefited institutions"} />

                <Box sx={{ display: "flex", gap: "16px", width: "100%" }}>
                    <Box sx={{ flex: 1 }}><CustomSelect labelValue={"Study modality"} /></Box>
                    <Box sx={{ flex: 1 }}> <CustomSelect labelValue={"Mandatory"} /></Box>
                </Box>
            <Box sx={{ width:"49%"}}><CustomSelect labelValue={"Alternative solution exists"}/></Box>
                
            </Box>
        </>
    )
}