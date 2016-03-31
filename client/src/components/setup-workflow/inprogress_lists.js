import React from 'react';
import { DropTarget } from 'react-dnd';
import InprogressListsItem from './inprogress_list_item';

const listTarget = {
  drop(props, monitor, component) {
    const list = monitor.getItem();
    props.onMoveList({
      list: list.list,
      destination: 'inprogressLists'
    });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const InprogressLists = (props) => {
  const listItems = props.lists.map((list) => {
    return (
      <InprogressListsItem key={list.id} list={list}/>
    );
  });

  const { isOver, canDrop, connectDropTarget } = props;
  return connectDropTarget(
      <ul className="col-md-2 list-group column-small">
        <li className="column-title">In progress lists</li>
        { listItems }
      </ul>
  );
}

export default DropTarget('list', listTarget, collect)(InprogressLists);