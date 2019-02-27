import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import CreateTask from '../CreateTask/CreateTask';
import { listStyles } from '../Styles/materialStyles';

class SimpleList extends React.Component {
  state = {
    open: false
  }

  handleDialogOpen = () => {
    this.setState({ open: true });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
  };

 
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.handleDialogOpen}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Create Task" />  
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Status Reports" />
          </ListItem>
        </List>
        <CreateTask handleDialogOpen={this.handleDialogOpen} handleDialogClose={this.handleDialogClose} dialogState={this.state.open} getTasks={this.props.getTasks} />
      </div>
      
    )
  }
}

export default withStyles(listStyles)(SimpleList);