import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box className="footer" sx={{background: 'red', height: '5vh'}}>
            <Typography variant='body1'>Created by: Brakeless Productions</Typography>
        </Box>
    )
}