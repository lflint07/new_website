import React from 'react';


function Menu() {
    const menuClick = () => {
        console.log("Hi my name's Luke")
    }

    return (
        <header>
            <div className="menu-button" onClick={menuClick}>
                <div className="button-line"></div>
                <div className="button-line"></div>
                <div className="button-line"></div>
            </div>
            <nav className="menu">
                <div className="menu-branding">
                    <div className="portrait"></div>
                </div>
                <ul className="menu-navigation">
                    <li className="nav-item current"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">About Me</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">My Work</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Reach Me</a></li>
                </ul>
            </nav>
        </header>  
    )
}

// //Select DOM items
// const menuButton = document.querySelector('.menu-button');
// const menu = document.querySelector('.menu');
// const menuNavigation = document.querySelector('.menu-navigation');
// const menuBranding = document.querySelector('.menu-branding');
// const navItems = document.querySelectorAll("nav-item");

// // Set Initial State of Menu
// let showMenu = false;

// // menuButton={addEventListener(onClick, toggleMenu)}

// function toggleMenu() {
//     if(!showMenu) {
//         menuButton.classList.add('close');
//         menu.classList.add('show');
//         menuNavigation.classList.add('show');
//         menuBranding.classList.add('show');
//         navItems.forEach(item => item.classList.add('show'));

//         showMenu = true;
//     } else {
//         menuButton.classList.remove('close');
//         menu.classList.remove('show');
//         menuNavigation.classList.remove('show');
//         menuBranding.classList.remove('show');
//         navItems.forEach(item => item.classList.remove('show'));

//         showMenu= false;
//     }
//}


export default Menu