import React, { Component } from 'React';
//Whenever we forge a connection between a component and Redux, it turns the component into a container or smart component
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//bindActionCreators - takes return value from action creator and make sure it flows through all reducers

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
        key={book.title} 
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.asdf) // => 123
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}


function mapStateToProps(state) {
  //Takes application state as input
  // Whatever gets returned will show up as props inside of BookList (this.props above)
  return {
    // asdf: '123'
    books: state.books
  };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all our reducers
  //that's what bindActionCreators is doing here...
  return bindActionCreators({ selectBook: selectBook }, dispatch)
  //dispatch receives actions and feeds to reducers
}

//Promote Booklist from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);