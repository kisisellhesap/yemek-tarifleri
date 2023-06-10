import React from 'react'
import { useSearchParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import ProductCard from '../../components/productCard/ProductCard';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const url = "http://localhost:3000/tarifler?q=" + query;

  const { data, loading, error } = useFetch(url);


  return (
    <div className='row mt-3'>
      <h2>Aranan Kelime  "{query}"</h2>
      <hr />
      {loading && <div className='alert alert-warning'>Yükleniyor...</div>}
      {error && <div className='alert alert-danger'>{error}</div>}

      {data && data.map((tarif) => (
        <ProductCard key={tarif.id} tarif={tarif} />
      ))}

    </div>

  )
}

export default Search