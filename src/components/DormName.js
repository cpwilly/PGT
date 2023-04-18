import * as React from 'react';
import Typography from '@mui/material/Typography';


export default function DormName(props){
    return(
        <Typography sx={{ml: -3, mb: 2}} variant='h1' gutterbottom>{props.dormName}</Typography>
    );
}