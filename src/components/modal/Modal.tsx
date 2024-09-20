import React from "react";
import './Modal.css'

type IModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  status: 'success' | 'error'
}

const Modal = ({ active, setActive, status}: IModalProps) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="modal-btn" onClick={() => setActive(false)}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z" />
          </svg>
        </div>
        {status === 'success' ?
        <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1087 1.19075C24.9151 -0.0170324 36.085 -0.0170324 46.8914 1.19075C50.9487 1.6442 54.5103 3.83827 56.7633 7.02464L28.7501 35.0378L20.1063 26.394C19.0812 25.3688 17.4191 25.3688 16.394 26.394C15.3688 27.4191 15.3688 29.0811 16.394 30.1063L26.894 40.6063C27.9191 41.6314 29.5812 41.6314 30.6063 40.6063L59.0103 12.2023C59.089 12.5857 59.1517 12.9751 59.1979 13.3698C60.4902 24.419 60.4902 35.5812 59.1979 46.6304C58.4459 53.0598 53.2838 58.095 46.8914 58.8095C36.085 60.0173 24.9151 60.0173 14.1087 58.8095C7.71635 58.095 2.55421 53.0598 1.80224 46.6304C0.509931 35.5812 0.509931 24.419 1.80224 13.3698C2.55421 6.94043 7.71636 1.90518 14.1087 1.19075Z" fill="#C6F4C6"/>
        </svg> : <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.1,30L4.6,53.5c-0.6-0.7-1-1.5-1.5-2.3C2.6,50.1,2.2,49,2,47.8c-0.1-0.4-0.1-0.8-0.2-1.2 c-1.3-11-1.3-22.2,0-33.3c0-0.4,0.1-0.8,0.2-1.2C2.4,10.3,3.2,8.5,4.2,7v0c0,0,0,0,0-0.1c0.1-0.1,0.2-0.3,0.3-0.4L28.1,30z" fill="#ff4867"/>
          <path d="M30.5,27.6L7,4.1c0,0,0,0,0,0C7.2,4,7.3,3.9,7.4,3.8C7.7,3.6,8,3.4,8.3,3.2c0.1,0,0.1-0.1,0.2-0.1 c0.4-0.2,0.8-0.4,1.2-0.6c0.1,0,0.2-0.1,0.3-0.2C10.3,2.2,10.7,2,11,1.9c0.1-0.1,0.3-0.1,0.4-0.1c0.3-0.1,0.6-0.2,0.9-0.3 c0.1,0,0.3-0.1,0.4-0.1c0.5-0.1,0.9-0.2,1.4-0.2c2.7-0.3,5.4-0.5,8.2-0.7c4.1-0.2,8.2-0.3,12.3-0.2c2.7,0.1,5.5,0.2,8.2,0.4 c1.4,0.1,2.7,0.2,4.1,0.4c0.5,0,0.9,0.1,1.4,0.2c0.1,0,0.3,0.1,0.4,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.1,0,0.3,0.1,0.4,0.1 C50.3,2,50.7,2.2,51,2.3c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.2,0.8,0.4,1.2,0.6c0.1,0,0.1,0.1,0.2,0.1c0.3,0.2,0.6,0.4,0.9,0.6 c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0L30.5,27.6z" fill="#ff4867"/>
          <path d="M30.5,32.4L54,55.9c-0.8,0.6-1.6,1.2-2.6,1.6c-0.7,0.3-1.4,0.6-2.2,0.8c-0.8,0.2-1.5,0.4-2.3,0.5 c-1.4,0.2-2.7,0.3-4.1,0.4c-2.7,0.2-5.5,0.4-8.2,0.4c-4.1,0.1-8.2,0.1-12.3-0.2c-2.7-0.1-5.5-0.4-8.2-0.7c-1.6-0.2-3.1-0.6-4.5-1.3 c-0.7-0.3-1.4-0.7-2-1.2c-0.2-0.1-0.4-0.3-0.6-0.4L30.5,32.4z" fill="#ff4867"/>
          <path d="M59.2,46.6c-0.3,2.6-1.3,4.9-2.8,6.8L32.9,30L56.4,6.5c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0,0,0,0.1v0 c1.1,1.5,1.9,3.3,2.2,5.2c0.1,0.4,0.1,0.8,0.2,1.2C60.5,24.4,60.5,35.6,59.2,46.6z" fill="#ff4867"/>
        </svg> }
        {status === 'success' ? <p className="modal__descr">Изменения сохранены!</p> : <p className="modal__descr">Данные введены неверно!!!</p>}
      </div>
    </div>
  )
}

export default Modal;
