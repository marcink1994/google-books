import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import styles from './Book.module.scss'

const Book = (
    { volumeInfo: {
        title,
        publishedDate,
        imageLinks,
        description,
        authors,
    } }) => (
        <Row className={styles.item} noGutters>
            <Col xs lg="2">
                {imageLinks ?
                    <img src={imageLinks.thumbnail} alt={title} />
                    :
                    <div className={styles.emptyImg} />
                }
            </Col>
            <Col>
                <div className={styles.title}> {title} </div>
                <div className={styles.description}> {description} </div>
            </Col>
            <Col xs lg="3">
                <div className={styles.authors}> Authors: </div>
                {authors && authors.map((author, key) =>
                    <div key={key}> {author} </div>
                )
                }
                <div className={styles.publishedDate}> Published date: {publishedDate} </div>
            </Col>
        </Row>
    );

Book.propTypes = {
    volumeInfo: PropTypes.shape({
        title: PropTypes.string,
        publishedDate: PropTypes.string,
        imageLinks: PropTypes.object,
        description: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default Book;