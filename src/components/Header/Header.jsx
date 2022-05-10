import { AppBar, Toolbar, Typography, Tabs, Tab, Button, ButtonGroup, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import Drawer from "./DrawerComp";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'

  
export default function Header({user, setUser}) {
    const [picked, setPicked] = useState(0)
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    function handleLogOut() {
        //Delegate to the user-service
        userService.logOut()
        //update state will also cause a re-render
        setUser('')
    }
    const [isAdmin, setIsAdmin] = useState()

    function checkAdmin () {
        if (user.name == 'admin') {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    }

    useEffect(function() {
        checkAdmin()
    }, [user])

    return(
        <>
            <AppBar sx={{background: 'red' }}>
                <Toolbar>

                {isMatch ? (
                <>
                <Typography>
                    Notracn
                </Typography>
                <Drawer user={user} />
                </>) : (     
                    <>
                <Typography>
                    Notracn
                </Typography>           
                <Tabs sx={{marginLeft: 'auto'}} textColor="inherit" value={picked} onChange={(e, value)=> setPicked(value)} indicatorColor='secondary'>
                    <Tab label="About Us" to='/' component={Link} />
                    <Tab label="Team Riders" to='/team' component={Link} />
                    <Tab label="Social Media" to='/media' component={Link} />
                    <Tab label="Race Reports" to='/reports' component={Link} />
                    <Tab label="Contact Us" to='/contact-us' component={Link} />
                { isAdmin ? 
                    <Tab label="Add Rider" to='/add-rider' component={Link} />
                    :
                    <></>
                    }
                    
                </Tabs>
                </>)
                }
                            <ButtonGroup sx={{marginLeft: 'auto '}}>
                { user ?
                            <Button onClick={handleLogOut} variant="contained" to='' component={Link}>Log Out</Button>
                            :
                            <Button variant="contained" to='/add-rider' component={Link}>Sign-In</Button>

                            }
                {/* <Button variant="contained">Login</Button>
                <Button variant="contained">Sign-up</Button> */}
                </ButtonGroup>
                </Toolbar>


            </AppBar>
        </>
    )
}