import React from 'react';
import { useContext } from 'react';
import { CatagoryContext } from '../../App';

const CatagoryDetail = (props) => {

    const catagory = useContext(CatagoryContext);

    const {count} = props;
    return (
        <div>
            <h6>This is category detail {count}</h6>
            <h4>Selected catagory: {catagory}</h4>
        </div>
    );
};

export default CatagoryDetail;