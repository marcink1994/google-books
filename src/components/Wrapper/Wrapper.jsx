import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const Wrapper = ({ children }) => (
    <Container>
        { children }
    </Container>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
  
export default Wrapper;