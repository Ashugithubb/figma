// 'use client';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import {
//     Box,
//     Button,
//     Typography,
//     Paper,
//     InputAdornment,
//     IconButton,
//     Link as MuiLink,
// } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import Link from 'next/link';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import MenuItem from '@mui/material/MenuItem';
// import { signupSchema } from '../schema/form.schema';

// type SignupFormData = z.infer<typeof signupSchema>;

// export default function FormFillUpComponent() {
//     const [showPassword, setShowPassword] = useState(false);

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<SignupFormData>({
//         resolver: zodResolver(signupSchema),
//         defaultValues: {
//             name: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//         },
//     });

//     const onSubmit = async (data: SignupFormData) => {
//         console.log("form Submited")
//     };

//     return (
//         <>
//             <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 minHeight="100vh"
//                 bgcolor="#f5f5f5"
//             >
//                 <Paper elevation={3} sx={{ padding: 4, width: 450 }}>
//                     <form onSubmit={handleSubmit(onSubmit)} noValidate>

//                         <TextField
//                             label="First Name"
//                             {...register('name')}
//                             error={!!errors.name}
//                             helperText={errors.name?.message}
//                             fullWidth
//                             margin="normal"
//                         />

//                         <TextField
//                             label="Email"
//                             {...register('email')}
//                             error={!!errors.email}
//                             helperText={errors.email?.message}
//                             fullWidth
//                             margin="normal"
//                         />



//                         <TextField
//                             label="Confirm Password"
//                             type="password"
//                             {...register('confirmPassword')}
//                             error={!!errors.confirmPassword}
//                             helperText={errors.confirmPassword?.message}
//                             fullWidth
//                             margin="normal"
//                         />

//                         <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//                             Create
//                         </Button>


//                     </form>
//                 </Paper>
//             </Box>
//         </>
//     );
// }