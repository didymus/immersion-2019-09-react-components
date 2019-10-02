// TODO
const GroceryList = (props) => {
const onListItemClick = (event) => {
    console.log('I got clicked');
};

return (
    <ul>
        <li onClick={onListItemClick}>{props.items[0]}</li>
        <li>{props.items[1]}</li>
        <li>{props.items[2]}</li>
    </ul>
);
};

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