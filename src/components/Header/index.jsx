import { AppBar, Box, Typography } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Header = () => {
    return (
        <AppBar position="static" sx={{
            padding: 2,
            marginBottom: 2
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <AccountBalanceIcon sx={{ fontSize: '50px' }} />
                <Typography variant="p" component="h1">
                    Banco
                </Typography>
            </Box>
        </AppBar>
    )
}

export { Header }