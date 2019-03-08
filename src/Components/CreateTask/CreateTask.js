import React from 'react';
import axios from 'axios';
import moment from 'moment';
import classNames from 'classnames';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, AppBar, Toolbar, Slide, Grid, Button, IconButton, Typography, withStyles, Paper} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { dialogStyle } from '../Styles/materialStyles';




function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class createTask extends React.Component {
  state = {
    taskName: '', 
    editorName: '', 
    clientName: '', 
    requestTitle: '', 
    publishDate: undefined
  }

  componentDidMount() {
    this.setState({
      publishDate: this.getTodaysDate()
    })
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleDateChange = date => {
    const selectedDate = date.target.value
    console.log(selectedDate)
    this.setState({ publishDate: selectedDate });
  };

  handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/task', {
        taskName: this.state.taskName,
        editorName: this.state.editorName, 
        clientName: this.state.clientName, 
        requestTitle: this.state.requestTitle, 
        requestDate: this.getTodaysDate(), 
        publishDate: this.state.publishDate
      })
      .then((res) => {
        if (res.status === 201) {
          this.props.getTasks();
          this.props.handleDialogClose();
        }
      })
    } catch (err) {
        console.log(err);
    }
  }

  getTodaysDate = () => {
    const d = moment();
    return d.format('YYYY-MM-DD')
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
              <Grid item xs={10}>
                <Paper className={classes.Paper}>
                  <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
                  <DialogContent>
                    <DialogContentText className={classes.pSpacer}>
                      Complete the form below to add a new task.
                    </DialogContentText>   
                      <TextField
                        id="editorName"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Editor's Name"
                        value={this.state.editorName}
                        onChange={this.handleChange('editorName')}
                      />              
                      <TextField
                        id="taskName"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Task Name"
                        value={this.state.taskName}
                        onChange={this.handleChange('taskName')}
                      />
                      <TextField
                        id="clientName"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Requestor's Name"
                        value={this.state.clientName}
                        onChange={this.handleChange('clientName')}
                      />
                      <TextField
                        id="requestTitle"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Request Title"
                        value={this.state.requestTitle}
                        onChange={this.handleChange('requestTitle')}
                      />
                      <TextField
                        id="publishDate"
                        label="Publish Date"
                        type="date"
                        defaultValue={this.getTodaysDate()}
                        onChange={this.handleDateChange}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
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