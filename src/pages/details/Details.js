
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function Details() {

  const { id } = useParams();
  const urls = "http://localhost:3000/tarifler/" + id;

  const { data: tarif, loading, error } = useFetch(urls);


  return (


    <div className='row mt-3'>
      {loading && <div className='alert alert-warning'>Yükleniyor...</div>}
      {error && <div className='alert alert-danger'>{error}</div>}
      {
        tarif && (
          <>
            <div className='col-4'>
              <img src={`${tarif.resim}`} alt={tarif.baslik} className='img-fluid rounded' />
            </div>
            <div className='col-8'>
              <h5> {tarif.baslik}</h5>
              <p>{tarif.aciklama}</p>
              <ul>
                {
                  tarif.malzemeler.map((malzeme, index) => {
                    return <li key={index}>{malzeme}</li>
                  })
                }
              </ul>

            </div>
            <div className='col-12'>
              <p>{tarif.hazirlanisi}</p>
              <a href={tarif.url} className='btn btn-outline-primary'>Tarifi İncele</a>
            </div>


          </>

        )
      }
    </div>
  )
}

export default Details