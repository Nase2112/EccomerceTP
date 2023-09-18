

const Search = ({buscarValor,handleSubmit}) =>{
    return(
        <>  
            <form onSubmit={handleSubmit}>
            <input className="search" type="search" placeholder="Busca tu producto..." onChange={buscarValor} />
            <input className='btn' type="submit"></input>
            </form>
           
        </>
    )
}

export default Search