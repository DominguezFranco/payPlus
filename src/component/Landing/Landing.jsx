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
            <div className='text-container'>
            <h2 className='landing-title'>Bienvenido a PayPlus!</h2>
            <h3 className='landing-subtitle'>La forma más fácil de manejar tu dinero</h3>
            <p className='landing-text'>
                Descubre la comodidad de manejar tu dinero de manera rápida y segura con PayPlus. Diseñada para simplificar tu día a día, te permite enviar y recibir pagos al instante, hacer compras en línea y administrar tus finanzas desde cualquier lugar.<br></br>
                Con tecnología avanzada, PayPlus prioriza tu seguridad, protegiendo tus transacciones y datos personales. Además, su interfaz intuitiva hace que usarla sea tan fácil como un par de clics.<br></br>
                Empieza a disfrutar de una experiencia financiera sin complicaciones. ¡Con PayPlus, tienes el control total de tu dinero en la palma de tu mano!
            </p>
            </div>
            
            <picture className='image-container'>
                <button  className='btn-landing' onClick={HandleBack}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"/></svg></button>
                <img src={currentImage} alt='primary-image' className='landing-image'></img>
                <button  className='btn-landing' onClick={HandleNext}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"/></svg></button>  
            </picture>
    </div>
  )
}

export default Landing