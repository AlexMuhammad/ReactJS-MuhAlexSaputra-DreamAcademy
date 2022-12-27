import { AppBar, Box, Container, CssBaseline, FormControl, Grid, InputLabel, ListItem, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <Box sx={{ bgcolor: "red", height: "70px", display: "flex", alignItems: "center", p: 5 }}>
                <Grid spacing={2} container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Grid item>
                        <Typography variant='h6'>
                            My App
                        </Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", gap: 3 }}>
                        <Typography variant='span'>
                            Home
                        </Typography>
                        <Typography variant='span'>
                            Users
                        </Typography>
                    </Grid>
                </Grid>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                    >
                        <MenuItem>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}

export default Header