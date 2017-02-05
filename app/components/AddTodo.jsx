var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.props.onAddTodo(todoText);
      this.refs.todoText.value = '';
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="todoText" type="text" placeholder="What do you need to do?"></input>
          <button className="button">Add Todo</button>
        </form>
      </div>
    )

  }
})

module.exports = AddTodo;
