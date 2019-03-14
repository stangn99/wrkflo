import React from 'react';

class TaskDetails extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        TEST: {this.props.match.params.taskId}
      </div>
    )
  }
}

export default TaskDetails;