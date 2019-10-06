import { connect } from 'react-redux';
import { apiGetBooks } from 'actions/books';
import Main from './Main';

export const mapStateToProps = ({ Books }) => ({
    books: Books.books,
    isFetching: Books.isFetching,
    currentPage: Books.currentPage,
    error: Books.error,
});

export const mapDispatchToProps = {
    getBooks: apiGetBooks,
};

export default
connect(mapStateToProps, mapDispatchToProps)(Main);