
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
export default function DateComponent() {
    const [startDate, setDate] = useState<Dayjs | null>(null);

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} sx={{
                        marginLeft: "24px", width: "300px",
                    }}>
                        <DatePicker label="Start Date" value={startDate} onChange={(selectedDate) => { setDate(selectedDate) }} slotProps={{
                            textField: {
                                size: 'small', InputProps: {
                                    sx: { borderRadius: '10px',  },
                                },
                            }
                        }}
                            sx={{
                                width: "300px",
                                "& .MuiInputBase-input": {
                                    height: "100px",
                                    fontSize: "14px",
                                   


                                },
                                '& .MuiInputLabel-root': { color:"#9E9E9E",},
                                height: "40px"


                            }} />
                    </DemoContainer>
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} sx={{
                        marginLeft: "24px", width: "287px", fontSize: "14px",
                    }}  >
                        <DatePicker label="Finish Date" minDate={startDate ?? undefined} slotProps={{
                            textField: {
                                size: 'small', InputProps: {
                                    sx: { borderRadius: '10px', backgroundColor: 'white' },
                                },
                            }
                        }}
                            sx={{
                                width: "273px",
                                "& .MuiInputBase-input": {
                                    height: "10px",

                                },
                                   '& .MuiInputLabel-root': { color:"#9E9E9E",},
                                fontSize: "14px",
                                height: "40px",


                            }} />
                    </DemoContainer>
                </LocalizationProvider>

            </Box>
            <Box sx={{ display: "flex" }}>
                <Typography sx={{
                    marginLeft: "30px", color: "#9E9E9E", fontSize: "11px", fontWeight: "400"
                }}>optional</Typography>
                <Typography sx={{ marginLeft: "285px", color: "#9E9E9E", fontSize: "11px", fontWeight: "400" }}>optional</Typography>
            </Box >
        </>
    )
}