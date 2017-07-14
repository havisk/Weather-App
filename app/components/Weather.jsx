let React = require('react');
let Form = require('Form');
let Message = require('Message');
let openWeatherMap = require('openWeatherMap');


let Weather = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false
        }
    },

    handleSearch: function (location, temp){
        let that = this;


        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                isLoading: false,
                location: location,
                temp: temp
            })
        }, function (errorMessage) {
                that.setState({isLoading: false});
                alert(errorMessage);
        });
    },


    render: function () {

        let{isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>;
            }else if (temp && location){
               return <Message location={location} temp={temp}/>;
            }
        }

        return(
            <div>
                <h3>Weather Component</h3>
                <Form onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>

        )
    }
});



module.exports = Weather;