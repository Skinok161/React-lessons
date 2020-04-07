import React from 'react';

function Surname(props) {
    console.log(props);
    return (
        <h2>{props.surname}</h2>
    );
}

export default Surname;