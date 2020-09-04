import React from 'react';
import CatagoryDetail from '../CatagoryDetail/CatagoryDetail';

const Catagory = (props) => {
    const {count} = props;
    return (
        <div>
            <h3>This is catagory</h3>
            <CatagoryDetail count = {count}></CatagoryDetail>
        </div>
    );
};

export default Catagory;