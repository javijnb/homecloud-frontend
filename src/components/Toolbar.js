import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor: 'orange'}}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center'}}>
            Homecloud
          </Typography>
          <Button color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
