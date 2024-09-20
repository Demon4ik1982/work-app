import { FC, useEffect, useState } from "react";
import { Users } from "../../models/Users";
import Api from "../../api/api";
import { UserCard } from "../../components/UserCard/UserCard";
import Loader from "../../ui/Loader/Loader";
import "./UserList.css"

export const UserList: FC = () => {
  const [users, setUsers] = useState<Users>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserList = async (): Promise<void> => {
      const data = await Api.getUsers();
      setUsers(data);
      setIsLoading(false);
    };
    getUserList();
  }, []);


  return (
    <>
      <div className="user-list container">
        <h2 className="user-list__title">Активные</h2>
        {users !== undefined ? (
          <ul className="user-list__grid">
            {users.map(
              (user, id) =>
                id < 6 && (
                  <li key={id} className="user-list__grid-item">
                    <UserCard
                      id={user.id}
                      name={user.name}
                      company={user.company.name}
                      city={user.address.city}
                    />
                  </li>
                )
            )}
          </ul>
        ) : (
          <div className="user-list__loading-wrapper">
            <Loader isLoading={isLoading} />
          </div>
        )}
      </div>
    </>
  );

}
