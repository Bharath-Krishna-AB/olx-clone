import React from 'react'
import './Navbar.css'
import OlxLogo from '../../Assets/OlxLogo'
import Search from '../../Assets/Search'
import Arrow from '../../Assets/Arrow'
import SellButtonPlus from '../../Assets/sellButtonPlus'
import SellButton from '../../Assets/sellButton'


function Navbar() {
    return (
        <header className='row '>
            <div className="Navbar">
                <div className="Navbar-innerDiv">
                <div className="olx-logo">
                    <OlxLogo></OlxLogo>
                </div>
                <div className="location-and-productSearchAndLanguage-section">
                    <div className="placeSearch">
                        <Search></Search>
                        <input type="text" />
                        <Arrow></Arrow>
                    </div>
                    <div className="productSearch">
                    <div className="input">
                        <input
                        type="text"
                        placeholder="Find car,mobile phone and more..."
                        />
                    </div>
                    <div className="searchAction">
                        <Search color="#ffffff"></Search>
                    </div>
                    </div>
                    <div className="language">
                    <span> ENGLISH </span>
                    <Arrow></Arrow>
                    </div>
                </div>
                <div className="LoginAndSell-section">
                    <div className="loginPage">
                        <button>
                        <span>Login</span>
                        </button>
                    </div>
                </div>

                <div className="sellMenu">
                    <SellButton></SellButton>
                    <div className="sellMenuContent">
                        <SellButtonPlus></SellButtonPlus>
                        <span>SELL</span>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
