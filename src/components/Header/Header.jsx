import { useState } from "react";
import { Link } from "react-router-dom";

import { VscGrabber, VscClose } from "react-icons/vsc";
import { navElements } from "../../contentOption";
import { HeaderStyled, LogoText, MenuWrapp, MenuBg } from './Header.styled'

const Header = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
  return (
    <HeaderStyled>
      <div>
          <LogoText>Ostrynska</LogoText>
          </div>
          <div>
          {/* <Themetoggle /> */}
          <button onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
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