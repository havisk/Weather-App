let React = require('react');




// let Message = React.createClass({
//         render: function () {
//             let {temp, location} = this.props;
//
//             return(
//                 <p>It is {temp} in {location}</p>
//             )
//         }
// });

let Message = ({temp, location}) => {
    return(
        <p>It is {temp} in {location}.</p>
    )

};



module.exports = Message;