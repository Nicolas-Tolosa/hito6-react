import React from 'react'

const Navbar = () => {
    const token = false;
    return (
        <div className='navbar'>
            <div className='navbar_buttons'>
                <ul>
                    <li><a href="#">Pizeria Mamma Mía!</a></li>
                    <li><button>Home</button></li>
                    {token ? (
                        <>
                            <li><button>Login</button></li>
                        </>
                    ) : (
                        <>
                            <li><button>Register</button></li>
                        </>
                    )}
                </ul>
            </div>
            <div className='cart_button'>
                <ul>
                    <li><button>Total: $25.000</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar