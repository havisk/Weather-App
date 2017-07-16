let React = require('react');



let About = (props) => {
    return(
        <div>
            <h1 className="text-center">About</h1>
            <p className="text-center">Welcome to the about page!!
            <br/>
            This app gives you the temperature of the city when entered.
                <a href="https://facebook.github.io/react/">React.JS </a>
                 was used build the Web App.  The <a href="http://openweathermap.org/">Weather API </a>
                 used is from Open Weather Maps.  <a href="http://foundation.zurb.com/">Foundation </a> was used for styling
                purposes.
            </p>
        </div>


    )
};

module.exports = About;