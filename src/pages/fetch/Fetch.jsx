//import axios from 'axios';
//import React, { useState , useEffect} from 'react';
import React from 'react';
import { useAxios } from '../../hooks/useAxios';
import Card from '../../components/card/Card';
import Search from '../../components/search/Search';

const Fetch = () => {

  const {data, isLoading, error, handleSubmit} = useAxios()

  const showCard = (personaje) => {
    return <Card {...personaje} />
  }

  return (
    <>
      <div>
        <h1>FETCH</h1>
        <Search handleSubmit={handleSubmit}/>
        { isLoading && <p> Cargando... </p>}
        { error && <p>{error}</p>}
        { data ? data.results.map(e => showCard(e)) : 'No se encontraron coincidencias a tu búsqueda' }
      </div>
    </>
  )


//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get('https://rickandmortyapi.com/api/character')
//     .then( res => {
//       console.log(res.data.results);
//       setData(res.data.results)
//     })
//     .catch(err => console.log(err))

//   }, [setData])
  

//   return (
//     <>
//       <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
//         {data.map(e => (
//           <div key={e.id} style={{width:'200px'}}>
//             <img
//               src={e.image}
//               alt={e.name}
//               style={{width:'150px'}}
//             />
//             <h2>{e.name}</h2>
//           </div>
//         ))}
//       </div> 
//     </>
//   )
}

export default Fetch