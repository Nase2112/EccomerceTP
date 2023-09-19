import React, {useState} from 'react'
import '../css/Proveedoras.css'
import Select from 'react-select';

const proveedor = [
  {label: 'Proveedor1', value: 'Proveedor1'},
  {label: 'Proveedor2', value: 'Proveedor2'},
  {label: 'Proveedor3', value: 'Proveedor3'},
]

const DBProveedoras = ['electronics',"men's clothing","women's clothing", "jewelery"];

export const Proveedoras = ({handleChangeSelect, select}) => {

// const [ selectedProveedor, setSelectedProveedor ] = useState ();

 const handleSelectChange = ( { value } ) => {

  console.log(value)
  handleChangeSelect(value)
 }

  return (
    <div className = "Proveedoras-contenedor">
      <p><b>Selecciona un proveedor: </b>{select}</p>
      <Select value={select}
      // defaultValue = { { label: 'Selecciona una opción', value: 'empty' } }
      options = {DBProveedoras.map(sup => ({label: sup, value: sup,}))}
      onChange = {handleSelectChange}
      />
    </div>
  )
}

export default Proveedoras