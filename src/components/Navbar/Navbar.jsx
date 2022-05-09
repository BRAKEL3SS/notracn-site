import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import * as userService from '../../utilities/users-service'

export default function Navbar({ user, setUser }) {
    function handleLogOut() {
        //Delegate to the user-service
        userService.logOut()
        //update state will also cause a re-render
        setUser(null)
    }
    const [isAdmin, setIsAdmin] = useState(true)

    function checkAdmin () {
        if (user.name == 'admin') {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    }

    useEffect(function() {
        checkAdmin()
    }, [])

    return (
        <nav>
            <span>Welcome </span>
            &nbsp; | &nbsp;
            <Link to="/team">Team Riders | </Link>
            &nbsp; | &nbsp;
            <Link to="/media">Social Media</Link>
            &nbsp; | &nbsp;
            <Link to="/contact-us">Contact Us</Link>
            &nbsp; | &nbsp;
            <Link to="/reports">Race Reports</Link>
            &nbsp; | &nbsp;
            { isAdmin ?
            <Link to="/add-user">Add user</Link>
            :
            <Link to="sign-in">Sign in</Link>
            }
            {/* <Link to="" onClick={handleLogOut}>Log Out</Link> */}
        </nav>
    )
}