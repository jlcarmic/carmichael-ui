// Colors
/* eslint-disable no-unused-vars */
const aegean = '#34708E'
const aqua = '#63D2E2'
const blush = '#F1DEDE'
const brick = '#CF8C6A'
const canary = '#FCF8E4'
const cantaloupe = '#FFE2CE'
const cerulean = '#6AAECF'
const chalk = '#F3FCF7'
const cloud = '#DDDDDD'
const coin = '#999999'
const cotton = '#F9F9F9'
const crimson = '#A74544'
const cyan = '#377B9C'
const dijon = '#896C3F'
const fossil = '#888888'
const graphite = '#666666'
const ink = '#252D30'
const kelly = '#3E753F'
const lilac = '#A19FD6'
const peach = '#F2C8AE'
const pistachio = '#DFF0D9'
const sage = '#B3D0AC'
const sand = '#ECD178'
const silver = '#CCCCCC'
const sky = '#DAEDF6'
const storm = '#97A3A3'
const tiger = '#F97624'
const white = '#FFFFFF'
/* eslint-enable no-unused-vars */

export default {
  arrow: {
    color: storm,
  },
  divider: {
    line: {
      margin: {
        desktop: '15px auto',
        mobile: '12px auto',
      },
      width: '50%',
    },
    margin: '0 auto 10px',
    maxWidth: '1000px',
    text: {
      fontSize: {
        mobile: '18px',
      },
      fontWeight: '600',
      margin: '0 20px',
    },
  },
  flashMessage: {
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    fontSize: '14px',
    fontWeight: '600',
    marginTop: '-8px',
    marginRight: '-8px',
    marginBottom: '0',
    marginLeft: '-8px',
    padding: '8px',
    textAlign: 'center',
    error: {
      backgroundColor: blush,
      borderColor: crimson,
      color: crimson,
    },
    info: {
      backgroundColor: sky,
      borderColor: aegean,
      color: aegean,
    },
    success: {
      backgroundColor: pistachio,
      borderColor: kelly,
      color: kelly,
    },
    warning: {
      backgroundColor: canary,
      borderColor: dijon,
      color: dijon,
    },
  },
  forms: {
    form: {
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '0 auto 30px',
      maxWidth: '400px',
      title: {
        fontSize: '22px',
        fontWeight: '600',
        margin: '16px auto 28px',
      },
    },
    formField: {
      leftAlignedFormField: {
        margin: '0 auto 20px',
      },
      centeredFormField: {
        margin: '0 auto 20px',
      },
      labelText: {
        fontSize: '11px',
        color: cerulean,
        marginRight: '10px',
        top: '-16px',
      },
    },
    formInput: {
      input: {
        border: 'solid 1px #666666',
        borderRadius: '3px',
        focus: {
          outlineColor: cerulean,
        },
        fontSize: '16px',
        padding: '5px 8px',
        placeholder: {
          color: silver,
        },
        width: '100%',
      },
      radioGroup: {
        fontSize: '16px',
        padding: '5px 8px',
        width: '100%',
        textAlign: 'center',
      },
      radioInput: {
        margin: '0 15px 0 8px',
      },
      submitButton: {
        active: {
          backgroundColor: white,
          color: cerulean,
          outlineColor: 'transparent',
          outlineStyle: 'none',
        },
        backgroundColor: cerulean,
        borderColor: cerulean,
        borderStyle: 'solid',
        borderRadius: '8px',
        borderWidth: '1px',
        color: white,
        fontSize: '18px',
        fontWeight: '600',
        margin: '10px auto',
        outlineColor: 'transparent',
        outlineStyle: 'none',
        padding: '4px 16px',
      },
      textArea: {
        borderColor: graphite,
        borderRadius: '3px',
        borderStyle: 'solid',
        borderWidth: '1px',
        focus: {
          outlineColor: cerulean,
        },
        fontSize: '16px',
        height: '80px',
        overflow: 'auto',
        padding: '5px 8px',
        placeholder: {
          color: silver,
        },
        resize: 'none',
        width: '100%',
      },
    },
    formLink: {
      divider: {
        color: coin,
        fontSize: '16px',
        margin: '0 10px',
      },
      link: {
        color: cerulean,
        fontSize: '16px',
        textDecoration: 'none',
      },
      margin: '-2px auto 8px',
    },
  },
  hamburger: {
    close: {
      right: '10px',
      top: '10px',
    },
    iconBar: {
      backgroundColor: coin,
      height: '3px',
      marginBottom: '4px',
      width: '20px',
    },
    left: '15px',
    links: {
      borderColor: white,
      borderStyle: 'solid',
      borderWidth: '1px 0 0 0',
      marginTop: '15px',
      paddingTop: '3px',
    },
    nonMenu: {
      height: '100vh',
      opacity: '0',
      top: '-25px',
      width: '100vw',
    },
    overlay: {
      backgroundColor: ink,
      color: white,
      height: '100vh',
      left: '-15px',
      top: '-25px',
      width: '200px',
    },
    top: '25px',
  },
  navItem: {
    anchor: {
      color: {
        desktop: cerulean,
        mobile: coin,
      },
      fontSize: {
        desktop: '16px',
        mobile: '16px',
      },
      marginTop: {
        desktop: '0',
        mobile: '15px',
      },
    },
    divider: {
      margin: '0 5px',
    },
    inactive: {
      color: {
        desktop: graphite,
        mobile: cyan,
      },
      fontSize: {
        desktop: '16px',
        mobile: '16px',
      },
      fontWeight: {
        desktop: '600',
        mobile: '600',
      },
      marginTop: {
        desktop: '15px',
        mobile: '15px',
      },
    },
    link: {
      color: {
        desktop: cerulean,
        mobile: coin,
      },
      fontSize: {
        desktop: '16px',
        mobile: '16px',
      },
      marginTop: {
        desktop: '0',
        mobile: '15px',
      },
    },
  },
  scrollable: {
    container: {
      height: {
        desktop: '20vh',
        mobile: '32vh',
      },
      margin: '6px 9px',
    },
    scrollToTop: {
      backgroundColor: white,
      bottom: '235px',
      color: aqua,
      fontSize: {
        desktop: '36px',
        mobile: '28px',
      },
      fontWeight: '600',
      right: {
        desktop: '10px',
        mobile: '5px',
      },
    },
  },
}
