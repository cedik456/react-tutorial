import PropTypes from "prop-types";

function List(props) {


    const category = props.category;
    const itemList = props.items;

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // Ascending Order
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // Descending Order

    // fruits.sort((a, b) => a.calories - b.calories); // Numerical Ascending order
    // fruits.sort((a, b) => b.calories - a.calories); // Numerical Descending order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // Filter low calories
    // const HighCalFruits = fruits.filter(fruit => fruit.calories >= 100); // Filter high calories


    const listItems = itemList.map(item => <li key={item.id}> 
                                                  {item.name} 
                                               <b> {item.calories} </b></li>);

    return(
        <>
             <h3 className="list-category">{category}</h3> 
             <ol className="list-item">{listItems}</ol> <br />
        </> 
        
    );

}

List.defaultProps = {
    category: "Category",
    items: [],
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number })),
}

export default List