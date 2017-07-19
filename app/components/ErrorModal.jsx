let React = require('react');
let ReactDom = require('react-dom');
let ReactDomServer = require('react-dom/server');
let ErrorModal = React.createClass({

    getDefaultProps: function () {
      return{
          title: 'Error'
      };
    },
    prop: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        let {title, message} = this.props;

        let modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="hollow button" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );

        let $modal = $(ReactDomServer.renderToString(modalMarkup));
        $(ReactDom.findDOMNode(this)).html($modal);


      let modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
    },
    render: function(){


        return (
            <div>

            </div>
        );

        return(
          <div id="error-modal" className="reveal tiny text-center" data-reveal="">
              <h4>{title}</h4>
              <p>{message}</p>
              <p>
                  <button className="hollow button" data-close="">
                      Okay
                  </button>
              </p>
          </div>
        );
    }

});

module.exports = ErrorModal;