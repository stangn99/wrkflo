import React from 'react';
import { Link } from 'react-router-dom';
import AlertDialog from '../AlertDialog/AlertDialog';
import EnhancedTableToolbar from '../DataTable/EnhancedTableToolbar';
import EnhancedTableHead from '../DataTable/EnhancedTableHead';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableRow, TableCell, TablePagination, Paper, Checkbox }  from '@material-ui/core';
import { styles } from '../Styles/materialStyles';


function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}


class pendingData extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'taskName',
    selected: [],
    tasks: [],
    page: 0,
    rowsPerPage: 15,
    deleteAlert: false
  };

  handleDeleteAlertOpen = () => {
    this.setState({ deleteAlert: true });
  };

  handleDeleteAlertClose = () => {
    this.setState({ deleteAlert: false });
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: this.props.tasks.map(n => n._id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = (id) => {
    return this.state.selected.indexOf(id) !== -1;
  }

  render() {
    const { classes } = this.props;
    const {order, orderBy, selected, rowsPerPage, page } = this.state;
    const tasks = this.props.tasks
    return (
      <Paper className={classes.root}>  
        <AlertDialog alertOpen={this.state.deleteAlert} closeDeleteAlert={this.handleDeleteAlertClose} openDeleteAlert={this.handleDeleteAlertOpen} />
        <EnhancedTableToolbar numSelected={selected.length} selectedId={this.state.selected} alertOpen={this.handleDeleteAlertOpen} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={tasks.length}
            />
            <TableBody>
              {stableSort(tasks, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n._id);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n._id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} onClick={event => this.handleClick(event, n._id)}/>
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">                 
                        <Link to={`/task/${n._id}`}>{n.taskName}</Link>                     
                      </TableCell>
                      <TableCell align="left">{n.editorName}</TableCell>
                      <TableCell align="left">{n.clientName}</TableCell>
                      <TableCell align="left">{n.requestTitle}</TableCell>
                      <TableCell align="left">{n.requestDate}</TableCell>
                      <TableCell align="left">{n.publishDate}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tasks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(pendingData);