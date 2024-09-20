import { useEffect, useRef, useState, MouseEvent, FC } from "react"
import "./UserCard.css"
import { Link } from "react-router-dom"
import PopUp from "../../ui/PopUp/PopUp"

type Card = {
  id: number,
  name: string,
  company: string,
  city: string,
}

export const UserCard: FC<Card> = ({ id, name, company, city }) => {
  const [active, setActive] = useState (false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [archive, setArchive] = useState(false)

  const handleClickOutside = (event: MouseEvent): void => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setActive(false);
      console.log("hello");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", () => handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", () => handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="user-card" ref={menuRef}>
        <img src="./user.png" alt="Фото пользователя" />
        <div className="user-card__info">
          <div className="user-card__info-wrapper">
            <p className="user-card__info-name user-card__info-descr">{name}</p>
            <p className="user-card__info-company user-card__info-descr">
              {company}
            </p>
          </div>
          <p className="user-card__info-city user-card__info-descr">{city}</p>
        </div>
        <button className="btn btn-reset" onClick={() => setActive(!active)}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_11_6806)">
              <path
                d="M10 18.5C10 19.6 10.9 20.5 12 20.5C13.1 20.5 14 19.6 14 18.5C14 17.4 13.1 16.5 12 16.5C10.9 16.5 10 17.4 10 18.5ZM10 6.5C10 7.6 10.9 8.5 12 8.5C13.1 8.5 14 7.6 14 6.5C14 5.4 13.1 4.5 12 4.5C10.9 4.5 10 5.4 10 6.5ZM10 12.5C10 13.6 10.9 14.5 12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5C10.9 10.5 10 11.4 10 12.5Z"

              />
            </g>
            <defs>
              <clipPath id="clip0_11_6806">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        {active && (
          <PopUp isActive={active}>
            <Link to={`/profile/${id}`} className="user-card__menu-item">
              Редактировать
            </Link>
            <button
              className="btn-reset user-card__menu-item"
              onClick={() => setArchive(!archive)}
            >
              Архивировать
            </button>
            <button className="btn-reset user-card__menu-item">Скрыть</button>
          </PopUp>
        )}
      </div>
    </>
  );
}
