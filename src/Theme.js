// Colors
const blush = '#F1DEDE'
const canary = '#FCF8E4'
const crimson = '#A74544'
const dijon = '#896C3F'
const kelly = '#3E753F'
const sage = '#DFF0D9'
const sky = '#DAEDF6'
const slate = '#34708E'

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
      borderColor: slate,
      color: slate,
    },
    success: {
      backgroundColor: sage,
      borderColor: kelly,
      color: kelly,
    },
    warning: {
      backgroundColor: canary,
      borderColor: dijon,
      color: dijon,
    },
  }
}
