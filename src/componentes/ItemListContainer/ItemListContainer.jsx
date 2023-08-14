import './ItemListContainer.css';


function ItemListContainer(props) {
    const greeting = 'Bienvenido';
  
    return (
      <div className="greeting">
        <h1>{greeting}!</h1>
      </div>
    );
  }
  
  export default ItemListContainer;