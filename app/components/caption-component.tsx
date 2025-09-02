import { Box } from "@mui/material";
import Editor from "./editor/Editor";

export default function Caption(){
    return(
        <>
        <Box sx={{height:"280px"}}>
        <Editor/>
        </Box>
        </>
    )
}