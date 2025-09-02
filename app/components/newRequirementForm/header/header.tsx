import { Box, IconButton, Paper } from "@mui/material";
import style from '../requirment.module.css';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';

export default function HeaderComponent() {
    return (<>
        <Paper
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#F7F9FC",
                zIndex: 10,
                position: "sticky",
                top: 0,
                width: "100%",
                height: "52px",
                px: "24px",
            }}
        >
            <Box className={style.text} >New requirement</Box>
            <Box className={style.header}>
                <IconButton sx={{
                    padding: "8px",
                    marginTop: "10px",
                }}><img src={"./minimize.svg"} /></IconButton>
                <IconButton sx={{
                    padding: "8px",
                    marginTop: "10px",
                }}> <img src={"./cr0ss.svg"} /></IconButton></Box>
        </Paper >
    </>)
}