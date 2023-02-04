import React from "react";

function Header(props) {
  const {countCartItems} = props;
  return (
    <header>
      <div>
        <a href="#/"> 
         Cart {''} 
         {countCartItems?(
            <button className="badge">{countCartItems}</button>
          ): ('')}
        </a>
      </div>
    </header>
  );
}

export default Header;
