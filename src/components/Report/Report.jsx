import { Paper, Typography } from "@mui/material";


export default function Report({ report }) {
    return (
        <>
        <Paper sx={{margin: 1}}>
            <Typography variant='h4' sx={{marginLeft: '1'}}> {report.user} </Typography>
            <Typography>{report.report}</Typography>

        </Paper>
        </>
    )
}