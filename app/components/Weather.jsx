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
            errorMessage: undefined,
            location: undefined,
            temp: undefined
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
    componentDidMount: function () {
      let location = this.props.location.query.location;

      if (location && location.length > 0) {
          this.handleSearch(location);
          window.location.hash ='#/';
      }
    },
    componentWillReceiveProps (newProps){
        let location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash ='#/';
        }

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
                <h1 className="text-center page-title">Get Weather </h1>
                <Form onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>

        )
    }
});



module.exports = Weather;