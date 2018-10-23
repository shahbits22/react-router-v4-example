import React from "react";
import { Link } from "react-router-dom";
import PlayerAPI from "../api";

const FullRoster = () => {
  return (
    <nav>
      <ul>
        {PlayerAPI.all().map(player => {
          return (
            <li key={player.number}>
              <Link to={`/roster/${player.number}`}>{player.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FullRoster;
