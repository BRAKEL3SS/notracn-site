import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

export default function DrawerComp({ user }) {
    const [openDrawer, setOpenDrawer] = useState(false)
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
        <Drawer open={openDrawer}
        onClose={()=>setOpenDrawer(false)}>
            <List>
                <ListItemButton onClick={()=>setOpenDrawer(false)} to='' component={Link}>
                    <ListItemIcon>
                        <ListItemText>
                            About Us
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <Divider />
                <ListItemButton onClick={()=>setOpenDrawer(false)} to='/team' component={Link}>
                    <ListItemIcon>
                        <ListItemText>
                            Team Riders
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <Divider />
                <ListItemButton onClick={()=>setOpenDrawer(false)} to='/media' component={Link}>
                    <ListItemIcon>
                        <ListItemText>
                            Social Media
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <Divider />
                <ListItemButton onClick={()=>setOpenDrawer(false)} to='/reports' component={Link}>
                    <ListItemIcon>
                        <ListItemText>
                            Race Reports
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <Divider />
                <ListItemButton onClick={()=>setOpenDrawer(false)} to='/contact-us' component={Link}>
                    <ListItemIcon>
                        <ListItemText>
                            Contact Us
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <Divider />
                { isAdmin ?
                <ListItemButton onClick={()=>setOpenDrawer(false)} to='/add-rider' component={Link}>
                    <ListItemIcon>
                        <ListItemText>
                            Add Rider
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                :
                <></>}
            </List>
        </Drawer>
        <IconButton sx={{color: 'white'}} onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
        </>
    )
}