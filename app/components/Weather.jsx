let React = require('react');
let Form = require('Form');
let Message = require('Message');
let openWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');


let Weather = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location){
        let that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (e) {
                that.setState({
                    isLoading: false,
                    errorMessage: e.message
            });

        });
    },


    render: function () {

        let{isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            }else if (temp && location){
               return <Message location={location} temp={temp}/>;
            }
        }
        function renderError() {
            if( typeof errorMessage === 'string'){
               return(
                   <ErrorModal message={errorMessage}/>
               )
            }
        }

        return(
            <div>
                <h1 className="text-center">Get Weather </h1>
                <Form onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>

        )
    }
});



module.exports = Weather;