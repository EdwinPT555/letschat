import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Paper from '@mui/material/Paper';

export default function SubNav() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: 10 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="CHATS" icon={<ChatIcon />} />
          <BottomNavigationAction label="STATUS" icon={<DonutLargeIcon />} />
          <BottomNavigationAction label="CALLS" icon={<LocalPhoneIcon />} />
        </BottomNavigation>
      </Paper>

    </Box>
  );
}

