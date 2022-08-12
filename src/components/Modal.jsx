import React from 'react'
import './modal.scss'

const Modal = ({modalActive, setModalActive, setComment, saveComment}) => {

  const clearStates = () => {
    
  }

  return (
    <div
      className={modalActive.active ? 'modal active' : 'modal'}
      onClick={() => setModalActive({
        ...modalActive,
        active: false,
        modalInfo: {} 
      })}
    >
      <div
        className='modal-container'
        onClick={e => e.stopPropagation()}
      >
        <div className='modal-img'><img src={modalActive.modalInfo.url} /></div>
        <div className='modal-comment'>
          <p className='modal-comment-text'>Comment</p>
          {modalActive.modalInfo?.comments?.map(res => {
            return <p key={res.id}>{res.text}</p>
          })}
          <textarea className='modal-textarea' onChange={(e) => setComment(e.target.value)} />
          <p className='modal-comment-prompt'>Write a few sentences about the photo.</p>
        </div>
        <button onClick={() => saveComment()}>Save</button>
      </div>
    </div>
  )
}

export default Modal