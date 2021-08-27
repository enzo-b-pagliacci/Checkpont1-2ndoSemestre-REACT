import React, {useState} from 'react'
import logo from '../img/logoCP.PNG'
export default function HeaderMain() {


   const [toggle, mostrarEsconder] = useState('hide')

   return (
      <>
         <div className="header__main" >
            <nav className="content__menu">
               <ul className="menu" >
                  <img src={logo} alt="logo" className="logoCP"/>
                  <button></button>
                  <li><a href="#">Bussines</a></li>
                  <li><a href="#">internacional</a></li>
                  <li><a href="#">Saúde</a></li>
                  <li><a href="#">Tecnologia</a></li>
                  <li><a href="#">Esporte</a></li>
                  <li><a href="#">Entreterimento</a></li>
                  <li><a href="#">Estilo</a></li>
                  <li><a href="#">Viagem & Gastronomia</a></li>
                  <li><a href="#">Newstetters</a></li>
                  <li><a href="#">Podcasts</a></li>
               </ul>
            </nav>

         </div>

      </>
   )
}