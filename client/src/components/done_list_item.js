import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

const ItemSource = {
  beginDrag(props) {
    return {
      list: props.list
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class DoneListsItem extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <li className="column-item">
          {this.props.list.name}
      </li>
    );
  }
}

DoneListsItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource('list', ItemSource, collect)(DoneListsItem);
