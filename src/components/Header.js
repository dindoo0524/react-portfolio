import React from 'react';
import NavList from './NavList';

const Header =() => {
    const navItem = [
        {title : '카테고리', link : '#'},
        {title : '온라인', link : '#'},
        {title : '오프라인', link : '#'},
        {title : '기업교육', link : '#'},
        {title : '이벤트', link : '#'},
        {title : '수강후기', link : '#'}
    ]
  return (
    <header>
        <div className="wrap">
            <a href="/fastcampus">
            </a>
        </div>
        <div className="wrap">
            <nav>
                <NavList menuList={navItem} className="nav-list"/>
            </nav>
        </div>
    </header>
  )
}

export default Header;