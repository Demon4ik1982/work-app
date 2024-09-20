import { FC, FormEventHandler, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { User } from "../../models/User";
import Api from "../../api/api";
import "./UserProfile.css"
import { FormField } from "../../ui/FormField";
import { Button } from "../../ui/Button/Button";
import Loader from "../../ui/Loader/Loader";
import Modal from "../../components/modal/Modal";

type StatusType = 'success' | 'error';

export const UserProfile: FC = () => {
  	const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(true);
    const [moadalActive, setModalActive] = useState(false);
    const [status, setStatus] = useState<StatusType>('error');
    const { userId } = useParams();

    const [name, setName] = useState('')
    const [nicName, setNicName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')

    useEffect(() => {
      if(moadalActive) {
        const timeoutId = setTimeout(() => {
        setModalActive(false);
      }, 4000);

      return () => clearTimeout(timeoutId);
      }

      const getUserInfo = async (): Promise<void> => {
        const data = await Api.getUser(Number(userId));
        setUser(data);
        setIsLoading(false);
        setName(data.name)
        setNicName(data.username)
        setEmail(data.email)
        setCity(data.address.city)
        setPhone(data.phone)
        setCompany(data.company.name)
      };
      getUserInfo();
    }, [userId, moadalActive]);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      if (name.trim() !== '' && nicName.trim() !== '' && email.trim() !== '' && city.trim() !== '' && phone.trim() !== '' && company.trim() !== '') {
        setModalActive(true);
        setStatus('success')
      } else {
        setModalActive(true);
        setStatus('error');
      }
    };

    return (
      <>
        <div className="profile container">
          <Link to={"/"} className="profile__link">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.125 11H0.875"
                stroke="#595959"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 17.125L0.875 11L7 4.875"
                stroke="#595959"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Назад
          </Link>
          <div className="profile__wrapper">
            <div className="profile__menu">
              <img src="../../user-profile.png" alt="" />
              <div className="profile__menu-wrapper">
                <Link to={''} className="profile__menu-link active-link">Данные профиля</Link>
                <Link to={''} className="profile__menu-link">Рабочее пространство</Link>
                <Link to={''} className="profile__menu-link">Приватность</Link>
                <Link to={''} className="profile__menu-link">Безопасность</Link>
              </div>
            </div>
            <div className="profile__info">
              <h2>Данные профиля</h2>
              {user !== undefined ? (
                <form className="profile__form" onSubmit={handleSubmit}>
                  <FormField label="Имя">
                    <input className="form-field__input" type="text" value={name} onChange={(event) => {setName(event.target.value)}}/>
                  </FormField>
                  <FormField label="Никнейм">
                    <input className="form-field__input" type="text" value={nicName} onChange={(event) => {setNicName(event.target.value)}}/>
                  </FormField>
                  <FormField label="Почта">
                    <input className="form-field__input" type="text" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                  </FormField>
                  <FormField label="Город">
                    <input className="form-field__input" type="text" value={city} onChange={(event) => {setCity(event.target.value)}}/>
                  </FormField>
                  <FormField label="Телефон">
                    <input className="form-field__input" type="text" value={phone} onChange={(event) => {setPhone(event.target.value)}}/>
                  </FormField>
                  <FormField label="Название компании">
                    <input className="form-field__input" type="text" value={company} onChange={(event) => {setCompany(event.target.value)}}/>
                  </FormField>
                  <Button>Сохранить</Button>
                </form>
              ) : (
                <Loader isLoading={isLoading} />
              )}
            </div>
          </div>
        </div>
        <Modal active={moadalActive} setActive={setModalActive} status={status}/>
      </>
    );
}
