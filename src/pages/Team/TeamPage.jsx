import { Paper, Typography } from '@mui/material'
import { Helmet } from 'react-helmet'

export default function TeamPage() {
    const TITLE = 'Meet The Team'
    return (
        <>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <Typography variant='h1'>
            Meet the Team
        </Typography>
        <hr />
        <Typography sx={{marginRight: 80}} variant='h4'>
            Ron Knott <img style={{height:100, display:'inline-flex'}} src="https://i.imgur.com/AVrKR3w.jpg" alt="team pic plz replace" />
        </Typography>
        <Paper elevation={3} sx={{margin: .75, background: 'grey'}}>
            Class: 50+ A <br />
            Bike: 2022.5 Husqvarna FC450 Rockstar Edition<br />
            Number: M649 <br />
            Bio: I was an avid desert racer when I was younger. I got back into racing in 2019 when my son and his friend began doing the NGPC events. 
            Since then I have attended as many as I could and have worked my way from the novice class up to the front line.
        </Paper>
        <Typography sx={{marginRight: 80}} variant='h4'>
            Ryan Knott
        </Typography>
        <Paper sx={{margin: .75, background: 'grey'}} elevation={3}>
            Classes: 450 B, 25+ B <br />
            Bike: 2022 Husqvarna FC350<br />
            Number: H124 <br />
            Bio: As a kid I was contantly training to race motocross. After a string of injuries, I took quite a long break from racing until well after high school.
            In 2019 I rediscivered my passion for racing dirt bikes and began contesting the NGPC series events. In the past few years I have developed signfiicantly
            as a rider. Riding dirt bikes is what brings me joy, and I can't wait to see what the future holds.
        </Paper>
        <Typography sx={{marginRight: 80}} variant='h4'>
            Phillip Hauser
        </Typography>
        <Paper sx={{margin: .75, background: 'grey'}} elevation={3}>
            Classes: 250 A, 2-Stroke A <br />
            Bike: 2022 Husqvarna TC250<br />
            Number: X182 <br />
            Bio: TBD
        </Paper>
        <Typography sx={{marginRight: 80}} variant='h4'>
            Trevor Dunn
        </Typography>
        <Paper elevation={3}>
            Classes: 30+ B, 25+ B <br />
            Bike: 2022 Kawasaki KX450<br />
            Number: V288 <br />
            Bio: TBD
        </Paper>
        </>
    )
}