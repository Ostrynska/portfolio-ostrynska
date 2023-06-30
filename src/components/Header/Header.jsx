import { useState } from 'react';

import { fallDown as Menu } from 'react-burger-menu';

import { navElements } from '../../contentOption';
import {
 HeaderStyled,
 MenuLink,
 BurgerMenuStyles,
 BurgerMenuContainer,
 MenuList,
 MenuItem,
 Open,
 Close,
} from './Header.styled';

const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 const handleStateChange = state => {
  setMenuOpen(state.isOpen);
 };

 const closeMenu = () => {
  setMenuOpen(false);
 };
 return (
  <>
   <HeaderStyled>
    <div>
     {/* <Themetoggle /> */}
     <BurgerMenuContainer>
      <Menu
       customBurgerIcon={<Open />}
       customCrossIcon={<Close />}
       right
       isOpen={menuOpen}
       onStateChange={state => handleStateChange(state)}
       styles={BurgerMenuStyles}
      >
       <MenuList>
        {navElements.map(({ to, name }) => (
         <MenuItem key={to}>
          <MenuLink to={to} onClick={() => closeMenu()}>
           {name}
          </MenuLink>
         </MenuItem>
        ))}
       </MenuList>
      </Menu>
     </BurgerMenuContainer>
    </div>
   </HeaderStyled>
  </>
 );
};

export default Header;
