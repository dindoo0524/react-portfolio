import React from 'react';

const NavItem = ({title, link}) => {
    return (
        <a href={link} className="nav-link">{title}</a>
    )
}

const NavList = ({menuList, className}) => {
    const listItem = menuList.map((item, index)=> <NavItem title={item.title} link={item.link} key={index}/>);
    return (
        <div className={className}>
            {listItem}
        </div>
    )
}

export default NavList;