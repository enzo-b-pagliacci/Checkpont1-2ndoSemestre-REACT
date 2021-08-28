import React from 'react'
import Author from '../img/author.png'
import Logo from '../img/logo.svg'
export default function Corpo() {

   return(
      <>
      <div className="row">
        <div>1</div> 
      </div>
      <div className="site_content">
        <main className="posts.col__list">
        <header className="post__header">
        <h1 className="post__title" >Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos</h1>

        <hr></hr>

        <p className="post__excerpt">A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavírus</p>                   
        <div>
          <img src={Author} alt="Rocha da CNN" />
        </div>
        <hr></hr>
        <p>24/08/2021 às 16:44 Atualizado às 16:56</p>
        </header>
        <div>
        <img src={Logo} alt="CNN" className="logoCNN" />
        </div>
        <p>Por ser uma doença nova, a Covid-19 ainda não foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.
        A variante Delta da Covid-19, originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.</p>
        </main>

      </div>
      


      </>
)
}