import React, { Component } from 'React';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

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

//Anything returned from this function will end up as props on the BookList container
function mapStateToProps(state) {
  // Whatever gets returned will show up as props inside of BookList (this.props above)
  return {
    // asdf: '123'
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//Promote Booklist from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);