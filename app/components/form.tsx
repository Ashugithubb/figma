import { Autocomplete, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, styled, TextField, Typography } from "@mui/material";
import MinimizeIcon from '@mui/icons-material/Minimize';
import styles from "../style/form.module.css";
import CloseIcon from '@mui/icons-material/Close';
import DateComponent from "./date-component";
import Caption from "./caption-component";

const CustomTextField = styled(TextField)({
    "& label": {
        top: "-4px",
        left: "10px",
        fontSize: "14px",
    }
});


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
                <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                    <CustomTextField id="outlined-basic" label="Name" variant="outlined" sx={{
                        marginLeft: "24px", width: "600px", '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '10px',
                            height: "50px",
                        },

                    }} />
                    <CustomTextField id="outlined-basic" label="Requested by" variant="outlined" sx={{
                        marginLeft: "24px", width: "600px", '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '10px',
                            height: "50px"
                        },
                        input: { textAlign: "center" }
                    }} />

                    <Box sx={{ display: "flex" }}>
                        <Autocomplete
                            disablePortal
                            options={[]}
                            sx={{
                                width: "287px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px",
                                },
                            }}
                            renderInput={(params) => <TextField {...params} label="Requesting Institution" />}
                        />
                        <Autocomplete
                            disablePortal
                            options={[]}
                            sx={{
                                width: "287px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px"
                                },

                            }}
                            renderInput={(params) => <TextField {...params} label="Type" />}
                        />
                    </Box>

                    <Autocomplete
                        disablePortal
                        options={[]}
                        sx={{
                            width: "600px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '10px',
                                height: "50px",
                            },
                            marginTop: "49px"
                        }}
                        renderInput={(params) => <TextField {...params} label="Domain" />}
                    />
                    <Box sx={{ display: "flex" }}>
                        <Autocomplete
                            disablePortal
                            options={[]}
                            sx={{
                                width: "287px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px",
                                },
                            }}
                            renderInput={(params) => <TextField {...params} label="Collaboratpr Domain" />}
                        />
                        <Autocomplete
                            disablePortal
                            options={[]}
                            sx={{
                                width: "287px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px"
                                },

                            }}
                            renderInput={(params) => <TextField {...params} label="Follower Domain" />}
                        />
                    </Box>

                    <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "24px", marginTop: "49px" }}>Benificiaries and Scope</Typography>
                    <Autocomplete
                        disablePortal
                        options={[]}
                        sx={{
                            width: "600px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '10px',
                                height: "50px",
                            },
                        }}
                        renderInput={(params) => <TextField {...params} label="Benifited Institutions" />}
                    />

                    <Box sx={{ display: "flex" }}>
                        <Autocomplete
                            disablePortal
                            options={[]}
                            sx={{
                                width: "287px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px",
                                },
                            }}
                            renderInput={(params) => <TextField {...params} label="Study modality" />}
                        />
                        <Autocomplete
                            disablePortal
                            options={["Yes", "No"]}
                            sx={{
                                width: "287px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px"
                                },

                            }}
                            renderInput={(params) => <TextField {...params} label="Mandatory" />}
                        />

                    </Box>
                    <Autocomplete
                        disablePortal
                        options={["Yes", "No"]}
                        sx={{
                            width: "287px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '10px',
                                height: "50px"
                            },
                            marginTop: "49px"

                        }}
                        renderInput={(params) => <TextField {...params} label="Alternative solutions exists" />}
                    />


                    <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "24px", marginTop: "49px" }}>Impact and Feasibilty</Typography>
                    <Box sx={{ display: "flex" }}>

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px" }}>user impact</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                sx={{
                                    marginLeft: "24px", width: "287px", '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '10px',
                                        height: "50px",
                                    },
                                }}
                            >
                                <MenuItem value={100}>low</MenuItem>
                                <MenuItem value={200}>medium</MenuItem>
                                <MenuItem value={300}>high</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px" }}>impact</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                sx={{
                                    marginLeft: "24px", width: "287px", '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '10px',
                                        height: "50px",
                                    },
                                }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px" }}>Complexity and effort</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                sx={{
                                    marginLeft: "24px", width: "287px", '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '10px',
                                        height: "50px",
                                    },
                                }}

                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px" }}>Client priority</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                sx={{
                                    marginLeft: "24px", width: "287px", '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '10px',
                                        height: "50px",
                                    },
                                }}

                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                        </FormControl>
                    </Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px" }}>Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            defaultValue={10}
                            sx={{
                                marginLeft: "24px", width: "287px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px",
                                },
                            }}
                        >
                            <MenuItem value={10}>registred</MenuItem>
                            <MenuItem value={20}>not-registred</MenuItem>
                        </Select>

                    </FormControl>
                    <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "24px", }}>Timeline</Typography>
                    <DateComponent />
                    <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "24px", marginTop: "23px" }}>Description</Typography>
                </Box>
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