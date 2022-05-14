import { Box, Divider, Typography } from '@mui/material'
import { Helmet } from 'react-helmet'

export default function AboutPage() {
    const TITLE = 'NotRacn'
    return (
        <>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <Box sx={{background: 'grey',
    height: '25vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    color: 'black'}}>
        <Typography variant='h4'>
            NotRacn
        </Typography>
        <Typography variant='h6'>Hell-bent on west coast GP domination</Typography>
        </Box>
        <Divider />
        <Box sx={{display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: '22vh'}}>
        <div style={{display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: '5vw' }}>
            <Typography variant='h4' >Why we do it</Typography>
            <div style={{marginLeft: 120, width: '2px', margin: '6px 0', background: 'black', height: 100}} ></div>
        </div>
            <Typography sx={{marginRight: '10vw'}}  variant='h6'>A passion to succeed, and a need for<br /> continual improvement until we reach out goals.</Typography>
        </Box>
        <hr></hr>
        <Box sx={{display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: '22vh'}}>
        <div style={{display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: '5vw' }}>
            <Typography variant='h4'>Who We Are</Typography>
            <div style={{marginLeft: 125, width: '2px', margin: '6px 0', background: 'black', height: 100}} ></div>
        </div>
            <Typography sx={{marginRight: '10vw'}}  variant='h6'>A group of riders helping each other <br />grow through healthy competition</Typography>
        </Box>
        </>
    )
}