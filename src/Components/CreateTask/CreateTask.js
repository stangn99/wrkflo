import React from 'react';
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, AppBar, Toolbar, Slide, Grid, Button, IconButton, Typography, withStyles, Paper} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { dialogStyle } from '../Styles/materialStyles';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class createTask extends React.Component {
  state = {
    task: {
      taskName: '',
      editorName: ''
    }
  }

  onEditorNameChange = (name) => ({target: {value}}) => {
    console.log(name);
    this.setState({
      task: {
        ...this.state.task,        
        [name]: value
      }
    })
  }

  onTaskNameChange = (name) => ({target: {value}}) => {
    console.log(name);
    this.setState({
      task: {
        ...this.state.task,
        [name]: value
      }
    })
  }

  handleCloseAndRefresh = () => {
    this.props.handleDialogClose();
    this.props.pullTasks();
  }

  handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/task', {
        taskName: this.state.task.taskName,
        editorName: this.state.task.editorName
      }, this.handleCloseAndRefresh())
      
      .catch((err) => {
        console.log(err);
      })
    } catch (err) {
        console.log(err);
    }
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
                  <Typography color="inherit" className={classes.flex}>
                    Add New Task
                  </Typography>
                  <Button color="inherit" 
                    onClick={this.handleSave}
                  >
                    save
                  </Button>
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
                      label="Editor's Name"
                      className={classes.textField}
                      value={this.state.task.editorName}
                      onChange={this.onEditorNameChange('editorName')}
                      margin="normal"
                    />  
                    <TextField
                      required
                      id="standard-required"
                      label="Task Name"
                      className={classes.textField}
                      value={this.state.task.taskName}
                      onChange={this.onTaskNameChange('taskName')}
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