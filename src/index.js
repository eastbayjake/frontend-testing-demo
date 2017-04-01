var el = React.createElement;
var inputs = [
	{name: 'firstName', label: 'First Name', type: 'text'},
	{name: 'lastName', label: 'Last Name', type: 'text'},
	{name: 'age', label: 'Age', type: 'number'}
];
var clickHandler = function(){
	ReactDOM.render(el(Form), document.getElementById('app'));
};

var Input = React.createClass({
  render: function(){
    return el('label', {for: this.props.name}, 
    					el('span', null, this.props.label),
    					el('input', {type: this.props.type, name: this.props.name})
    				);
  }
});

var Whatever = React.createClass({
	render: function(){
		return el('div', null, 'TEST');
	}
});

var Form = React.createClass({
  render: function(){
    return el('form', null,
      inputs.map(function(data){
      	return el(Input, data);
      }),
      el('button', {onClick: clickHandler}, 'Submit')
    );
  }
});

ReactDOM.render(React.createElement(Form), document.getElementById('app'));