import React from 'react';
import axios from 'axios';
import TaskDetailItem from '../TaskDetailItem/TaskDetailItem';
import { dashboardStyles } from '../Styles/materialStyles';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { List, Toolbar, AppBar, Drawer, CssBaseline, Typography, Badge, IconButton, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '../ListItems/ListItems';


class Dashboard extends React.Component {
  state = {
    open: true, 
    task: [],
  };

  componentWillMount() {
    this.getTasks();
  }


  getTasks = async () => {
    try {            
      const res = await axios.get(`/task/${this.props.match.params.taskId}`)      
      const data = res.data.data;      
      this.setState({
        task: data[0]
      })      

    } catch (e) {
      console.log(e)
    }
  }

  handleDrawerOpen = () => this.setState({ open: true });
  handleDrawerClose = () => this.setState({ open: false });

 
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>Dashboard</Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}> <ChevronLeftIcon /></IconButton>
          </div>
          <Divider />
          {<List>
            <ListItem getTasks={this.getTasks} /></List>
          }
          
        </Drawer>

        <TaskDetailItem taskItem={this.state.task} />
        


      </div>
    );
  }
}


export default withStyles(dashboardStyles)(Dashboard);