// import { Autocomplete, Box, Button, colors, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Stack, styled, TextField, Typography } from "@mui/material";
// import MinimizeIcon from '@mui/icons-material/Minimize';
// import styles from "../../style/form.module.css";
// import CloseIcon from '@mui/icons-material/Close';
// import DateComponent from "../date-component";
// import Caption from "../caption-component";
// import { Control, Controller, FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
// import { formFillUpSchema, FormFillUpSchema } from "../../schema/form.schema";
// import { zodResolver } from '@hookform/resolvers/zod';
// import stylee from "./from-fill.module.css"
// import CustomTextFeild from "@/app/newRequirementForm/inputSection/textFeild.tsx/textfeildComponent";
// import CustomSelect from "@/app/newRequirementForm/inputSection/select/customSelect";
// import CustomAutoComplete from "@/app/newRequirementForm/inputSection/autoComplete/cutomAutoComplete";
// const CustomTextField = styled(TextField)({

//     width: "545px",
//     '& .MuiOutlinedInput-notchedOutline': {
//         borderRadius: '10px',
//         height: "50px",
//     },
//     '& .MuiInputLabel-root': {
//         fontSize: '14px',
//         color: "#9E9E9E",
//         top: "-5px"
//     },
// });


// // const CustomSelect = styled(Select)({
// //     marginLeft: "2px", width: "273px", '& .MuiOutlinedInput-notchedOutline': {
// //         borderRadius: '10px',
// //         height: "50px",
// //     }, '& .MuiInputLabel-root': {
// //         fontSize: '14px',
// //         color: "#9E9E9E",
// //         top: "-5px",


// //     },
// // })
// // const CustomAutoComplete = styled(Autocomplete)({
// //     width: "273px",
// //     height: "8px",
// //     marginLeft: "2px",
// //     '& .MuiOutlinedInput-notchedOutline': {
// //         borderRadius: '10px',
// //         height: "50px"
// //     },
// //     '& .MuiInputLabel-root': {
// //         fontSize: '14px',
// //         color: "#9E9E9E",
// //         marginLeft: "-8px"

// //     },
// // })
// const CustomSVGIcon = () => (
//     <img
//         src="/info.svg"
//         alt="custom icon"
//         style={{ width: "20px", height: "20px", marginRight: "20px", marginTop: "-4px" }}
//     />
// );


// interface FormFillUpProps {
//     register: UseFormRegister<FormFillUpSchema>;
//     control: Control<FormFillUpSchema>;
//     errors: FieldErrors<FormFillUpSchema>;
// }

// export default function FormFillUp({ register, control, errors }: FormFillUpProps) {


//     return (

//         <>
//             <Stack direction="column" paddingLeft="24px" paddingRight="24px">
                

//                 {/* <Box sx={{ display: "flex", gap: "15px" }}>

       



//                     {/* <CustomAutoComplete
//                             disablePortal
//                             options={[]}
//                             renderInput={(params) => <TextField {...params} label="Requesting institution" error={!!errors.requestingInstitution}
//                                 helperText={errors.requestingInstitution?.message} InputLabelProps={{
//                                     sx: {
//                                         top: '-4px',
//                                         left: '10px',
//                                         fontSize: '14px',
//                                     },
//                                 }} />*/}
                  
                          
                 
                   
//                     {/* <Controller
//                         name="type"
//                         control={control}
//                         render={({ field }) => (
//                             <CustomAutoComplete
//                                 sx={{ width: "273px", marginRight: "-7px" }}
//                                 {...field}
//                                 disablePortal
//                                 options={["type1", "type2", ""]}
//                                 renderInput={(params) => (
//                                     <TextField
//                                         {...params}
//                                         label="Type"
//                                         error={!!errors.type}
//                                         helperText={errors.type?.message} InputLabelProps={{
//                                             sx: {
//                                                 top: '-4px',
//                                                 left: '10px',
//                                                 fontSize: '14px',
//                                             },
//                                         }}
//                                     />
//                                 )}
//                             />
//                         )}
//                     />
//                 </Box> */}
    

//                 <CustomSelect labelValue={"Domain"}/>
//                 <Controller
//                     name="domain"
//                     control={control}
//                     render={({ field }) => (
//                         <Autocomplete
//                             {...field}
//                             disablePortal
//                             options={[]}
//                             value={field.value || ""}
//                             sx={{
//                                 width: "545px", marginLeft: "2px", '& .MuiOutlinedInput-notchedOutline': {
//                                     borderRadius: '10px',
//                                     height: "50px",
//                                 },
//                                 marginTop: "49px",
//                                 '& .MuiInputLabel-root': {
//                                     fontSize: '14px',
//                                     color: "#9E9E9E",
//                                     marginLeft: "-8px"

//                                 },
//                             }}
//                             renderInput={(params) => (
//                                 <TextField
//                                     {...params}
//                                     label="Domain"
//                                     error={!!errors.domain}
//                                     helperText={errors.domain?.message} InputLabelProps={{
//                                         sx: {
//                                             top: '-4px',
//                                             left: '10px',
//                                             fontSize: '14px',
//                                         },
//                                     }}
//                                 />
//                             )}
//                         />
//                     )}
//                 />

//                 <Box sx={{ display: "flex", gap: "15px" }}>
//                     <Autocomplete
//                     multiple
//                         disablePortal
//                         options={["Ten", "Twenty"]}
//                         sx={{
//                             width: "273px", height: "8px", marginLeft: "2px", '& .MuiOutlinedInput-notchedOutline': {
//                                 borderRadius: '10px',
//                                 height: "50px",
//                             },
//                             '& .MuiInputLabel-root': {
//                                 fontSize: '14px',
//                                 color: "#9E9E9E",
//                                 marginLeft: "-8px"

//                             }, 
//                         }}
//                         renderInput={(params) => <TextField error={!!errors.collaboratorDomain}
//                             helperText={errors.collaboratorDomain?.message} {...params} label="Collaborator Domain" InputLabelProps={{
//                                 sx: {
//                                     top: '-4px',
//                                     left: '10px',
//                                     fontSize: '14px',
//                                 },
//                             }} />}
//                     />   
//                     <Autocomplete
//                         disablePortal
//                         options={["A", "B", "C"]}
//                         sx={{
//                             width: "273px", height: "8px", marginRight: "-7px", marginLeft: "", '& .MuiOutlinedInput-notchedOutline': {
//                                 borderRadius: '10px',
//                                 height: "50px"
//                             },
//                             '& .MuiInputLabel-root': {
//                                 fontSize: '14px',
//                                 color: "#9E9E9E",
//                                 marginLeft: "-8px"
//                             },
//                         }}
//                         renderInput={(params) => <TextField error={!!errors.followerDomain}
//                             helperText={errors.followerDomain?.message}  {...params} label="Follower Domain" InputLabelProps={{

//                                 sx: {
//                                     top: '-4px',
//                                     left: '10px',
//                                     fontSize: '14px',
//                                 },
//                             }} />}
//                     />
//                 </Box>

//                 <Box sx={{ marginLeft: "-18px" }}>
//                     <Typography className={styles.benificier} variant="h6" color="#424242" sx={{ marginLeft: "24px", marginTop: "55px", marginBottom: "10px" }}>Benificiaries and Scope</Typography>
//                     <Autocomplete
//                         multiple
//                         disablePortal
//                         options={["Ten", "Twenty", "Thirty"]}
//                         sx={{
//                             width: "545px", marginLeft: "24px", '& .MuiOutlinedInput-notchedOutline': {
//                                 borderRadius: '10px',
//                                 height: "50px",
//                             },
//                             '& .MuiInputLabel-root': {
//                                 fontSize: '14px',
//                                 color: "#9E9E9E",
//                                 marginLeft: "-8px"

//                             },
//                         }}
//                         renderInput={(params) => <TextField error={!!errors.benefitedInstitutions}
//                             helperText={errors.benefitedInstitutions?.message} {...params} label="Benifited Institutions" InputLabelProps={{
//                                 sx: {
//                                     top: '-4px',
//                                     left: '10px',
//                                     fontSize: '14px',

//                                 },
//                             }} />}
//                     />

//                     <Box sx={{ display: "flex", gap: "15px", marginLeft: "24px" }}>
//                         <Autocomplete
//                             disablePortal
//                             options={["Ten", "Twenty"]}
//                             sx={{
//                                 width: "273px", height: "8px", marginLeft: "2px", '& .MuiOutlinedInput-notchedOutline': {
//                                     borderRadius: '10px',
//                                     height: "50px",
//                                 },
//                                 '& .MuiInputLabel-root': {
//                                     fontSize: '14px',
//                                     color: "#9E9E9E",
//                                     marginLeft: "-8px"

//                                 },
//                             }}
//                             renderInput={(params) => <TextField error={!!errors.studyModality}
//                                 helperText={errors.studyModality?.message} {...params} label="Study Modality" InputLabelProps={{

//                                     sx: {
//                                         top: '-4px',
//                                         left: '10px',
//                                         fontSize: '14px',
//                                     },
//                                 }} />}
//                         />
//                         <Autocomplete
//                             disablePortal
//                             options={["A", "B", "C"]}
//                             sx={{
//                                 width: "273px", height: "8px", marginRight: "-12px", marginLeft: "", '& .MuiOutlinedInput-notchedOutline': {
//                                     borderRadius: '10px',
//                                     height: "50px"
//                                 },
//                                 '& .MuiInputLabel-root': {
//                                     fontSize: '14px',
//                                     color: "#9E9E9E",
//                                     marginLeft: "-8px"
//                                 },
//                             }}
//                             renderInput={(params) => <TextField error={!!errors.mandatory}
//                                 helperText={errors.mandatory?.message} {...params} label="Mandatory" InputLabelProps={{

//                                     sx: {
//                                         top: '-4px',
//                                         left: '10px',
//                                         fontSize: '14px',
//                                     },
//                                 }} />}
//                         />
//                     </Box>
//                     <Autocomplete
//                         disablePortal
//                         options={["Yes", "No"]}
//                         sx={{
//                             width: "265px", height: "8px", marginLeft: "28px", '& .MuiOutlinedInput-notchedOutline': {
//                                 borderRadius: '10px',
//                                 height: "50px"
//                             },
//                             marginTop: "49px",
//                             '& .MuiInputLabel-root': {
//                                 fontSize: '14px',
//                                 color: "#9E9E9E",
//                                 marginLeft: "-8px"

//                             },

//                         }}
//                         renderInput={(params) => <TextField error={!!errors.alternativeSolutionExist}
//                             helperText={errors.alternativeSolutionExist?.message} {...params} label="Alternative solutions exists" InputLabelProps={{

//                                 sx: {
//                                     top: '-4px',
//                                     left: '10px',
//                                     fontSize: '14px',
//                                 },
//                             }} />}
//                     />
//                 </Box>
//                 <Box sx={{ marginLeft: "8px" }}>
//                     <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "3px", marginTop: "49px", marginBottom: "10px" }}>Impact and Feasibilty</Typography>
//                     <Box sx={{ display: "flex", marginLeft: "8px" }}>

//                         <FormControl fullWidth className={styles.userImpactFormControl}>
//                             <InputLabel id="demo-simple-select-label" sx={{ pading: "15px", fontSize: "14px", marginTop: "-5px", color: "#9E9E9E" }}>User impact</InputLabel>

//                             <CustomSelect
//                                 size="small"
//                                 label="user impact"

//                             >
//                                 <MenuItem value={100}>low</MenuItem>
//                                 <MenuItem value={200}>medium</MenuItem>
//                                 <MenuItem value={300}>high</MenuItem>
//                             </CustomSelect>
//                             {errors.userImpact && (
//                                 <Typography color="error" variant="caption">
//                                     {errors.userImpact.message}
//                                 </Typography>
//                             )}
//                         </FormControl>

//                         <FormControl fullWidth>
//                             <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "24px", fontSize: "14px", marginTop: "-5px", color: "#9E9E9E" }}>impact</InputLabel>
//                             <CustomSelect
//                                 labelId="demo-simple-select-label"
//                                 id="demo-simple-select"
//                                 label="impact"
//                                 value={10}
//                                 disabled

//                                 IconComponent={CustomSVGIcon}
//                                 sx={{
//                                     "& .MuiSelect-icon": {
//                                         color: "#757575",

//                                     },
//                                     marginLeft: "24px",
//                                     width: "260px"
//                                 }}
//                             >
//                                 <MenuItem value={10}>-</MenuItem>

//                             </CustomSelect>
//                             {errors.impact && (
//                                 <Typography color="error" variant="caption">
//                                     {errors?.impact?.message}
//                                 </Typography>
//                             )}
//                         </FormControl>
//                     </Box>
//                     <Box sx={{ display: "flex", marginLeft: "5px", gap: "45px" }}>
//                         <FormControl fullWidth>
//                             <InputLabel id="demo-simple-select-label" sx={{ fontSize: "14px", marginTop: "-5px", color: "#9E9E9E" }}>Complexity and effort</InputLabel>
//                             <CustomSelect
//                                 labelId="demo-simple-select-label"
//                                 id="demo-simple-select"
//                                 label="Age"

//                             >
//                                 <MenuItem value={10}>XS</MenuItem>
//                                 <MenuItem value={20}>S</MenuItem>
//                                 <MenuItem value={30}>M</MenuItem>
//                                 <MenuItem value={40}>L</MenuItem>
//                             </CustomSelect>
//                             {errors.complexityAndEffort && (
//                                 <Typography color="error" variant="caption">
//                                     {errors.complexityAndEffort.message}
//                                 </Typography>
//                             )}
//                         </FormControl>
//                         <FormControl fullWidth>
//                             <InputLabel id="demo-simple-select-label" sx={{ fontSize: "14px", marginTop: "-5px", color: "#9E9E9E" }}>Client priority</InputLabel>
//                             <CustomSelect
//                                 labelId="demo-simple-select-label"
//                                 id="demo-simple-select"
//                                 label="Age"
//                                 IconComponent={CustomSVGIcon}
//                                 sx={{ width: "260px" }}
//                             >
//                                 <MenuItem value={10}>Ten</MenuItem>
//                                 <MenuItem value={20}>Twenty</MenuItem>
//                                 <MenuItem value={30}>Thirty</MenuItem>
//                             </CustomSelect>
//                             {errors.clientPriority && (
//                                 <Typography color="error" variant="caption">
//                                     {errors.clientPriority.message}
//                                 </Typography>
//                             )}
//                         </FormControl>
//                     </Box>
//                     <FormControl fullWidth>
//                         <InputLabel id="demo-simple-select-label" sx={{ marginLeft: "11px", fontSize: "14px", marginTop: "1px", color: "#9E9E9E" }}>Status</InputLabel>
//                         <CustomSelect
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             label="Age"
//                             defaultValue={10}
//                             sx={{ marginTop: "5px", marginLeft: "9px" }}
//                         >
//                             <MenuItem value={10} sx={{ color: "rgba(0, 0, 0, 0.87)" }}>Registred</MenuItem>
//                             <MenuItem value={20}  >Not-Registred</MenuItem>
//                         </CustomSelect>

//                     </FormControl>
//                 </Box> */}
//                 <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "20px", marginTop: "3px", marginBottom: "3px", color: "#9E9E9E" }}>Timeline</Typography>
//                 <DateComponent />
//                 <Typography className={styles.benificier} variant="h6" color=" #424242" sx={{ marginLeft: "24px", marginTop: "23px", color: "#9E9E9E" }}>Description</Typography>

//             </Stack>

//         </>
//     )
// }




