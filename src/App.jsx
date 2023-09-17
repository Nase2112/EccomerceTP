import { useState, useEffect } from 'react'
import './App.css'
import './Components/MostrarDatos.jsx'
import MostrarDatos from './Components/MostrarDatos.jsx';
import Search from './Components/Search'
import Pages from './Components/Pages'
function App() {

  const [products, setProducts] = useState([]);
  const [copiaProducts, setCopiaProducts] = useState([]);
  const [search,setSearch] = useState();
  const productsperPage = 3
  const [lastPositionArray,setLastPositionArray] = useState(productsperPage);
  const [positionArray,setPositionArray] = useState(0);


  const handleSubmit = (e) =>{
    e.preventDefault()
    setProducts(copiaProducts.filter((prod)=>prod.title.toLocaleLowerCase().includes(search)))
    
  }
  const handleChangeText = (e) =>{
      setSearch(e.target.value.toLocaleLowerCase())

  }

  const handleChangePositionArray = (valor) =>{
    setPositionArray(positionArray + valor)
    setLastPositionArray(lastPositionArray + valor);
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
      .then((prod) => setProducts(prod))
      .then(fetch('https://fakestoreapi.com/products')
          .then((res2) => res2.json())
          .then((copia) => setCopiaProducts(copia)))
  }, [])
  console.log(products);
  console.log(positionArray)
  console.log(lastPositionArray)
  
  return (
    <>
      <div className='containerFather'>

      <Search buscarValor={handleChangeText} handleSubmit={handleSubmit}/>
        <div className="containerProducts"> {/*poner css en App.css y hacer que */}
        
          {products.slice(positionArray,lastPositionArray).map((p) => (
          <MostrarDatos key={p.id} items={p} />
        ))}
        </div >


        <div>
        <Pages nroPaginas={Math.ceil(products.length / productsperPage)} changePage={handleChangePositionArray} productsperPage={productsperPage}/>
        </div>
        
      </div>

     
    </>
  )
}

export default App
