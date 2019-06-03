import React from 'react';
import { Typography, Fab, Paper, Input, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { taskDetailItem } from '../Styles/materialStyles';
import EditIcon from '@material-ui/icons/Edit';

class TaskDetailItem extends React.Component {  
  state = {
    disabled: true
  }

  handleEnableEdits = () => {
    this.setState((prevState, props) => {
      console.log(this.state.disabled)
      return {
        disabled: !prevState
      }
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
         <Paper className={classes.paper}>  
          <div className={classes.appBarSpacer} />   
            <div>
              <Typography variant="h6" gutterBottom>    
                {this.props.taskItem.taskName}      
              </Typography>
            
              <TextField
                  id="editorName"
                  // className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Editor's Name"
                  value={this.props.taskItem.clientName || 'undefined'}
                  disabled={this.state.disabled}
                />             

                {this.props.taskItem._id}
            </div>          
            {
              /* 
                <div className={classes.spaceDivider}></div>
                <div className={classes.tableContainer}></div> 
              */
            }
  
          <Fab color="secondary" aria-label="Edit" className={classes.fab}>
            <EditIcon onClick={this.handleEnableEdits} />
          </Fab>
        </Paper>
      </main>
    )
  }  
}

export default withStyles(taskDetailItem)(TaskDetailItem);