import React from 'react';
import loading from '../images/loading2.gif'


const Loader = () => {
    return(
        <div className="loader">
            <img src={loading} alt="loader"></img>
        </div>
    )
}

export default Loader;