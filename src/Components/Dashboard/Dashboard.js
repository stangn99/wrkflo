import React from 'react';
import axios from 'axios';
import PendingTasks from '../PendingTasks/PendingTasks';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
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
    data: []
  };

  async componentDidMount() {
    this.pullTasks();
  }

  pullTasks = async () => {
    try {      
      const res = await axios.get('/task')      
      const data = res.data.data;
      const tasks = data.map((task) => {        
        return {...task}
      })
      this.setState({
        data: tasks
      })
    } catch (e) {
      console.log(e)
    }
  }


  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

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
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
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
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {<List><ListItem /></List>}
          <Divider />
          {/* <List>{secondaryListItems}</List> */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h6" gutterBottom>
            Pending Tasks
          </Typography>
          <Typography component="div">
            <PendingTasks tasks={this.state.data} />
          </Typography>
          <div className={classes.spaceDivider}></div>
          <Typography variant="h6" gutterBottom>
            Completed Tasks
          </Typography>
            <CompletedTasks />
          <div className={classes.tableContainer}>
          </div>
        </main>
      </div>
    );
  }
}


export default withStyles(dashboardStyles)(Dashboard);