import { lighten } from '@material-ui/core/styles/colorManipulator';

export const dialogStyle = (theme) => ({
  root: {
    flexGrow: 1
  },
  AppBar: {
    backgroundColor: '#165788'
  },
  Paper: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft:50,
    paddingRight: 50,
    marginTop: 100,
  },
  flex: {
    flex: 1
  }
})


export const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

// table for Pending tasks
export const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 400,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});