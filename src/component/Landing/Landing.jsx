import React from 'react'
import { useState } from 'react' 
import './landing.css'
import imageLanding1 from '/imageLanding1.png'
import imageLanding2 from '/imageLanding2.png'
import imageLanding3 from '/imageLanding3.png'

const Landing = () => {
    const images = [
        imageLanding1,
        imageLanding2,
        imageLanding3
    ]
    const [currentImage, setCurrentImage] = useState(images[0])

    const HandleNext = () => {
        const index = images.indexOf(currentImage)
        if(index < images.length - 1){
            setCurrentImage(images[index + 1])
        } else {
            setCurrentImage(images[0])
        }
    }

    const HandleBack = () => {
        const index = images.indexOf(currentImage)
        if(index > 0){
            setCurrentImage(images[index - 1])
        } else {
            setCurrentImage(images[images.length - 1])
        }
    }
    return (
    <div className='landing-container'>
            <div className='content'>
            <section className='text-container'>
            <h2 className='landing-title'>Bienvenido a PayPlus!</h2>
            <h3 className='landing-subtitle'>La forma más fácil de manejar tu dinero</h3>
            <p className='landing-text'>
                Descubre la comodidad de manejar tu dinero de manera rápida y segura con PayPlus. Diseñada para simplificar tu día a día, te permite enviar y recibir pagos al instante, hacer compras en línea y administrar tus finanzas desde cualquier lugar.<br></br>
            </p>
            </section>
            <img className='img-landing' src='imageLanding1.png'></img>
            </div>

            <div className='content'>
            <section className='text-container'>
            <h2 className='landing-subtitle'>Seguridad y comodidad</h2>
            <p className='landing-text'>
                Con tecnología avanzada, PayPlus prioriza tu seguridad, protegiendo tus transacciones y datos personales. Además, su interfaz intuitiva hace que usarla sea tan fácil como un par de clics.<br></br>
            </p>
            </section>
            <img className='img-landing' src='imageLanding2.png'></img>
            </div>

            <div className='content'>
            <section className='text-container'>
            <h2 className='landing-subtitle'>Control total de tus finanzas</h2>
            <p className='landing-text'>
                Empieza a disfrutar de una experiencia financiera sin complicaciones. ¡Con PayPlus, tienes el control total de tu dinero en la palma de tu mano!
            </p>
            </section>
            <img className='img-landing' src='imageLanding3.png'></img>
            </div>
    </div>
  )
}

export default Landing