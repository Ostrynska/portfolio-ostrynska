import { useState } from "react";
import { Link } from "react-router-dom";

import { navElements } from "../../contentOption";
import { HeaderStyled, MenuWrapp, MenuBg, Button, Open, Close } from './Header.styled'

const Header = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
  return (
    <HeaderStyled>
          <div>
          {/* <Themetoggle /> */}
          <Button onClick={handleToggle}>
            {!isActive ? <Close /> : <Open />}
          </Button>
              <MenuWrapp className={!isActive ? 'active' : ''}>
                  {/* <MenuBg> */}
            {navElements.map(({ to, name }) => (
                <li key={to}>
                <Link
                    to={to} onClick={handleToggle}
                >
                    {name}
                </Link>
                </li>
            ))}
                      {/* </MenuBg> */}
           </MenuWrapp>
          </div>
    </HeaderStyled>
  );
};

export default Header;