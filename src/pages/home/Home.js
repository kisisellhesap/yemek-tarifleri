import ProductCard from '../../components/productCard/ProductCard'
import useFetch from '../../hooks/useFetch';

function Home() {

    const urls = "http://localhost:3000/tarifler";
    const { data: tarifler, loading, error } = useFetch(urls);

    return (
        <div className='row mt-3'>
            {loading && <div className='alert alert-warning'>Yükleniyor...</div>}
            {error && <div className='alert alert-danger'>{error}</div>}
            {
                tarifler && tarifler.map(tarif => {
                    return <ProductCard key={tarif.id} tarif={tarif} />
                })
            }

        </div>
    )
}

export default Home