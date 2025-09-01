import { Box, IconButton, Paper } from "@mui/material";
import style from './requirment.module.css';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import InputSection from "./inputSection/inputSection";
export default function ReqFormComponent() {
    return (
        <>
        <Paper sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "#F7F9FC",
                    zIndex: 10,
                    position: "sticky",
                    top: 0,
                    width:"100%"
                }}>

                    <Box className={style.text} >New requirment</Box>
                    <Box className={style.header}>
                        <IconButton sx={{
                            padding: "8px",
                            marginTop: "-15%",
                        }}><MinimizeIcon sx={{ fontSize: "19px" }} /></IconButton>
                        <IconButton sx={{
                            padding: "8px",
                        }}><CloseIcon sx={{ fontSize: "19px", background: "" }} /></IconButton></Box>
                </Paper >

            <Box className={style.mainBox}>
                
                        <InputSection/>



            </Box>
        </>
    )
}