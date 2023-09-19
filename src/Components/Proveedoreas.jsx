import React, {useState} from 'react'
import '../css/Proveedoras.css'
import Select from 'react-select';

const proveedor = [
  {label: 'Proveedor1', value: 'Proveedor1'},
  {label: 'Proveedor2', value: 'Proveedor2'},
  {label: 'Proveedor3', value: 'Proveedor3'},
]

const DBProveedoras = ['electronics',"men's clothing","women's clothing", "jewelery"];

export const Proveedoras = ({asdsad, categoria}) => {

// const [ selectedProveedor, setSelectedProveedor ] = useState ();

 const handleSelectChange = ( { value } ) => {
  console.log(value);
  setSelectedProveedor(value);



 }

  return (
    <div className = "Proveedoras-contenedor">
      <p><b>Selecciona un proveedor: </b>{categoria}</p>
      <Select value = "algo"
      // defaultValue = { { label: 'Selecciona una opción', value: 'empty' } }
      options = {DBProveedoras.map(sup => ({label: sup, value: sup,}))}
      onChange = {(event)=>{asdsad(event.target.value)}}
      />
    </div>
  )
}

export default Proveedoras