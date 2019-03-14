import React from 'react';
import { Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { toolbarStyles } from '../Styles/materialStyles';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

class EnhancedTableToolbar extends React.Component { 
  render() {
    const { numSelected, selectedId, classes } = this.props;
    
    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="h6" id="tableTitle">
              Tasks
            </Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete" onClick={ () => this.props.alertOpen(selectedId) }>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            ''
          )}
        </div>
      </Toolbar>
    );
  }
};

export default EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);