import React , {useState,useEffect} from 'react'
import {Button} from '../../globalStyles';
import {Nav, NavbarConatiner,NavLogo,NavIcon,MobileIcon,NavMenu,NavItem,NavLinks,NavItemBtn,NavBtnLink} from './Navbar.elements';
import {Conatiner} from '../../globalStyles';
import { FaTimes,FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';


const Navbar = () => {

    const [click,setClick] = useState(false);

    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{

            setButton(true)
        }
    }


useEffect(() => {

    showButton()
},[])

window.addEventListener('resize',showButton)

    return (

        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav>
            <NavbarConatiner>
                <NavLogo to ="/">
                    <NavIcon></NavIcon>ULTRA
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
                <NavMenu onClick={handleClick} click= {click}>
                    <NavItem>
                        <NavLinks to="/">
                            Home
                        </NavLinks>
                    </NavItem>
                

                
                    <NavItem>
                        <NavLinks to="/services">
                            Services
                        </NavLinks>
                    </NavItem>
              
               
                    <NavItem>
                        <NavLinks to="/products">
                            Products
                        </NavLinks>
                    </NavItem>

                    <NavItemBtn>
                        {button ? (

                            <NavBtnLink to="/sign-up">
                                <Button primary>SIGN UP</Button>
                            </NavBtnLink>

                        ) : (

                            <NavBtnLink to="/sign-up">
                                <Button  fontBig primary>SIGNUP</Button>
                            </NavBtnLink>

                        )}
                    </NavItemBtn>

                </NavMenu>


            </NavbarConatiner>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
