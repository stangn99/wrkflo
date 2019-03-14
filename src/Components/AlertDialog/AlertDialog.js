import React from 'react';
import { DialogContentText, DialogActions, DialogContent, DialogTitle }  from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

class AlertDialog extends React.Component {
  render() {
  console.log(this.props)
    return (
      <div>
        <Dialog
          open={this.props.alertOpen}
          onClose={this.handleDeleteAlertClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Item"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to permenantly delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeDeleteAlert} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.closeDeleteAlert} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;