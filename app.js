// TODO
// [X] Inside app.js, create a GroceryList component 
// that contains an unordered list of 2 grocery 
// items.Render this component to the div tag in 
// index.html with an id of app

// [X] To appreciate what ES6 and JSX offers when 
// writing React code, copy the snippets above into 
// the Babel REPL and see what they look like in ES5
const GroceryList = (props) => (
    <ul>
        <li>{props.items[0]}</li>
        <li>{props.items[1]}</li>
        <li>{props.items[2]}</li>
    </ul>
);

const App = () => (
    <div>
        <h2>Grocery List</h2>
        {/* Here we are creating an instance of GroceryList component
        */}
        <GroceryList items={['Cat food', 'Cat food', 'Cat food'
    ]}/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));