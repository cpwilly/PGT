import './FilterPage.css';
import First from '../components/First';
import Second from '../components/Second';
import Upper from '../components/Upper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import track from '../img/track.png'
import { useNavigate } from "react-router-dom";

function FilterPage(props) {
  let navigate = useNavigate();
  const tylerSubmit = () => {
    props.setSelected("Tyler");
    navigate('DisplayPage');
  }
  const kuschSubmit = () => {
    props.setSelected("Kusch");
    navigate('DisplayPage');
  }
  const stjSubmit = () => {
    props.setSelected("Stephanie Tubbs Jones");
    navigate('DisplayPage');
  }
  const villageSubmit = () => {
    props.setSelected("The Village House 7");
    navigate('DisplayPage');
  }
  return (
    <>
      <div className='container-fluid' id='selection' style={{ backgroundImage: `url(${track})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='col text-center'>
          <div className='row-md-6'>
            <div className='row'>
              <div className='col-md-4'>
                <h3 style={{ color: 'white' }} className='text-start'>First Year:</h3>
                <First setSelected={props.setSelected} />
              </div>
              <div className='col-md-4'>
                <h3 style={{ color: 'white' }} className='text-start'>Second Year:</h3>
                <Second setSelected={props.setSelected} />
              </div>
              <div className='col-md-4'>
                <h3 style={{ color: 'white' }} className='text-start'>Upperclass:</h3>
                <Upper setSelected={props.setSelected} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='container-fluid' style={{ marginTop: 0, marginBottom: 0 }}>
        <h3 style={{ textAlign: 'center' }}>Suggested: </h3>
        <br />
        <div className='row'>
          <div className='col-md-3'>
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  First Year
                </Typography>
                <Typography variant="h5" component="div">
                  Tyler
                </Typography>
                <br />
                <Typography variant="body2">
                  {/* Show stars here */}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={tylerSubmit}>View</Button>
              </CardActions>
            </Card>
          </div>
          <div className='col-md-3'>
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Second Year
                </Typography>
                <Typography variant="h5" component="div">
                  Kusch
                </Typography>
                <br />
                <Typography variant="body2">
                  {/* Show stars here */}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={kuschSubmit}>View</Button>
              </CardActions>
            </Card>
          </div>
          <div className='col-md-3'>
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Upperclass
                </Typography>
                <Typography variant="h5" component="div">
                  Stephanie Tubbs Jones
                </Typography>
                <br />
                <Typography variant="body2">
                  {/* Show stars here */}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={stjSubmit}>View</Button>
              </CardActions>
            </Card>
          </div>
          <div className='col-md-3'>
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Upperclass
                </Typography>
                <Typography variant="h5" component="div">
                  Village House 7
                </Typography>
                <br />
                <Typography variant="body2">
                  {/* Show stars here */}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={villageSubmit}>View</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default FilterPage;