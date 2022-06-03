import { Helmet } from 'react-helmet'
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard"

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


export default function TeamPage() {
    const TITLE = 'Meet The Team'
    const ronBio = [`Class: 50+ A
    `,<br />, 'Bike: 2022.5 Husqvarna FC450 Rockstar Edition', 
    <br />, 'Number: M649', 
    <br />, 'Bio: I was an avid desert racer when I was younger. I got back into racing in 2019 when my son and his friend began doing the NGPC events.Since then I have attended as many as I could and have worked my way from the novice class up to the front line.']
    const ryanBio=[`Classes: 450 B, 25+ B`, 
    <br />, 'Bike: 2022 Husqvarna FC350', 
    <br />, 'Number: H124', 
    <br />, "Bio: As a kid I was contantly training to race motocross. After a string of injuries, I took quite a long break from racing until well after high school.In 2019 I rediscivered my passion for racing dirt bikes and began contesting the NGPC series events. In the past few years I have developed signfiicantly as a rider. Riding dirt bikes is what brings me joy, and I can't wait to see what the future holds."]
    const phillipBio=[`Classes: 250 A, 2-Stroke A`, 
    <br />, 'Bike: 2022 Husqvarna TC250', 
    <br />,'Number: X182', 
    <br />, 'Bio: TBD' ]
    const trevorBio=[`Classes: 30+ B, 25+ B`, 
    <br />, 'Bike: 2022 Kawasaki KX450', 
    <br />, 'Number: V288', 
    <br />, 'Bio: TBD']
    return (
        <>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Meet The Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              We leave it all on the track
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image="https://i.imgur.com/dwnKZqa.jpg"
                name="Ron Knott"
                position={{ color: "info", label: "Team Principal" }}
                description={ronBio}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image="https://i.imgur.com/C8hW4sU.jpg"
                name="Ryan Knott"
                position={{ color: "info", label: "Athlete" }}
                description={ryanBio}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image="https://i.imgur.com/yAKCPkR.jpg"
                name="Phillip Hauser"
                position={{ color: "info", label: "Athlete" }}
                description={phillipBio}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image="https://i.imgur.com/3rAa5UT.jpg"
                name="Trevor Dunn"
                position={{ color: "info", label: "Athlete" }}
                description={trevorBio}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>

        </>
    )
}