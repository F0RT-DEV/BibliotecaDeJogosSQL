import React from 'react'

const MostrarDev = () => {

  const containerStyle = {
         width: '100%',
         maxWidth: '400px',
         margin: '50px auto',
         padding: '20px',
         background: '#f4f4f4',
         borderRadius: '8px',
         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
         textAlign: 'center'
       };
    
       const listStyle = {
         listStyle: 'none',
         padding: 0
       };
    
       const itemStyle = {
         background: '#fff',
         padding: '10px',
         margin: '10px 0',
         borderRadius: '5px',
         boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
         fontSize: '16px'
       };
  return (
    <div style={containerStyle}>
      <h1>Lista de Desenvolvedores</h1>
      <ul style={listStyle}>         
        <li style={itemStyle}>Nome do Desenvolvedor</li>
      </ul>
    </div>
  )
}

export default MostrarDev