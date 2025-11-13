import React, {useState, useEffect, useRef} from 'react';
import { Fab, Tooltip, Box} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { motion, AnimatePresence } from 'framer-motion';
import useTheme from '../contexts/theme';




function FloatingButton() {



  const [open, setOpen] = useState(false);
  const fabRef = useRef(null);

  const handleToggle = () => setOpen(prev => !prev);
  const handleClickOutside = (event) => {
    if (fabRef.current && !fabRef.current.contains(event.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    
  }, []);


//theme changing logic
 const {themeMode, lightTheme, darkTheme} = useTheme()


  const buttons = [
    {
      name:themeMode === 'dark'? 'Switch to Light Mode' : 'Switch to Dark Mode',
      icon: themeMode === 'dark'? <LightModeIcon /> : <DarkModeIcon />,
      color: themeMode === 'dark'? 'secondary' : 'primary',
      onClick: () => {
        if(themeMode === 'dark') {
          lightTheme()
        } else {
          darkTheme();
        }
      },
    },
    {
      name: 'Chat Support',
      icon: <ContactSupportIcon />,
      color: 'error',
      onClick: () => console.log('Chat Support'),
    },
  ]


    
  
  return (

    <div ref={fabRef} style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 1000 }}>
      <AnimatePresence>
      {open && (
        <motion.div
          
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
        >
        <Box sx={{
          position: 'fixed',
          bottom: 80,
          right: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          zIndex: 1000,
        }}>
          {buttons.map((button, index) => (
            <Tooltip key={index} title={button.name} placement="left">
              <Fab
                key={index}
                variant='contained'
                size='small'
                color={button.color || 'primary'}
                onClick={button.onClick}
                aria-label={button.name}
                sx={{
                  animation: 'fadeIn 0.3s ease',
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                  },
                }}
              >
              {button.icon}

              </Fab>
            </Tooltip>
          ))}

        </Box>
        </motion.div>
      )}
      </AnimatePresence>

       {/* Main FAB  */}
      <Tooltip title="More Options" placement='left'>
        <Fab
          // variant='extended'
          color="success"
          aria-label="more"
          size='small'
          onClick={handleToggle}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1000,
            boxShadow: 10,
            animation: 'bounce 4s infinite',
            '&:hover': {
              bgcolor: 'success.dark',
          },
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-5px)',
            },
          },
        }}
      >
          <MoreVertIcon />
          
        </Fab>
      </Tooltip>
    </div>
  );
}

export default FloatingButton;
