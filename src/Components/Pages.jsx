import { useState } from "react"
//import '../css/Pages.css'

const Pages = ({nroPaginas,changePage,productsperPage}) => {

   // const [cantPaginas, setCantPaginas] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    
    const handleChangePageSum = (valor) => {
        if (currentPage <= nroPaginas){
            setCurrentPage(currentPage+valor)
        }
    }
    const handleChangePageMinus = (valor) => {
        if(currentPage > 1){
            setCurrentPage(currentPage+valor)
        }
    }


   

return (
    <div className="containerButtons">
        <button onClick={() => {changePage(-productsperPage); handleChangePageMinus(-1) }}disabled={currentPage === 1 ? 'true' : ''}> Atras</button>
        <label>{currentPage} DE {nroPaginas}</label>
        <button onClick={() => {changePage(productsperPage); handleChangePageSum(1)}} disabled={currentPage >= nroPaginas ? 'disabled' : ''}>Adelante</button>
        
    </div>
    
)
}

export default Pages