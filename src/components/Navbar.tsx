import {useEffect, useState} from 'react'
import {useParams, NavLink, useLocation, Link} from 'react-router-dom'
 
function NavbarElemet(props: any){

    return(
        <NavLink className="navlink navbarElement" to={props.link}><div className={`${props.active? "activeElement" : ""}`}>{props.name}</div></NavLink>
    )
}

function Navbar(){
    
    const location = useLocation()
    const navbarOptions = [
        {
            name: "Start",
            link: "/",
            isActive: location.pathname === '/'? true : false
        },  
        {
            name: "Team",
            link: "team",
            isActive: location.pathname === "/team"? true : false
        },
        {
            name: "Therapien",
            link: "therapien",
            isActive: location.pathname === "/therapien"? true: false
        },
        {
            name: "Praxis",
            link: "/praxis",
            isActive: location.pathname === "/praxis"? true: false
        },
        {
            name: "Kontakt",
            link: "/kontakt"
        }
    ]

    const options = navbarOptions.map((e: any) => {
        return <NavbarElemet name={e.name} active={e.isActive} link={e.link} />
    })

    console.log(options)
 

    return (
        <div className='navbar'>
            {options}
        </div>
    )
}

export default Navbar