import React from 'react';
import PropTypes from 'prop-types';

const ProductDispalyOption = ({ options, onChange }) => {
    const optionList = options.map((opt, index) => (
        <option value={opt} key={index}>
            {opt} per page
        </option>
    ));
    return <select onChange={onChange}>{optionList}</select>;
};

ProductDispalyOption.propTypes = {
    options: PropTypes.arrayOf(PropTypes.number).isRequired,
    onChange: PropTypes.func.isRequired
};

ProductDispalyOption.displayName = 'ProductDispalyOption';

export default ProductDispalyOption;
