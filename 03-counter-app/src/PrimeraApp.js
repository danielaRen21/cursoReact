import PropTypes from "prop-types";

// FC

//import { json } from "body-parser";

//import React, { Fragment } from "react";

const PrimeraApp = ({
    saludo,
    subtitulo }) => {



    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>

    );


}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'hola'
}

export default PrimeraApp;
