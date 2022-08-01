// class GroceryList extends React.component {
//   constructor(item1, item2) {
//     this.items = [item1, item2]
//   render() {
//     return <div>{this.items}</div>;
//   }
//   }
// }
class ToDoGroceryItem extends React.Component {
//create the class
//attach properties and args
  constructor(props) {
    super(props);
    //set state to determine current state
    this.state = {
      done: false
    };
  }

   //set state to true
  onItemHover() {
    this.setState({
      done: !this.state.done
    });
  }


  render() {
//if state is true, make bold, otherwise, normal
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

//return each item with methods on it
    return (
      <li style={style} onMouseOver={this.onItemHover.bind(this)}>{this.props.items}</li>
    );


  }


}
//creating the actual list, for each item iterate through and set the given args for items
var GroceryList = (props) => (
<ul>
  <h2>My Grocery List</h2>
    {props.items.map(items =>
      <ToDoGroceryItem items={items} />
      )}
</ul>
);

//rendering the list with given arguments and append
ReactDOM.render(<GroceryList items = {['cheese', 'dog', 'cat', 'food']}/>, document.getElementById('app'));

