import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
export default function DateComponent() {
  const [startDate, setDate] = useState<Dayjs | null>(null);

  return (
    <>
      <Box sx={{ display: "flex", gap: "16px" }}>

        <Box sx={{ flex: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                slots={{
                  openPickerIcon: () => (
                    // <IconButton>

                      <CalendarTodayOutlinedIcon />
                    // </IconButton>
                  ),
                }}
                label="Start Date"
                value={startDate}
                onChange={(selectedDate) => setDate(selectedDate)}
                slotProps={{
                  textField: {
                    size: "small",
                    InputProps: {
                      sx: { borderRadius: "8px" },
                    },
                  },

                }}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    fontSize: "14px",
                  },
                  "& .MuiInputLabel-root": { color: "#9E9E9E" },
                  height: "40px",
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>


        <Box sx={{ flex: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                slots={{
                  openPickerIcon: () => (
                    // <IconButton>

                      <CalendarTodayOutlinedIcon />
                    // </IconButton>
                  ),
                }}
                label="Finish Date"
                minDate={startDate ?? undefined}
                slotProps={{
                  textField: {
                    size: "small",
                    InputProps: {
                      sx: { borderRadius: "10px", backgroundColor: "white" },
                    },
                  },
                }}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    fontSize: "14px",
                  },
                  "& .MuiInputLabel-root": { color: "#9E9E9E" },
                  height: "40px",
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Box>


      <Box sx={{ display: "flex", gap: "16px", }}>
        <Typography
          sx={{
            flex: 1,
            color: "#9E9E9E",
            fontSize: "11px",
            fontWeight: "400",

            marginLeft: "16px"
          }}
        >
          Optional
        </Typography>
        <Typography
          sx={{
            flex: 1,
            color: "#9E9E9E",
            fontSize: "11px",
            fontWeight: "400",

            marginLeft: "16px"
          }}
        >
          Optional
        </Typography>
      </Box>
    </>
  );
}
