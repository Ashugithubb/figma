import { Box, Typography } from "@mui/material";
import style from '../benificerySection/benificery.module.css'
import DateComponent from "./datepicker";
export default function TimeLine() {
    return (
        <>
            <Box sx={{display:"flex",gap:"10px",flexDirection:"column"}}>
                <Typography className={style.header} sx={{ color: "#424242"  }}>Timeline</Typography>
                <DateComponent />
            </Box>
        </>
    )
}