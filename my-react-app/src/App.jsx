import List from "./List";

function App() {

  const fruits = [  {id: 6, name: "Mango", calories: 121},
                    {id: 7, name: "Apple", calories: 111}, 
                    {id: 8, name: "Strawberry", calories: 52}, 
                    {id: 9, name: "Banana", calories: 60},
                    {id: 10, name: "Coconut", calories: 55}];

  const vegetables = [{id: 6, name: "Carrots", calories: 121},
                      {id: 7, name: "Cabbage", calories: 111}, 
                      {id: 8, name: "Eggplant", calories: 52}, 
                      {id: 9, name: "Brocoli", calories: 60},
                      {id: 10, name: "Parsley", calories: 55}];

    return(
        <>
         {fruits.length > 0 && <List items={fruits} category="Fruits" />} 
         {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
        </>
    );
}

export default App     
