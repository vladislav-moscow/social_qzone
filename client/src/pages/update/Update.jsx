/* eslint-disable no-unused-vars */
import "./update.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Updatebar from "../../components/Updatebar/Updatebar";

export default function Update() {
  const [user, setUser] = useState({});
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [togglebar, setTogglebar] = useState(1);

  const handleClickToggle = (index) => {
    setTogglebar(index);
  };
  return (
    <>
      <Topbar />
      <div className="update">
        <Sidebar />
        <div className="update__Wrapper">
          <div className="update__Context">
            <div className="update__Context-Wrapper">
              <div className={
                  togglebar === 1
                    ? "update__Context-Bar update__Context-Active"
                    : "update__Context-Bar"
                }>
                <p>Основные данные</p>
              </div>
              <div className={
                  togglebar === 2
                    ? "update__Context-Bar update__Context-Active"
                    : "update__Context-Bar"
                }>
                <p>Контакты</p>
              </div>
              <div className={
                  togglebar === 3
                    ? "update__Context-Bar update__Context-Active"
                    : "update__Context-Bar"
                }>
                <p>Личные данные</p>
              </div>
              <div className={
                  togglebar === 4
                    ? "update__Context-Bar update__Context-Active"
                    : "update__Context-Bar"
                }>
                <p>Описание</p>
              </div>
              <div className={
                  togglebar === 5
                    ? "update__Context-Bar update__Context-Active"
                    : "update__Context-Bar"
                }>
                <p>Фотография</p>
              </div>
            </div>
          </div>
        </div>
        <div className="updatebar">
          <div className="updatebar__Wrapper">
            <ul className="updatebar__List">
              <li
                className={
                  togglebar === 1
                    ? "updatebar__ListItem updatebar-Active"
                    : "updatebar__ListItem"
                }
                onClick={() => handleClickToggle(1)}
              >
                <span className="updatebar__ListItem-Text">
                  Основные данные
                </span>
              </li>
              <li
                className={
                  togglebar === 2
                    ? "updatebar__ListItem updatebar-Active"
                    : "updatebar__ListItem"
                }
                onClick={() => handleClickToggle(2)}
              >
                <span className="updatebar__ListItem-Text">Контакты</span>
              </li>
              <li
                className={
                  togglebar === 3
                    ? "updatebar__ListItem updatebar-Active"
                    : "updatebar__ListItem"
                }
                onClick={() => handleClickToggle(3)}
              >
                <span className="updatebar__ListItem-Text">Личные данные</span>
              </li>
              <li
                className={
                  togglebar === 4
                    ? "updatebar__ListItem updatebar-Active"
                    : "updatebar__ListItem"
                }
                onClick={() => handleClickToggle(4)}
              >
                <span className="updatebar__ListItem-Text">Описание</span>
              </li>
              <li
                className={
                  togglebar === 5
                    ? "updatebar__ListItem updatebar-Active"
                    : "updatebar__ListItem"
                }
                onClick={() => handleClickToggle(5)}
              >
                <span className="updatebar__ListItem-Text">Фотография</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
