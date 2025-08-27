import { Box, Paper } from "@mui/material";
import * as React from 'react';
import Table from '@mui/joy/Table';

export default function TableComponent() {
    return (
        <>
            <Paper elevation={3} sx={{height:"300px"}}>
                <Table aria-label="basic table">
                    <thead style={{background:"#EEE"}}>
                        <tr>
                            <th >Name</th>
                            <th>Requesting Institution&nbsp;(g)</th>
                            <th>Domain in charge&nbsp;(g)</th>
                         
                            <th>Coulmn2&nbsp;(g)</th>
                             <th>Coulmn3&nbsp;(g)</th>
                              <th>Benifited Institution&nbsp;(g)</th>
                               <th>Impact</th>
                        </tr>
                    </thead>
                    
                </Table>
                <Box sx={{margin:""}}><img src="./Empty.svg" alt="" /></Box> 
            </Paper>
        </>
    )
}






