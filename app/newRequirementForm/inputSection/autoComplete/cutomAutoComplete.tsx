import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import style from './select.module.css'
import { Autocomplete, TextField } from '@mui/material';
export default function CustomAutoComplete({ labelValue }: { labelValue: string }) {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (

        <>
            <Autocomplete
                 multiple
                disablePortal
                options={[]}
                size='small'
                sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '10px',
                    },
                    '& .MuiInputLabel-root': {
                        fontSize: '14px',
                        color: "#9E9E9E",
                    },
                }}
                renderInput={(params) => <TextField {...params} label={labelValue} />}
            />

        </>)
}
