let React = require('react');




let Form = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        let location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },


    render: function () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" placeholder="Enter City Name" ref="location"/>
                        <a href="#" class="button"> Get Weather </a>
                    </div>
                </form>
            </div>
        )

    }
});


module.exports = Form;