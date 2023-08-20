import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import GoogleButton from 'react-google-button'



import { AppBar, Tab, Tabs } from '@mui/material';
import Login from './Login';
import Signup from './Signup';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useCart } from '../context/cart';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'tomato',
  borderRadius:'20px',
  boxShadow: 24,
  
  p: 4,
};

export default function AuthModel() {
  const{setAlert,handleOpen,handleClose,open}=useCart()
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(0);

  const googleProvider=new GoogleAuthProvider()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const signInwithGoogle=()=>{
  signInWithPopup(auth,googleProvider).then(res=>{
    setAlert({
      open:true,
      message:`Login successful. welcome ${res.user.email}`,
      type:'success'
  })
  handleClose()
  }).catch((error)=>{
    setAlert({
      open:true,
      message:error.message,
      type:'error'
  })
  })
}
  return (
    <div>
      <Button variant='contained' 
      style={{
        width:85,
        height:40,
       
        backgroundColor:'#EEBC1D'
      }}
      onClick={handleOpen}>Login</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
        <Box  sx={style} >
        <AppBar position='static' style={{backgroundColor:"transparent",color:'white'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Login" />
          <Tab label="Sign Up"  />
          
        </Tabs>
        </AppBar>
        {value ===0 && <Login handleClose={handleClose} />}
        {value === 1 && <Signup handleClose={handleClose} />}
        <Box style={{
          padding:24,
          paddingTop:0,
          display:'flex',
          flexDirection:'column',
          textAlign:'center',
          gap:20,
          fontSize:20,
        }}>
          <span>OR</span>
          <GoogleButton
          style={{width:'100%',outline:'none'}}
          onClick={signInwithGoogle}
          />
        </Box>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
}