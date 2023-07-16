import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useCart } from '../context/cart';
import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


export default function UserSidebar() {

  

  const [state, setState] = React.useState({
  
    right: false,
  });
  const {user,setAlert} =useCart()
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut=()=>{
    signOut(auth)
    setAlert({
      open:true,
      message:`Logout successful`,
      type:'success'
  })
  toggleDrawer()
  }
  
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
          onClick={toggleDrawer(anchor,true)}
          style={{
            height:38,
            width:38,
            marginLeft:15,
            cursor:'pointer',
            backgroundColor:'#EEBC1D'
          }}
          src={user.photoURL}
          alt={user.displayName ||user.email}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div style={{
                width:350,
                padding:25,
                height:'100%',
                flexDirection:'column',
                fontFamily:'monospace'
            }}>
                <div style={{
                    flex:1,
                    display:'flex',
                    flexDirection:"column",
                    alignItems:'center',
                    gap:'20px',
                    height:'92%'
                }}>
                    <Avatar style={{
                        width:200,
                        height:200,
                        cursor:'pointer',
                        backgroundColor:'#EEBC1D',
                        objectFit:'contain'
                    }}
                    src={user.photoURL}
                    alt={user.displayName ||user.email}
                    >
                        
         
                    </Avatar>
                    <span style={{
                        width:'100%',
                        fontSize:25,
                        textAlign:'center',
                        fontWeight:'bolder',
                        wordWrap:'break-word'
                    }}> 
                        {user.displayName || user.email}
                    </span>
                </div>
                <Button
                variant='contained'
                style={{
                  height:'8%',
                  width:'100%',
                  backgroundColor:'#EEBC1D',
                  marginTop:20,
                }}
                onClick={logOut}
                >Log Out</Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}