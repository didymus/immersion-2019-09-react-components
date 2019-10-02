// TODO
class GroceryListItem extends React.Component {
// a `constructor` method is expected on all ES6 classes
// when React instantiates the component,
// it ill pass `props` to the contructor
constructor(props){
    // equivalent to ES5's React.Component.call(this, props)
    super(props);
}
// every class component must have a `render` method
// stateless functional components are pretty much just this method
render(){
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
return (
        <li>{this.props.item}</li>
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

ReactDOM.render(<GroceryList />, document.getElementById('app'));