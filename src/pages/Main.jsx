import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from '../components/Modal'
import './main.scss'

const Main = () => {
  const [modalActive, setModalActive] = useState({
    active: false,
    modalInfo: {}
  })
  const [imgArr, setImgArr] = useState([])
  const [comment, setComment] = useState('')
  console.log(comment);

  const saveComment = async () => {
    //По ТЗ не понятно какое поле нужно передавать
    await axios
      .post(`https://boiling-refuge-66454.herokuapp.com/images/${modalActive.modalInfo.id}/comments`, {
        comment,
      }).then(res=>console.log(res))
        .catch(alert('По ТЗ не понятно какое поле нужно передавать'))
  }

  const getImg = async () => {
    await axios
      .get('https://boiling-refuge-66454.herokuapp.com/images')
      .then(res => setImgArr([...res.data]))
  }

  const getImgInfo = async (id) => {
    await axios
      .get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then(res => setModalActive({
        ...modalActive, 
        modalInfo: res.data,
        active: true,
      }))
  } 

  useEffect(() => {
    getImg()
  }, [])

  return (
    <div className='main'>
      {imgArr.map(res => {
        return <div
          className='main-container'
          key={res.id}
          onClick={() => getImgInfo(res.id)}
        >
          <div className='main-container-img'><img src={res.url} /></div>
          <div>id: {res.id}</div>
        </div>
      })}
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        setComment={setComment}
        saveComment={saveComment}
      />
    </div>
  )
}

export default Main
