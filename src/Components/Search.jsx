

const Search = ({buscarValor,handleSubmit}) =>{
    return(
        <>  
            <form onSubmit={handleSubmit}>
            <input type="search" placeholder="busca algo" onChange={buscarValor} />
            <input type="submit"></input>
            </form>
           
        </>
    )
}

export default Search