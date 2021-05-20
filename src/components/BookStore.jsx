import { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Col, Row, Toast } from "react-bootstrap";
import { connect } from "react-redux";
import { getBooksAction } from "../actions";

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
  getBooks: (value) => dispatch(getBooksAction(value))
})

class BookStore extends Component {
  state = {
    bookSelected: null,
  };

  componentDidMount = async () => {
    this.props.getBooks(true)
  };

  changeBook = (book) => this.setState({ bookSelected: book });

  render() {
    return (
      <>
        {!this.props.books.error ?
          <Row>
            <Col md={4}>
              <BookList
                bookSelected={this.state.bookSelected}
                changeBook={this.changeBook}
                books={this.props.books.stock}
              />
            </Col>
            <Col md={8}>
              <BookDetail
                bookSelected={this.state.bookSelected}
              />
            </Col>
          </Row> :
          <Toast style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Toast.Header>
              <img src="http://placehold.it/20x20" className="rounded mr-2" alt="" />
              <strong className="mr-auto">ERRRORRRR</strong>
              <small>right now</small>
            </Toast.Header>
            <Toast.Body>We encountered an error fetching the books</Toast.Body>
          </Toast>
        }
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
