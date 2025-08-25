import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';
export default function DateComponent() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} sx={{
                        marginLeft: "24px", width: "287px", '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '10px',
                            height: "50px",
                        },
                    }}>
                        <DatePicker label="Start Date" />
                    </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} >
                        <DatePicker label="End Date" sx={{
                            marginLeft: "24px", width: "287px", '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '10px',
                                height: "10px",
                            },
                        }} />
                    </DemoContainer>
                </LocalizationProvider></Box>
        </>
    )
}