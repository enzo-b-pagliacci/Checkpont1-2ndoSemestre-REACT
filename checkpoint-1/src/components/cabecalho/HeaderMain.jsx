import React, {useState} from 'react'
import logo from '../img/logoCP.PNG'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

export default function HeaderMain() {

   return (
      <>
         <div className="header__main" >
            <nav className="content__menu">
               <div className="menu" >
                  <div className="logoEToggler">
                     <div className="sectionToggler">
                         <button className="togglerMenu"><FontAwesomeIcon icon={faBars}  /></button> {/*Apenas visual */}
                     </div>
                     <div className="sectionLogo">
                        <img src={logo} alt="logo" className="logoCP"/>
                     </div>
                  </div>
                  <ul className="menu" >
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
               </div>
            </nav>
         </div>

      </>
   )
}