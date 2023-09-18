import React, {useState} from 'react'
import '../css/Proveedoras.css'
import Select from 'react-select';

const proveedor = [
  {label: 'Proveedor1', value: 'Proveedor1'},
  {label: 'Proveedor2', value: 'Proveedor2'},
  {label: 'Proveedor3', value: 'Proveedor3'},
]

const DBProveedoras = ['Proveedor 1', 'Proveedor 2', 'Proveedor 3'];

export const Proveedoras = () => {

const [ selectedProveedor, setSelectedProveedor ] = useState ();

 const handleSelectChange = ( { value } ) => {
  console.log(value);
  setSelectedProveedor(value);
 }

  return (
    <div className = "Proveedoras-contenedor">
      <p><b>Selecciona un proveedor: </b>{selectedProveedor}</p>
      <Select
      // defaultValue = { { label: 'Selecciona una opción', value: 'empty' } }
      options = {DBProveedoras.map(sup => ({label: sup, value: sup,}))}
      onChange = {handleSelectChange}
      />
    </div>
  )
}

export default Proveedoras