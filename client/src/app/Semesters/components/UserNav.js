import React from "react";

const UserNav = (props) => {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
      
        <a href="!#" onClick={(event) => event.preventDefault()}>
          {props.sumname}
        </a>
      </li>
    </ol>
  );
};

export default UserNav;
