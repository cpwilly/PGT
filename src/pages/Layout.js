import { Outlet, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
  let navigate = useNavigate();
  const home = () => {
    navigate("/");
  }
  return (
    <>
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ bgcolor: "#424242" }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <h1 id='siteName' className='heading' onClick={home}>RateMyDorm</h1>
              </Typography>
              <Button onClick={props.sOut} color="inherit">Sign Out</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;