import React from 'react'

export default function Header() {
  return (
    <section className="h-wrapper">
        <div className="flexCenter padding  h-container">
            <img src="logo.png" alt="logo" width={100} />
            <div className="h-menu">
                <a href="">Residencies</a>
                <a href="">Our Values</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button >Contact</button>
            </div>
        </div>
    </section>
  )
}
