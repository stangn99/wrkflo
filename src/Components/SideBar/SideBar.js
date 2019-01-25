import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Hidden, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, CssBaseline } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const styles = theme => ({
  root: {
		display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
			width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
			display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
		width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class SideBar extends Component {
	state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
	};
	
	render() {
		const { classes } = this.props;
		const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['New Task', 'New Project', 'Net New', 'Status'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
		);
		
		return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="headline" color="inherit" noWrap>
              WRKFLO
            </Typography>
          </Toolbar>
        </AppBar>


        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
						</Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
         </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
					<Typography variant="headline">Responsive Drawer</Typography>
          <Typography paragraph>
            This piece of text is being rended from the SideBar component [./components/SideBar/SideBar.js]. 
          </Typography>
        </main>
      </div>
    );
	}
}


export default withStyles(styles)(SideBar)