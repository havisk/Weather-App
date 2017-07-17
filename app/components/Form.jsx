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
                        <input type="search" placeholder="Search Weather By City" ref="location"/>
                        <button className="hollow button expanded" href="#"> Get Weather </button>
                    </div>
                </form>
            </div>
        )

    }
});


module.exports = Form;