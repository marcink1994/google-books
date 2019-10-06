import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormControl, Form, Button } from 'react-bootstrap';
import styles from './SearchInput.module.scss';

const SearchInput = ({ getBooks, history }) => {
    const [value, setValue] = React.useState('');
    return (
        <Fragment>
            <Form.Label>Search Book</Form.Label>
            <div className={styles.wrapper}>
                <FormControl
                    value={value}
                    placeholder="Search by title"
                    className={styles.searchInput}
                    onChange={event =>
                        setValue(event.target.value)
                    }
                />
                <Button
                    variant="info"
                    className={styles.button}
                    onClick={() => {
                        getBooks(0, value);
                        history.push('/');
                    }}
                >
                    Search
            </Button>
            </div>
        </Fragment>
    )
};

SearchInput.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
    getBooks: PropTypes.func.isRequired,
};

export default SearchInput;