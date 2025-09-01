import { Box, Button, Select, TextField } from "@mui/material";

export default function Description() {
    return (
        <>
            <Box sx={{ width: "562px", height: "280px", border: "2px solid black", borderRadius: "8px", marginLeft: "24px", marginRight: "24px", padding: "16px", gap: "24px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <TextField sx={{
                    width: "530px", height: "180px", '& .MuiInputBase-root': {
                        height: '180px',
                    },


                }} />
                <Box sx={{ width: "100%", height: "44px", background: "yellow", display: "flex", justifyContent: "center", alignItems:"center", padding:"8px"}}>
                    
                    <Box sx={{ height: "28px", width: "100%", display: "flex" }}>
                        <Select />
                        <Select />
                        <Button>Bold</Button>
                        <Button>I</Button>
                        <Button>U</Button>
                        <Button>123</Button>
                        <Button>points</Button>
                        <Button>link</Button>
                        <Button>arraow</Button>
                    </Box>

                </Box>
            </Box>
        </>
    )
}