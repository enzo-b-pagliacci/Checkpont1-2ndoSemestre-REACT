import React from 'react'
import logo from '../img/logo.svg'
export default function HeaderMain() {

   return (
      <>
         <div className="header__main" >
            <nav className="content__menu">
               <ul className="menu" >
                  <img src={logo} alt="logo" />
                  <a href="#">Bussines</a>
                  <a href="#">internacional</a>
                  <a href="#">Saúde</a>
                  <a href="#">Tecnologia</a>
                  <a href="#">Esporte</a>
                  <a href="#">Entreterimento</a>
                  <a href="#">Estilo</a>
                  <a href="#">Viagem & Gastronomia</a>
                  <a href="#">Newstetters</a>
                  <a href="#">Podcasts</a>
                  {/* //TEst */}
               </ul>
            </nav>

         </div>

      </>
   )
}