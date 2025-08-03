import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Newsitem(props) {
    const formattedDate = props.publishedAt
    ? new Date(props.publishedAt).toLocaleString()
    : 'Unknown date';
  return (
    <Card sx={{ maxWidth: 345, color:'primary',    display: 'flex',  flexDirection: 'column',  justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image= {props.image?props.image:"https://encrypted-tbn0.gstatic.com/https://images.unsplash.com/photo-1749738137089-b3158bc72a81?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://cantabriaspain.co.uk/wp-content/uploads/2022/04/nature-7-e1683203764604.jpg?q=tbn:ANd9GcTxMC5WF-YzaxHvyH3Ne3SINEVj9_7D9z2fFA&s"}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {props.title?`${props.title.slice(0,44)}...`:"No Title"}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign:'start', marginBlock: '10' }}>
          {props.description?`${props.description.slice(0,88)}...`:"No Description"}
        </Typography>
        <Typography variant="caption" display="block" sx={{ color: 'gray',my:1 }}>
          <b>Author:</b> {props.author ? props.author : 'Unknown'} <br />
          <b>Published:</b> {formattedDate}
        </Typography>
      </CardContent>
      <CardActions sx={{paddingBlockEnd:2}}>
        <Button href={props.url} target="_blank" variant= 'contained' color='secondary' size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}