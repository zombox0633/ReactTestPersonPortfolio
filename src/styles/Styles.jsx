import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
`
//NavBar
export const Navbar = styled.div`
    background: #333;
    height: 50px;
`
export const NavCon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`
export const Logo = styled(Link)`
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;

    li{
        margin: 0 1rem;

        a{
            color: #fff;
            text-decoration: none;
        }
    }
`

//Home
export const HomeLayout = styled.div`
    display: flex;
    justify-content: space-between;

    img{
        border-radius: 8px;
    }
    ul{
        list-style: none;
        li{
            font-size: 1.5rem;
        }
    }
`

//About
export const Content = styled.div`
    text-align: center;
    margin: 2rem 0;
    img{
        border-radius: 100%;
    }
    ul{
        list-style: none;
        
        li{
            margin: 1rem;
            font-size: 1.5rem;
        }
    }
`
export const SkillsCom = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    li{
        margin: 1rem;
        padding: 1rem;
        border-radius: 5px;
        background: #333;
        color: #fff;
        strong{
            color: #ffc14f;
        }
    }
`
//Footer
export const FooterCom = styled.footer`
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 1rem;
    background-color: #333;
    color: #fff;
    text-align: center;
`