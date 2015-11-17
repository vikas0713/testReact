var React = require('react');
var OuterDiv =require('./OuterDiv.jsx');
var Header = require('./Header.jsx');

var ContactPage = React.createClass({
    
    render : function() {
        return (
            <div>
            <Header/>
            <div className="container">
                <div className="section">
                  <div className="row">
                    <div className="col s12 center">
                      <h3><i className="mdi-content-send brown-text"></i></h3>
                      <h4>Contact Us</h4>
                      <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
});

module.exports = ContactPage;