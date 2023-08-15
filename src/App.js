import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './componentes/Navbar/Navbarcomp';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbarcomp/>
      <ItemListContainer greeting={"Bienvenido!!"}/>
    </div>
    
    
  );
}

export default App;
