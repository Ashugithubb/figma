// // import { Autocomplete, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, styled, TextField, Typography } from "@mui/material";
// // import MinimizeIcon from '@mui/icons-material/Minimize';
// // import styles from "../style/form.module.css";
// // import CloseIcon from '@mui/icons-material/Close';
// // import DateComponent from "./date-component";
// // import Caption from "./caption-component";
// // import FormFillUp from "./formFillUp/form-fiil-up";
// // import { FormFillUpSchema } from "../schema/form.schema";
// // import { useForm } from "react-hook-form";
// // import { red } from "@mui/material/colors";


// // export default function FormComponenet() {
// //     const {
// //         register,
// //         handleSubmit,
// //         control,
// //         reset,
// //     } = useForm<FormFillUpSchema>()


// //     const onSubmit = async (data: any) => {
// //         console.log("data: ", data);
// //     };
// //     return (
// //         <>
// //             <Paper sx={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 background: "#F7F9FC",
// //                 zIndex: 10,
// //                 position: "sticky",
// //                 top: 0,
// //                 p: 1,

// //             }}>
// //                 <Box className={styles.text} sx={{ paddingLeft: "24px", display: "flex" }}>New requirment</Box>
// //                 <Box className={styles.header}>
// //                     <IconButton sx={{
// //                         padding: "8px",
// //                         marginTop: "-15%",
// //                     }}><MinimizeIcon sx={{ fontSize: "19px" }} /></IconButton>
// //                     <IconButton sx={{
// //                         padding: "8px",

// //                     }}><CloseIcon sx={{ fontSize: "19px", background: "" }} /></IconButton></Box>

// //             </Paper >
// //             <Box sx={{
// //                 maxHeight: "80vh",
// //                 overflowY: "auto",
// //                 background: "#fff",
// //                 p: 2,

// //             }}>
// //                 <FormFillUp />
// //                 <Caption />

// //             </Box>


// //             <Box sx={{ display: "flex", flexDirection: "row-reverse", marginRight: "15px" }}><Button sx={{ textTransform: 'none', color: "#01579b", fontWeight: 600, fontStyle: 'normal', fontFamily: "Open Sans, Arial, sans-serif", fontSize: "14px", marginRight: "45px" }}>CREATE</Button></Box>
// //         </>
// //     )


// // }



// import { Autocomplete, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, styled, TextField, Typography } from "@mui/material";
// import MinimizeIcon from '@mui/icons-material/Minimize';
// import styles from "../style/form.module.css";
// import CloseIcon from '@mui/icons-material/Close';
// import DateComponent from "./date-component";
// import Caption from "./caption-component";
// import FormFillUp from "./formFillUp/form-fiil-up";
// import { formFillUpSchema, FormFillUpSchema } from "../schema/form.schema";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { red } from "@mui/material/colors";
// import Description from "./description/description";



// export default function FormComponenet() {
//     const {
//         register,
//         handleSubmit,
//         control,
//         reset,
//         formState: { errors }, 
//     } = useForm<z.infer<typeof formFillUpSchema>>({
//         resolver: zodResolver(formFillUpSchema), 
//     });

//     const onSubmit = async (data: z.infer<typeof formFillUpSchema>) => {
//         console.log("data: ", data);
//     };

//     return (
//         <>
//             <Paper sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 background: "#F7F9FC",
//                 zIndex: 10,
//                 position: "sticky",
//                 top: 0,
//                 p: 1,
//             }}>
//                 <Box className={styles.text} sx={{ paddingLeft: "24px", display: "flex" }}>New requirment</Box>
//                 <Box className={styles.header}>
//                     <IconButton sx={{
//                         padding: "8px",
//                         marginTop: "-15%",
//                     }}><MinimizeIcon sx={{ fontSize: "19px" }} /></IconButton>
//                     <IconButton sx={{
//                         padding: "8px",
//                     }}><CloseIcon sx={{ fontSize: "19px", background: "" }} /></IconButton></Box>
//             </Paper >
           
           
           
//             {/* <Box sx={{
//                 maxHeight: "80vh",
//                 overflowY: "auto",
//                 background: "#fff",
//                 p: 2,
//             }}>
                
//                 {/* <FormFillUp register={register} control={control} errors={errors} /> */}
//                 {/* <Description/> */}
//             {/* </Box> */} 
//             <Box sx={{ display: "flex", flexDirection: "row-reverse", marginRight: "15px" }}>
//                 <Button
//                     sx={{ textTransform: 'none', color: "#01579b", fontWeight: 600, fontStyle: 'normal', fontFamily: "Open Sans, Arial, sans-serif", fontSize: "14px", marginRight: "45px" }}
//                     onClick={handleSubmit(onSubmit)}
//                 >
//                     CREATE
//                 </Button>
//             </Box>
//         </>
//     );
// }
