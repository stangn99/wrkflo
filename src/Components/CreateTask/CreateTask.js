import React from 'react';

import 
  { Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText, 
    TextField, 
    AppBar, 
    Toolbar, 
    Slide,
    Grid,
    IconButton,
    Typography,
    withStyles,
    Paper} from '@material-ui/core';


import CloseIcon from '@material-ui/icons/Close';

const dialogStyle = (theme) => ({
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
  }
})

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class createTask extends React.Component {
  state = {
    task: {
      taskID: '',
      editorName: ''
    }
  }

  handleChange = (name) => ({target: {value}}) => {
    this.setState({
      task: {
        ...this.state.task,        
        [name]: value
      }
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.dialogState}
          onClose={this.props.handleDialogClose}
          TransitionComponent={Transition}
          className={classes.flexGrow}
        >
          <AppBar className={classes.AppBar}>
              <Toolbar>
                  <IconButton color="inherit" onClick={this.props.handleDialogClose} aria-label="Close">
                    <CloseIcon />
                  </IconButton>
                  <Typography color="inherit">
                    Add New Task
                  </Typography>
              </Toolbar>
          </AppBar>

          <Grid container justify="center">
              <Grid item xs={8}>
                <Paper className={classes.Paper}>
                  <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Complete the form below to add a new task.
                    </DialogContentText>
                    <TextField
                      required
                      id="standard-required"
                      label="Editor Name"
                      className={classes.textField}
                      value={this.state.task.editor}
                      onChange={this.handleChange('editorName')}
                      margin="normal"
                    />  
                  </DialogContent>
                </Paper>
              </Grid>
          </Grid>
        </Dialog>
      </div>
    );
  }
}


export default withStyles(dialogStyle)(createTask);