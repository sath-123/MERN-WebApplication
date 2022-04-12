import * as React from 'react';
//import rt 
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import FormPropsTextFields from './Register';

export default function BasicSelect() {
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleChange}
                >
                    <MenuItem value="Bu">Bu</MenuItem>
                    <MenuItem value="Venr">Venr</MenuItem>
                </Select>
            </FormControl>
            

        </Box>
    );
}


//export default Register;
