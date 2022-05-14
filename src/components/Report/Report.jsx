import { Paper, Typography } from "@mui/material";


export default function Report({ report }) {
    return (
        <>
        <Paper elevation={3} sx={{margin: .75, background: 'grey'}}>
            <Typography variant='h4' sx={{}}> {report.user} </Typography>
            <Typography>{report.report}</Typography>

        </Paper>
        </>
    )
}