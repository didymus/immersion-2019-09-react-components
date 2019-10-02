// TODO
class GroceryListItem extends React.Component {
// a `constructor` method is expected on all ES6 classes
// when React instantiates the component,
// it ill pass `props` to the contructor
constructor(props){
    // equivalent to ES5's React.Component.call(this, props)
    super(props);
    // the `state` is just an object literal
    this.state = {
    bold: false,
    };
    // forcing out method to always be bound to our instance's `this`
    //this.GroceryListItem = this.GroceryListItem.bind(this);
}

// when list item is hover over item turns bold
onGroceryListItemMouseOver(){
    this.setState(
        {bold: !this.state.bold}
    );
}

// every class component must have a `render` method
// stateless functional components are pretty much just this method
render(){
    // making the style conditional on our `state` lets us
    // update it based on user interactions.
    const style = {
        fontWeight: this.state.bold ? '800' : '200'
    };
    // you can pass inline styles using React's `style` attribute to 
    // any component.
    // snake-cased css properties become camelCased in this object
return (
        <li
        style={style}
        onMouseOver={this.onGroceryListItemMouseOver.bind(this)}
        onMouseOut={this.onGroceryListItemMouseOver.bind(this)}
        >{this.props.item}</li>
        );
    }
}

// upate our `GroceryList` to use the new `GroceryListItem` component
// this can still be a stateless function component!

const GroceryList = (props) => (
    <ul>
        {props.items.map(item => <GroceryListItem item={item} />)}
    </ul>
);

ReactDOM.render(<GroceryList items={['Cat food', 'Cat food', 'Cat food']}/> , document.getElementById('app'));