import React from 'react';
import { TableHead,  TableRow, TableCell, TableSortLabel, Tooltip, Checkbox } from '@material-ui/core';

const rows = [
  { id: 'taskName', numeric: false, disablePadding: true, label: 'Task Name' },
  { id: 'editorName', numeric: false, disablePadding: false, label: 'Editor\'s Name'  },
  { id: 'clientName', numeric: false, disablePadding: false, label: 'Client\'s Name'  },
  { id: 'requestTitle', numeric: false, disablePadding: false, label: 'Request Title'  },
  { id: 'requestDate', numeric: false, disablePadding: false, label: 'Request Date'  },
  { id: 'publishDate', numeric: false, disablePadding: false, label: 'Expected Live Date'  }
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
          )}
        </TableRow>
      </TableHead>
    );
  }
}

export default EnhancedTableHead;