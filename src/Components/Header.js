import React from "react";

import { makeStyles } from "@material-ui/core";

import { green } from "@material-ui/core/colors";

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { Settings } from "@material-ui/icons";

import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

const Styles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing( 2 )
    },
    title: {
      flexGrow: 1
    },
    customColor: {
      // or hex code, this is normal CSS background-color
      backgroundColor: green[ 500 ]
    },
    customHeight: {
      minHeight: 200
    },
    offset: theme.mixins.toolbar
}));


const HeaderTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto Condensed',
      textTransform: 'none',
      fontSize: 40,
    },
  },
});

function Header() {
    const Classes = Styles();

    return(
        <div className="HeaderClass">
            <AppBar color='transparent' elevation='10'>

                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={ () => alert( 'Menu' ) }
                    >
                        <MenuIcon/>
                    
                    </IconButton>

                    <ThemeProvider theme={ HeaderTheme }>
                      <Typography variant="h6" className={ Classes.title }>WORDLE</Typography>
                    </ThemeProvider>

                    {/* <Button color="primary" variant='contained'>SIGN IN</Button> */}

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="settings"
                        onClick={ () => alert( 'Settings' ) }
                    >
                        <Settings/>
                    
                    </IconButton>
                </Toolbar>
                
            </AppBar>

        </div>
    )
}

export default Header;