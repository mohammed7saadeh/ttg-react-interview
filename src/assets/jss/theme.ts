import { responsiveFontSizes } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'

import { grey } from '@material-ui/core/colors';

const primary = '#621D86';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato',
  },
  palette: {
    type: 'light',
    primary: {
      main: primary,
    },
    secondary: {
      main: '#1bafd5',
    },
    error: {
      light: '#ef5350',
      main: '#f44336',
      dark: '#e53935',
    },
    warning: {
      light: '#ffa726',
      main: '#ff9800',
      dark: '#fb8c00',
    },
    success: {
      light: '#66bb6a',
      main: '#4caf50',
      dark: '#43a047',
    },
    info: {
      light: '#26c6da',
      main: '#00acc1',
      dark: '#00acc1',
    },
    grey: {
      "200": "#F2F2F2",
      "500": "#C1C1C1",
    },
    action: {
      active: 'rgba(0, 0, 0, 0.10)',
      hover: '#f6f0ff',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.20)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
    text: {
      primary: grey[50],
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        '& button': {
          color: 'white',
        },
      },
    },
    MuiDialogTitle: {
      root: {
        color: "#fff",
        padding: "12px",
        background: primary,
        textTransform: "capitalize",
        marginBottom: "10px"
      }
    },
    MuiDialogContent: {
      root: {
        color: '#000'
      }
    },
    MuiIconButton: {
      root: {
        padding: 6
      }
    },
    MuiButton: {
      textPrimary: {
        color: primary,
      },
      outlinedPrimary: {
        color: primary,
      },
      contained: {
        height: "35px",
        '&.Mui-disabled': {
          opacity: 0.5,
        },
      },
      outlined: {
        height: "35px",
        border: "1.5px solid",
        borderColor: grey[500],
        color: "red"
      }
    },
    MuiInputLabel: {
      shrink: {
        color: grey[400],
      },
    },
    MuiFormLabel: {
      root: {
        color: grey[400],
      },
    },
    MuiFormControl: {
      marginDense: {
        marginTop: 4,
        marginBottom: 4,
      },
    },
    MuiInput: {
      root: {
        color: 'black'
      },
      underline: {
        '&:after': {
          borderBottom: `2px solid ${primary}`,
        },
        // '&$focused:after': {
        //   borderBottomColor: `#10678c`,
        // },
        // '&:hover:not($disabled):not($focused):not($error):after': {
        //   borderBottom: `2px solid #eee`,
        // },
        // '&$disabled:before': {
        //   borderBottom: `1px dotted #aaa`,
        // },
      },
    },
    MuiFilledInput: {
      root: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: grey[50],
        color: '#333333',
        '&:hover': {
          backgroundColor: `white !important`,
        },
        '&.Mui-focused': {
          backgroundColor: 'white',
          color: '#333333',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        color: 'black',
        height: "45px"
      },
      adornedEnd: {
        paddingRight: 4,
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 17,
        color: '#868686',
      },
    },
  },
});

theme.typography.caption = {
  fontSize: '0.8rem',
};

export default responsiveFontSizes(theme);
