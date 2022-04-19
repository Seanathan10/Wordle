// import React from "react";
// import { Button } from "@material-ui/core";

// function KeyboardButton( Props ) {
//     return(
//         <div>
//             <Button variant='contained' sx={ { p: 5 } }>{ Props.Letter }</Button>
//         </div>
//     )
// }

// export default KeyboardButton

import { withStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/core';

const ButtonStyles = theme => ({
  buttonPadding: {    
    padding: '0px',
  },
  buttonMargin: {
      margin: '5px',
  }
});

function KeyboardButton( Props ) {
  const { classes } = Props;

  return (
    <div>
      <ThemeProvider theme={ Props.Theme }>
        <Button
          variant="contained"
          // color={ Props.Color }
          color="primary"
          className={ ( classes.buttonPadding, classes.buttonMargin ) }
        >
          { Props.Letter }
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default withStyles( ButtonStyles )( KeyboardButton );
// export default KeyboardButton;