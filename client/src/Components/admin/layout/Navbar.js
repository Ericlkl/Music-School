import React from 'react'

const Navbar = () => {
    return (
    <div className="ui left fixed vertical menu">
        <div class="item">
            <img class="ui mini image" src="/images/logo.png" />
        </div>
        <div className="item">
            <div className="header">Products</div>
            <div className="menu">
            <a className="item">Enterprise</a>
            <a className="item">Consumer</a>
            </div>
        </div>
        <div className="item">
            <div className="header">CMS Solutions</div>
            <div className="menu">
            <a className="item">Rails</a>
            <a className="item">Python</a>
            <a className="item">PHP</a>
            </div>
        </div>
        <div className="item">
            <div className="header">Hosting</div>
            <div className="menu">
            <a className="item">Shared</a>
            <a className="item">Dedicated</a>
            </div>
        </div>
        <div className="item">
            <div className="header">Support</div>
            <div className="menu">
            <a className="item">E-mail Support</a>
            <a className="item">FAQs</a>
            </div>
        </div>
    </div>
    )
}

export default Navbar
