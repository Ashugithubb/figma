import { Autocomplete, Box, Button, colors, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Stack, styled, TextField, Typography } from "@mui/material";
import MinimizeIcon from '@mui/icons-material/Minimize';
import styles from "../style/form.module.css";
import CloseIcon from '@mui/icons-material/Close';
import DateComponent from "./date-component";
import Caption from "./caption-component";
import { Controller, useForm } from 'react-hook-form';
import { formFillUpSchema, FormFillUpSchema } from "../schema/form.schema";
import { zodResolver } from '@hookform/resolvers/zod';

const CustomTextField = styled(TextField)({
    marginLeft: "24px",
    width: "562px",
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '10px',
        height: "50px",
    },
    '& .MuiInputLabel-root': {
        fontSize: '14px',
        color: "#9E9E9E",
        top: "-5px"
    },
});


const CustomSelect = styled(Select)({
    marginLeft: "24px", width: "270px", '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '10px',
        height: "50px",
    }, '& .MuiInputLabel-root': {
        fontSize: '14px',
        color: "#9E9E9E",
        top: "-5px",


    },
})
const CustomAutoComplete = styled(Autocomplete)({
    width: "270px",
    height: "8px",
    marginLeft: "24px",
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '10px',
        height: "50px"
    },
    '& .MuiInputLabel-root': {
        fontSize: '14px',
        color: "#9E9E9E",
        marginLeft: "-8px"

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

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormFillUpSchema>({
        resolver: zodResolver(formFillUpSchema),
        defaultValues: {
            name: '',
            requestedBy: '',
            requestingInstitution: '',
            type: '',
            domain: '',
            collaboratorDomain: '',
            followerDomain: '',
            benifitedInstitutions: '',
            studyModality: '',
            mandatory: 'Yes',
            alternativeSolutions: 'No',
            userImpact: 'high',
            impact: '',
            complexityEffort: 'L',
            clientPriority: 'Ten',
            status: 'registred',
            startDate: new Date(),
            finishDate: new Date(),
            description: "",
        },
    });
    const onSubmit = async (event: any) => {

console.log(event,'hellllo')
    };



    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="column" gap={1} padding={1}>
                    <CustomTextField
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        slotProps={{
                            inputLabel: {
                                classes: {
                                    shrink: styles.shrunkLabel
                                }
                            }
                        }} id="outlined-basic" label="Name" variant="outlined" />

                    <CustomTextField {...register("requestedBy")}
                        error={!!errors.requestedBy}
                        helperText={errors.requestedBy?.message} label="Requested by" variant="outlined" />

                    <Box sx={{ display: "flex" }}>

                        {/* <CustomAutoComplete
                            disablePortal
                            options={[]}
                            renderInput={(params) => <TextField {...params} label="Requesting institution" error={!!errors.requestingInstitution}
                                helperText={errors.requestingInstitution?.message} InputLabelProps={{
                                    sx: {
                                        top: '-4px',
                                        left: '10px',
                                        fontSize: '14px',
                                    },
                                }} />}
                        /> */}
                        <Controller
                            name="requestingInstitution"
                            control={control}
                            render={({ field }) => (
                                <CustomAutoComplete
                                    {...field}
                                    disablePortal
                                    options={["IIT", "NIT", "LPU"]}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Requesting institution"
                                            error={!!errors.requestingInstitution}
                                            helperText={errors.requestingInstitution?.message} InputLabelProps={{
                                                sx: {
                                                    top: '-4px',
                                                    left: '10px',
                                                    fontSize: '14px',
                                                },
                                            }}
                                        />
                                    )}
                                />
                            )}
                        />
                        <Controller
                            name="type"
                            control={control}
                            render={({ field }) => (
                                <CustomAutoComplete
                                    {...field}
                                    disablePortal
                                    options={["type1", "type2", ""]}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Type"
                                            error={!!errors.type}
                                            helperText={errors.type?.message} InputLabelProps={{
                                                sx: {
                                                    top: '-4px',
                                                    left: '10px',
                                                    fontSize: '14px',
                                                },
                                            }}
                                        />
                                    )}
                                />
                            )}
                        />
                    </Box>



                    <Controller
                        name="domain"
                        control={control}
                        render={({ field }) => (
                            <Autocomplete
                                {...field}
                                disablePortal
                                options={["Domain1", "Domain2"]}
                                sx={{
                                    width: "562px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '10px',
                                        height: "50px",
                                    },
                                    marginTop: "49px",
                                    '& .MuiInputLabel-root': {
                                        fontSize: '14px',
                                        color: "#9E9E9E",
                                        marginLeft: "-8px"

                                    },
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Domain"
                                        error={!!errors.domain}
                                        helperText={errors.domain?.message} InputLabelProps={{
                                            sx: {
                                                top: '-4px',
                                                left: '10px',
                                                fontSize: '14px',
                                            },
                                        }}
                                    />
                                )}
                            />
                        )}
                    />

                    <Box sx={{ display: "flex" }}>
                        <Autocomplete
                            disablePortal
                            options={["Ten", "Twenty"]}
                            sx={{
                                width: "270px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px",
                                },
                                '& .MuiInputLabel-root': {
                                    fontSize: '14px',
                                    color: "#9E9E9E",
                                    marginLeft: "-8px"

                                },
                            }}
                            renderInput={(params) => <TextField {...params} label="Collaborator Domain" InputLabelProps={{

                                sx: {
                                    top: '-4px',
                                    left: '10px',
                                    fontSize: '14px',
                                },
                            }} />}
                        />
                        <Autocomplete
                            disablePortal
                            options={["A", "B", "C"]}
                            sx={{
                                width: "270px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px"
                                },
                                '& .MuiInputLabel-root': {
                                    fontSize: '14px',
                                    color: "#9E9E9E",
                                    marginLeft: "-8px"
                                },
                            }}
                            renderInput={(params) => <TextField {...params} label="Follower Domain" InputLabelProps={{

                                sx: {
                                    top: '-4px',
                                    left: '10px',
                                    fontSize: '14px',
                                },
                            }} />}
                        />
                    </Box>

                    <Typography className={styles.benificier} variant="h6" color="#424242" sx={{ marginLeft: "24px", marginTop: "49px" }}>Benificiaries and Scope</Typography>
                    <Autocomplete
                        multiple
                        disablePortal
                        options={["Ten", "Twenty", "Thirty"]}
                        sx={{
                            width: "562px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '10px',
                                height: "50px",
                            },
                            '& .MuiInputLabel-root': {
                                fontSize: '14px',
                                color: "#9E9E9E",
                                marginLeft: "-8px"

                            },
                        }}
                        renderInput={(params) => <TextField {...params} label="Benifited Institutions" InputLabelProps={{

                            sx: {
                                top: '-4px',
                                left: '10px',
                                fontSize: '14px',

                            },
                        }} />}
                    />

                    <Box sx={{ display: "flex" }}>
                        <Autocomplete
                            disablePortal
                            options={["Ten", "Twenty", "Thirty"]}
                            sx={{
                                width: "270px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px",
                                },
                                '& .MuiInputLabel-root': {
                                    fontSize: '14px',
                                    color: "#9E9E9E",
                                    marginLeft: "-8px"

                                },
                            }}
                            renderInput={(params) => <TextField {...params} label="Study modality" InputLabelProps={{

                                sx: {
                                    top: '-4px',
                                    left: '10px',
                                    fontSize: '14px',
                                },
                            }} />}
                        />
                        <Autocomplete
                            disablePortal
                            options={["Yes", "No"]}
                            sx={{
                                width: "270px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '10px',
                                    height: "50px"
                                },
                                '& .MuiInputLabel-root': {
                                    fontSize: '14px',
                                    color: "#9E9E9E",
                                    marginLeft: "-8px"

                                },
                            }}
                            renderInput={(params) => <TextField {...params} label="Mandatory" InputLabelProps={{

                                sx: {
                                    top: '-4px',
                                    left: '10px',
                                    fontSize: '14px',
                                },
                            }} />}
                        />
                    </Box>
                    <Autocomplete
                        disablePortal
                        options={["Yes", "No"]}
                        sx={{
                            width: "270px", height: "8px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '10px',
                                height: "50px"
                            },
                            marginTop: "49px",
                            '& .MuiInputLabel-root': {
                                fontSize: '14px',
                                color: "#9E9E9E",
                                marginLeft: "-8px"

                            },

                        }}
                        renderInput={(params) => <TextField {...params} label="Alternative solutions exists" InputLabelProps={{

                            sx: {
                                top: '-4px',
                                left: '10px',
                                fontSize: '14px',
                            },
                        }} />}
                    />

                    <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "24px", marginTop: "49px" }}>Impact and Feasibilty</Typography>
                    <Box sx={{ display: "flex" }}>

                        <FormControl fullWidth className={styles.userImpactFormControl}>
                            <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px", fontSize: "14px", marginTop: "-5px", color: "#9E9E9E" }}>User impact</InputLabel>

                            <CustomSelect
                                size="small"
                                label="user impact"

                            >
                                <MenuItem value={100}>low</MenuItem>
                                <MenuItem value={200}>medium</MenuItem>
                                <MenuItem value={300}>high</MenuItem>
                            </CustomSelect>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px", fontSize: "14px", marginTop: "-5px", color: "#9E9E9E" }}>impact</InputLabel>
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
                            <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px", fontSize: "14px", marginTop: "-5px", color: "#9E9E9E" }}>Complexity and effort</InputLabel>
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
                            <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px", fontSize: "14px", marginTop: "-5px", color: "#9E9E9E" }}>Client priority</InputLabel>
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
                    <FormControl  fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px", fontSize: "14px", marginTop: "-5px", color: "#9E9E9E" }}>Status</InputLabel>
                        <CustomSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            defaultValue={10}
                        >
                            <MenuItem value={10} sx={{ color: "rgba(0, 0, 0, 0.87)" }}>Registred</MenuItem>
                            <MenuItem value={20}  >Not-Registred</MenuItem>
                        </CustomSelect>

                    </FormControl>
                    <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "24px", marginTop: "-5px", color: "#9E9E9E" }}>Timeline</Typography>
                    <DateComponent />
                    <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "24px", marginTop: "23px", color: "#9E9E9E" }}>Description</Typography>
                    {/* <Button type="submit">Submit</Button> */}
                </Stack>
            </form>
        </>
    )
}