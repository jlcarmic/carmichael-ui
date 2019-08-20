// Colors
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


export default {
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
  scrollable: {
    desktop: {
      container: {
        height: '20vh',
      },
      scrollToTop: {
        fontSize: '36px',
        right: '10px',
      },
    },
    mobile: {
      container: {
        height: '32vh',
        margin: '6px 9px'
      },
      scrollToTop: {
        backgroundColor: white,
        bottom: '350px',
        color: aqua,
        fontSize: '28px',
        fontWeight: '600',
        right: '5px',
      },
    },
  },
}
