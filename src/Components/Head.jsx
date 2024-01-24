import { useState } from 'react'
import Logo from '../img/Logotipo.png'
import '../scss/head.scss'
import ItemNav from './ItemNav'

const Head = () => {

    const [active, setActive] = useState(true)

    const nav= [
        {
            id:1,
            name:'Inicio',
            active:active
        },
        {
            id:2,
            name:'Carrito',
            active:''
        },
      
    ]
  return (
    <>
        <div className="containerHead">
           <img src={Logo} alt="logotipo" className='logotipo' />
           <section className="NavHead">
           {nav.map((item)=>(
            <ItemNav
            key={item.id}
            name={item.name}
            active={item.active}
            setActive={setActive}
            />
           ))}
           </section>
        </div>
    </>
  )
}

export default Head