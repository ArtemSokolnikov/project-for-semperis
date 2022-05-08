import React from 'react';
import style from '../../css_modules/header.module.css';

const Header = () => {
    return (   
        <div className="container-fluid p-2 ps-2 mt-5 border-bottom">
            <h3 className={style.header}>Health Alerts</h3>
        </div>

    )
}

export default Header