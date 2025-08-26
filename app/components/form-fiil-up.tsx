import { Autocomplete, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, styled, TextField, Typography } from "@mui/material";
import MinimizeIcon from '@mui/icons-material/Minimize';
import styles from "../style/form.module.css";
import CloseIcon from '@mui/icons-material/Close';
import DateComponent from "./date-component";
import Caption from "./caption-component";


const CustomTextField = styled(TextField)({
    marginLeft: "24px",
    width: "600px",
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '10px',
        height: "50px",
    },
    '& .MuiInputLabel-root': {
        top: '-4px',
        left: '10px',
        fontSize: '14px',
    },
});


const CustomSelect = styled(Select)({
    marginLeft: "24px", width: "287px", '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '10px',
        height: "50px",
    },
})
const CustomAutoComplete = styled(Autocomplete)({
    width: "287px",
    height: "8px",
    marginLeft: "24px",
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '10px',
        height: "50px"
    },
})
const CustomSVGIcon = () => (
    <img
        src="/info.svg"
        alt="custom icon"
        style={{ width: "20px", height: "20px", marginRight: "20px", marginTop: "-4px" }}
    />
);

export default function FormFillUp() {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <CustomTextField id="outlined-basic" label="Name" variant="outlined" />
                <CustomTextField id="outlined-basic" label="Requested by" variant="outlined" />

                <Box sx={{ display: "flex" }}>
                    <CustomAutoComplete
                        disablePortal
                        options={[]}
                        renderInput={(params) => <TextField {...params} label="Requesting institution" />}
                    />
                    <CustomAutoComplete
                        disablePortal
                        options={[]}
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
                        renderInput={(params) => <TextField {...params} label="Collaborator Domain" />}
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

                <Typography className={styles.benificier} variant="h6" color="#424242" sx={{ marginLeft: "24px", marginTop: "49px" }}>Benificiaries and Scope</Typography>
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
                        <CustomSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            <MenuItem value={100}>low</MenuItem>
                            <MenuItem value={200}>medium</MenuItem>
                            <MenuItem value={300}>high</MenuItem>
                        </CustomSelect>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px" }}>impact</InputLabel>
                        <CustomSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="impact"
                            value={10}
                            disabled
                            IconComponent={CustomSVGIcon}
                            sx={{
                                "& .MuiSelect-icon": {
                                    color: "#757575",

                                },
                            }}
                        >
                            <MenuItem value={10}>-</MenuItem>

                        </CustomSelect>
                    </FormControl>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px" }}>Complexity and effort</InputLabel>
                        <CustomSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"

                        >
                            <MenuItem value={10}>XS</MenuItem>
                            <MenuItem value={20}>S</MenuItem>
                            <MenuItem value={30}>M</MenuItem>
                            <MenuItem value={40}>L</MenuItem>
                        </CustomSelect>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px" }}>Client priority</InputLabel>
                        <CustomSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            IconComponent={CustomSVGIcon}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </CustomSelect>
                    </FormControl>
                </Box>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px" }}>Status</InputLabel>
                    <CustomSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        defaultValue={10}
                    >
                        <MenuItem value={10}>registred</MenuItem>
                        <MenuItem value={20}>not-registred</MenuItem>
                    </CustomSelect>

                </FormControl>
                <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "24px", }}>Timeline</Typography>
                <DateComponent />
                <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "24px", marginTop: "23px" }}>Description</Typography>

            </Box>
        </>
    )
}