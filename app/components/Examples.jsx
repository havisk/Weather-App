let React = require('react');
let {Link} = require('react-router');



let Examples = (props) => {
    return(
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to ='/?location=Marietta'>Marietta</Link>
                </li>
                <li>
                    <Link to='/?location=Bora Bora'>Bora Bora</Link>
                </li>
            </ol>
        </div>

    )
};



module.exports = Examples;