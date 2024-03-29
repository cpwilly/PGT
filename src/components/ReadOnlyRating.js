import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function BasicRating(props) {
    return (
        <Rating name="read-only" value={Math.floor(props.rating)} readOnly />
    );
  }