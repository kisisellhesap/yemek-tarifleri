import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
function Create() {

  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [malzeme, setMalzeme] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [hazirlanisi, setHazirlanisi] = useState("");
  const [resim, setResim] = useState("");
  const [url, setUrl] = useState("");
  const malzemeInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data } = useFetch("http://localhost:3000/tarifler", "POST");
  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ baslik, aciklama, malzemeler, hazirlanisi, resim, url });
  }

  useEffect(() => {

    if (data) {
      navigate("/")
    }

  }, [data, navigate])

  const handleAddMalzeme = () => {
    const item = malzeme.trim();

    if (item && !malzemeler.includes(item)) {
      setMalzemeler(prevItems => [...prevItems, malzeme])
    }

    setMalzeme("");
    malzemeInput.current.focus();
    malzemeInput.current.value = "";
  }

  return (
    <div className="card mt-3 p-4">
      <div className='card-body'>
        <h2>Yeni Tarif Ekle</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='baslik' className='form-label'>Baslik</label>
          <input type='text' name='baslik' id='baslik' className='form-control' onChange={(e) => { setBaslik(e.target.value) }} />
        </div>
        <div className='mb-3'>
          <label htmlFor='aciklama' className='form-label'>Aciklama</label>
          <input type='text' name='aciklama' id='aciklama' className='form-control' onChange={(e) => { setAciklama(e.target.value) }} />
        </div>

        <div className='mb-3'>
          <label htmlFor='malzemeler' className='form-label'>malzemeler <ul>{malzemeler.map(item => <li key={item}>{item}</li>)}</ul></label>
          <div className='input-group'>
            <input type='text' ref={malzemeInput} name='malzemeler' id='malzemeler' className='form-control' onChange={(e) => { setMalzeme(e.target.value) }} />
            <button className='btn btn-secondary' type='button' onClick={handleAddMalzeme}>+</button>
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor='baslik' className='form-label'>Hazirlanisi</label>
          <textarea name='hazirlanisi' id='hazirlanisi' className='form-control' onChange={(e) => { setHazirlanisi(e.target.value) }}></textarea>
        </div>
        <div className='mb-3'>
          <label htmlFor='resim' className='form-label'>Resim</label>
          <input type='text' name='resim' id='resim' className='form-control' onChange={(e) => { setResim(e.target.value) }} />
        </div>
        <div className='mb-3'>
          <label htmlFor='url' className='form-label'>Url</label>
          <input type='text' name='url' id='url' className='form-control' onChange={(e) => { setUrl(e.target.value) }} />
        </div>
        <button type='submit' className='btn btn-primary'>Kaydet</button>

      </form>
    </div>
  )
}

export default Create