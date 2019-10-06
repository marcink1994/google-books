import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { MAX_BOOKS_RESULT } from 'constants/common';
import { isEmpty } from 'lodash';
import ReactPaginate from 'react-paginate';
import { Book } from './Book';
import { SearchInput } from './SearchInput';
import styles from './Main.module.scss'

class Main extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = props;
    this.idFromUrl = (parseInt(id, 10) - 1) || 0;
  }

  componentDidMount() {
    const { getBooks } = this.props;
    getBooks(this.idFromUrl);
  }

  changePage = ({ selected }) => {
    const { getBooks, history } = this.props;
    getBooks(selected);
    history.push(`/${selected + 1}`);
  }

  render() {
    const {
      books: { totalItems, items },
      isFetching,
      currentPage,
      getBooks,
      history,
    } = this.props;

    return (
      <Fragment>
        <SearchInput getBooks={getBooks} history={history} />
        {isFetching ?
          <div className={styles.loader} />
          :
          <Fragment>
            <div className={styles.table}>
              {
                !isEmpty(items) ?
                  items.map(({ volumeInfo }, index) =>
                    <Book volumeInfo={volumeInfo} key={index} />
                  )
                  :
                  <div> No result </div>

              }
            </div>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'breakMe'}
              forcePage={currentPage - 1}
              pageCount={totalItems / MAX_BOOKS_RESULT}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              onPageChange={this.changePage}
              containerClassName={styles.pagination}
              activeClassName={styles.active}
              disabledClassName={styles.disabledClassName}
            />
          </Fragment>
        }
      </Fragment>

    );
  }
}


Main.propTypes = {
  books: PropTypes.shape({
    totalItems: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getBooks: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  currentPage: PropTypes.number,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default Main;
