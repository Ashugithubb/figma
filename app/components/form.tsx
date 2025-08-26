import { Autocomplete, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, styled, TextField, Typography } from "@mui/material";
import MinimizeIcon from '@mui/icons-material/Minimize';
import styles from "../style/form.module.css";
import CloseIcon from '@mui/icons-material/Close';
import DateComponent from "./date-component";
import Caption from "./caption-component";
import FormFillUp from "./form-fiil-up";


export default function FormComponenet() {
    return (
        <>
            <Box className={styles.mainBox}>
                <Paper sx={{ display: "flex", width: "650px", justifyContent: "space-between", background: "#F7F9FC" }}>
                    <Box className={styles.text} sx={{ paddingLeft: "24px" }}>New requirment</Box>
                    <Box className={styles.header}>
                        <IconButton sx={{
                            padding: "8px",
                            marginTop: "-15%",

                        }}><MinimizeIcon sx={{ fontSize: "19px" }} /></IconButton>
                        <IconButton sx={{
                            padding: "8px"
                        }}><CloseIcon sx={{ fontSize: "19px", background: "" }} /></IconButton></Box>

                </Paper >
                 <FormFillUp/>
                
                <Caption />
               

                <Paper sx={{ display: "flex", width: "650px", marginTop: "30px", height: "68px", justifyContent: "flex-end", background: "#F7F9FC" }}>
                    <Button style={{
                        color: "#01579B",
                        border: "none",
                        fontSize: "14px"
                    }} sx={{ textTransform: 'none', color: "#757575", fontWeight: 600, fontStyle: 'normal', fontFamily: "Open Sans, Arial, sans-serif", fontSize: "14px" }} variant="outlined">CREATE</Button>
                </Paper>
                

            </Box>




        </>
    )


}