import { Button, IconButton } from "@mui/material";

export default function Header() {
    return (
        <>

            <Button sx={{color:"#01579B"}}><img src="./icon5.svg" alt="" /> &nbsp;  View</Button>
            <Button sx={{color:"#01579B"}}><img src="./icon1.svg" alt="" /> &nbsp;  Dawonload</Button>
            <Button sx={{color:"#01579B"}}><img src="./icon2.svg" alt="" /> &nbsp;  Filters</Button>
            <IconButton sx={{color:"#01579B"}}><img src="./icon3.svg" alt="" /></IconButton>
            <IconButton sx={{color:"#01579B"}}><img src="./icon4.svg" alt="" /></IconButton>

        </>
    )
}