import { Box } from "@mui/material";
import CustomTextFeild from "./textFeild.tsx/textfeildComponent";
import CustomSelect from "./select/customSelect";
import CustomAutoComplete from "./autoComplete/cutomAutoComplete";

export default function InputSection() {
    return (
        <>
            <Box>

                <CustomTextFeild labelValue={"Name"} />
                <CustomTextFeild labelValue={"Rquested by"} />



                <CustomSelect labelValue={"Requesting Institution"} />
                <CustomSelect labelValue={"Type"} />
                <CustomSelect labelValue={"Domain"} />
                <CustomAutoComplete labelValue={"Collaborator domains"} />
                <CustomAutoComplete labelValue={"Follower Domain"} />
            </Box>

        </>
    )
}