import "./updatebar.css";
import { useState } from "react";

export default function Updatebar(handleClickToggle, togglebar) {
  

  return (
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
            <span className="updatebar__ListItem-Text">Основные данные</span>
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
  );
}
