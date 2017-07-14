let React = require('react');
let Nav = require('Nav');





// let Main = React.createClass({
//     render: function () {
//         return(
//             <div>
//                 <Nav/>
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         )
//     }
// });

let Main = (props) => {
    return(
        <div>
            <Nav/>
            <h2>Main Component</h2>
            {props.children}
        </div>
    )
};

module.exports = Main;