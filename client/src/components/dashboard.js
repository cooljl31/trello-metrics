import React, { Component } from 'react';
import BoardList from './boards_list';
import ListConfiguration from './lists_configuration';

class BoardSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      lists: [],
      selectedBoard: null
    };

    this.getBoards();
  }


  getBoards() {
    Trello.get('/members/me/boards').then((boards) => {
      this.setState({
        boards: boards,
        selectedBoard: boards[0]
      });

      this.getLists(boards[0]);
    });
  }


  getLists(board) {
    Trello.get(`/boards/${board.id}/lists`).then((lists) => {
      this.setState({
        lists: lists
      });
    });
  }


  render() {
    return (
      <div>
        <BoardList
          onBoardSelect={selectedBoard => this.setState({selectedBoard})}
          selectedBoard={ this.state.selectedBoard }
          onBoardClick={id => this.getLists({id})}
          boards={this.state.boards} />
        <ListConfiguration lists={this.state.lists}/>
      </div>
    );
  }
}

export default BoardSettings;
