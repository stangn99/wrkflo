import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { Dialog, DialogTitle, DialogContent, DialogContentText, MenuItem, InputAdornment, TextField, AppBar, Toolbar, Slide, Grid, Button, IconButton, Typography, withStyles, Paper} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { dialogStyle } from '../Styles/materialStyles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class createTask extends React.Component {
  state = {
    taskName: '', 
    editorName: ''
  }

  componentDidMount() {
    console.log("create props:", this.props)
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/task', {
        taskName: this.state.taskName,
        editorName: this.state.editorName
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

  
  render() {
    const ranges = [
      {
        value: '0-20',
        label: '0 to 20',
      },
      {
        value: '21-50',
        label: '21 to 50',
      },
      {
        value: '51-100',
        label: '51 to 100',
      },
    ];
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
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      {/* <TextField
                        select
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="With Select"
                        value={this.state.weightRange}
                        onChange={this.handleChange('weightRange')}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}
                      >
                        {ranges.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        id="outlined-adornment-amount"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Amount"
                        value={this.state.amount}
                        onChange={this.handleChange('amount')}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                      />

                      <TextField
                        id="outlined-adornment-weight"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Weight"
                        value={this.state.weight}
                        onChange={this.handleChange('weight')}
                        helperText="Weight"
                        InputProps={{
                          endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                        }}
                      />

                      <TextField
                        id="outlined-adornment-password"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={this.state.showPassword ? 'text' : 'password'}
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                              >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      /> */}
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