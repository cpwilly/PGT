import './FilterPage.css';
import First from '../components/First';
import Second from '../components/Second';
import Upper from '../components/Upper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import pic4 from '../img/pic4.png';


function FilterPage(props) {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#424242" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h1 id='siteName' className = 'heading'>RateMyDorm</h1>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div className='container-fluid' style={{ backgroundImage:`url(${pic4})`}}>
        <div className='col text-center'>
          <div className='row-md-6'>
            <div className='row'>
              <div className='col-md-4'> 
                <First setSelected={props.setSelected}/>
              </div>
              <div className='col-md-4'>
                <Second setSelected={props.setSelected}/>
              </div>
              <div className='col-md-4'>
                <Upper setSelected={props.setSelected}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterPage;