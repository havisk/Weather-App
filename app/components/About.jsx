let React = require('react');



let About = (props) => {
    return(
        <div>
            <h1 className="text-center">About</h1>
            <p className="text-center">
                This is a weather app I built using <a href="https://facebook.github.io/react/" target="blank">React.JS </a>
                 The <a href="http://openweathermap.org/" target="blank">Weather API </a>
                 used is from Open Weather Maps.  <a href="http://foundation.zurb.com/" target="blank">Foundation </a> was used for styling
                purposes.
            </p>
        </div>


    )
};

module.exports = About;