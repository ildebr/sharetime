import HorizontalScroller from "../HorizontalScroller/HorizontalScroller";
import HorizontalScrollerBig from "../HorizontalScrollerBig/HorizontalScrollerBig";
import HorizontalScrollerUsuario from "../HorizontalScrollerUsuario/HorizontalScroller";
import circle from '../Assets/circle.svg'
import './Header.scss'
import { useEffect } from "react";

function Header(){

    
    
    function click(e){
        if(!e.currentTarget.classList.contains('active')){
            document.querySelector('.faq__element.active').classList.remove('active');
            e.currentTarget.classList.add('active')
        }
    }
    
    function click2(e){
        if(!e.currentTarget.classList.contains('active')){
            document.querySelector('.faq2__element.active').classList.remove('active');
            e.currentTarget.classList.add('active')
        }
    }
    

    function startfunc(){
        var faqel = document.querySelectorAll('.faq__element');
        var faqel2 = document.querySelectorAll('.faq2__element');
        faqel.forEach(ele => {
            ele.addEventListener('click',click)
        })
        faqel2.forEach(ele => {
            ele.addEventListener('click',click2)
        })
    }

    useEffect(()=>{
        startfunc()
    },[])

    return (
        <>

            <header className="site-header">

                <div className="container">
                    <h1 className="site-header__title">
                        <span className="green">516 suscripciones</span> <span className="drawline"><img src={circle} /> <span>disponibles</span> </span> para <span className="blue">compartir</span>
                    </h1>
                </div>
                <HorizontalScroller />
                <HorizontalScrollerBig />

                <a href='#' className='cta cta-main'>Ver todas las suscripciones</a>
            </header>

            <div className="circular-bottom">
                <svg viewBox="0 0 800 100"><path fill="#112E45" d="M 0 0 Q 400 200 800 0 "></path></svg>
            </div>

            <main>
                <section className="sharesection">
                    <div className="container">
                        <p className="sharesection__subsection">
                            La mejor plataforma para 
                        </p>
                        <h1>Compartir cuentas y <span className="underline">suscripciones <img src="img/underline.svg" /></span></h1>

                        <div className="hero">
                        <div className="box">
                            <div className="box__element compartir">
                                <img src="/img/proposer.svg"/>

                                <h2 className="box__element__title">
                                    Compartir
                                </h2>
                                <p className="box__element__content">
                                    Quiero compartir mi cuenta para reducir el coste.
                                </p>

                                <a src="#" className="cta cta-secondary">
                                    Compartir
                                </a>
                            </div>
                            <div className="box__element participar">
                                <img src="/img/participer.svg"/>

                                <h2 className="box__element__title">
                                    Participar
                                </h2>
                                <p className="box__element__content">
                                    Quiero compartir mi cuenta para reducir el coste.
                                </p>

                                <a src="#" className="cta cta-secondary">
                                    Participar
                                </a>
                            </div>
                        </div>

                        <div className="sharesection__content">
                            <p>Sharesub es la mejor manera de compartir los gastos mensuales de tus suscripciones.</p>
                            <p>Gestionamos tus cuentas para que no tengas que perseguir a tus amigos para que paguen su parte, ni dudar a la hora de abrir tus cuentas de música, entretenimiento...</p>
                            <p>Anímate y compártelo para ahorrar dinero. Nosotros nos ocuparemos del resto.</p>
                        </div>
                    </div>
                        </div>
                </section>

                {/* <section className="sharesave">
                    <div className="container">
                        <h2>Comparte tus cuentas</h2>
                        <p className="sharesave__sub">Ahorre una media de 360 euros al a;o</p>

                        <div className="simulacion">
                            <div className="simulacion__header">
                                <img src=""/>
                                <p>simulaciond de ahorro</p>
                            </div>

                            
                        </div>
                    </div>
                </section> */}

                <section className="howitworks">
                    <div className="container">

                        <div className="faq">
                            <div className="faq__element active">
                                <div className="faq__element__header">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="13" width="28" height="6" fill="currentColor"></rect> <rect x="13" y="2" width="6" height="28" fill="currentColor"></rect></svg>
                                    <span className="faq__element__header__title">
                                        Crea tu suscripcion
                                    </span>
                                </div>
                                <div className="faq__element__content">
                                    <p>Describe el servicio, indica el número de plazas y el precio. Vas a obtener un link para compartir.</p>
                                </div>
                            </div>
                            <div className="faq__element">
                                <div className="faq__element__header">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M29.8414 1.40983L1.64498 16.6655C1.54758 16.7165 1.46665 16.794 1.41156 16.8891C1.35648 16.9842 1.3295 17.093 1.33377 17.2028C1.33803 17.3126 1.37335 17.4189 1.43564 17.5095C1.49793 17.6 1.58463 17.671 1.68568 17.7143L6.49941 19.5272C6.7788 19.6302 7.00642 19.8389 7.1331 20.1083L10.8626 27.8102C10.9323 28.1502 11.5602 28.2402 11.5689 27.8945L10.9876 21.5348C11.0212 21.0637 11.201 20.6148 11.5021 20.2507L26.1264 5.93046C26.1676 5.89031 26.2181 5.86104 26.2734 5.84532C26.3288 5.82959 26.3871 5.8279 26.4433 5.8404C26.4987 5.85273 26.5499 5.87907 26.5922 5.91689C26.6345 5.95471 26.6663 6.00274 26.6847 6.05639C26.7031 6.11004 26.7074 6.16751 26.6972 6.22329C26.687 6.27908 26.6626 6.3313 26.6264 6.37497L14.0194 21.7905C13.7532 22.1669 13.5835 22.6028 13.5253 23.0601L12.7695 28.554C12.8334 29.0334 13.2084 29.2164 13.5107 28.7864L16.2257 25.5906C16.3153 25.4687 16.449 25.3866 16.5983 25.3616C16.7475 25.3366 16.9007 25.3708 17.0251 25.4569L24.0248 30.5557C24.1014 30.6125 24.1911 30.6489 24.2855 30.6616C24.38 30.6742 24.4762 30.6628 24.565 30.6283C24.6538 30.5937 24.7325 30.5372 24.7936 30.4641C24.8546 30.391 24.8962 30.3035 24.9143 30.21L30.6553 2.02865C30.6766 1.92238 30.6678 1.81227 30.6298 1.71075C30.5918 1.60923 30.5262 1.52036 30.4403 1.45417C30.3544 1.38799 30.2517 1.34712 30.1438 1.33621C30.036 1.32529 29.9272 1.34475 29.8297 1.3924L29.8414 1.40983Z" fill="#112E45"/>
                                                </svg>
                                    <span className="faq__element__header__title">
                                        Crea tu suscripcion
                                    </span>
                                </div>
                                <div className="faq__element__content">
                                    <p>Describe el servicio, indica el número de plazas y el precio. Vas a obtener un link para compartir.</p>
                                </div>
                            </div>
                            <div className="faq__element">
                                <div className="faq__element__header">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V8.25H22.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM1.5 19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V10.3125H1.5V19.5ZM15.0703 15.1875C15.0703 15.0844 15.1547 15 15.2578 15H19.125C19.2281 15 19.3125 15.0844 19.3125 15.1875V16.875C19.3125 16.9781 19.2281 17.0625 19.125 17.0625H15.2578C15.1547 17.0625 15.0703 16.9781 15.0703 16.875V15.1875Z" fill="currentColor"></path></svg>
                                    <span className="faq__element__header__title">
                                        Crea tu suscripcion
                                    </span>
                                </div>
                                <div className="faq__element__content">
                                    <p>Describe el servicio, indica el número de plazas y el precio. Vas a obtener un link para compartir.</p>
                                </div>
                            </div>
                            <div className="faq__element">
                                <div className="faq__element__header">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.6629 8.57143H6.51786C6.07388 8.57143 5.71429 8.21183 5.71429 7.76786C5.71429 7.32388 6.07388 6.96429 6.51786 6.96429H25.8036C26.2475 6.96429 26.6071 6.60469 26.6071 6.16071C26.6071 4.8293 25.5278 3.75 24.1964 3.75H5.71429C3.9389 3.75 2.5 5.1889 2.5 6.96429V23.0357C2.5 24.8111 3.9389 26.25 5.71429 26.25H25.6629C27.0702 26.25 28.2143 25.1687 28.2143 23.8393V10.9821C28.2143 9.65273 27.0702 8.57143 25.6629 8.57143ZM23.3929 19.0179C22.5054 19.0179 21.7857 18.2982 21.7857 17.4107C21.7857 16.5233 22.5054 15.8036 23.3929 15.8036C24.2803 15.8036 25 16.5233 25 17.4107C25 18.2982 24.2803 19.0179 23.3929 19.0179Z" fill="currentColor"></path></svg>
                                    <span className="faq__element__header__title">
                                        Crea tu suscripcion
                                    </span>
                                </div>
                                <div className="faq__element__content">
                                    <p>Describe el servicio, indica el número de plazas y el precio. Vas a obtener un link para compartir.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="usuarios">
                    <div className="container">
                        <h2>Mas de <span>300.000</span> usuarios confian <span>en nosotros</span></h2>
                        <p className="rating">
                            Nos dan <strong>4,7/5</strong> en Google y Trustpilot
                        </p>

                    </div>

                    <HorizontalScrollerUsuario />
                </section>

                <section className="caracteristicas">
                    <div className="container">
                        <h2>Caracteristicas del servicio</h2>
                        <div className="caracteristicas__container">
                            <div className="caracteristicas__elemento">
                                <img src="img/service-legal.svg" />
                                <h3>Servicio Juridico</h3>
                                <p>Sí, es perfectamente legal compartir una suscripción. Los propios proveedores de contenidos o servicios te permiten compartir. Sharesub ofrece un servicio de gestión de pagos y reembolsos sencillo y más seguro.</p>
                                <a className="cta cta-third" href="#"><span>Seguir leyendo</span> <img src="img/next-blue.svg" />  </a>
                            </div>
                            <div className="caracteristicas__elemento">
                                <img src="img/protection-acheteurs.svg" />
                                <h3>Programa de protection del comprador</h3>
                                <p>Sí, es perfectamente legal compartir una suscripción. Los propios proveedores de contenidos o servicios te permiten compartir. Sharesub ofrece un servicio de gestión de pagos y reembolsos sencillo y más seguro.</p>
                                <a className="cta cta-third" href="#"><span>Seguir leyendo</span> <img src="img/next-blue.svg" />  </a>
                            </div>
                            <div className="caracteristicas__elemento">
                                <img src="img/pas-de-frais.svg" />
                                <h3>Sin comisiones sobre tus acciones</h3>
                                <p>Sí, es perfectamente legal compartir una suscripción. Los propios proveedores de contenidos o servicios te permiten compartir. Sharesub ofrece un servicio de gestión de pagos y reembolsos sencillo y más seguro.</p>
                                <a className="cta cta-third" href="#"><span>Seguir leyendo</span> <img src="img/next-blue.svg" />  </a>
                            </div>
                            <div className="caracteristicas__elemento">
                                <img src="img/donnees-securisees.svg" />
                                <h3>Datos seguros</h3>
                                <p>Sí, es perfectamente legal compartir una suscripción. Los propios proveedores de contenidos o servicios te permiten compartir. Sharesub ofrece un servicio de gestión de pagos y reembolsos sencillo y más seguro.</p>
                                <a className="cta cta-third" href="#"><span>Seguir leyendo</span> <img src="img/next-blue.svg" />  </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="juntos">
                    <div className="container">
                        <h2>Juntos, hagamos la cultura <span>accesible a todos</span>. ¡Comparte ahora!</h2>
                        <div className="juntos__content">
                            <p>Compartir tus plazas libres también significa hacer accesibles las actividades de ocio, cultura y prensa a quienes no pueden permitírselas.</p>
                            <p>Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros</p>

                            <a className="cta cta-fourth">Descubrir</a>
                        </div>
                    </div>
                </section>
                <section className="faq2">
                    <div className="container">
                        <h2>Preguntas mas frecuentes</h2>
                        <div className="faq2__container">
                            <div className="faq2__element active">
                                <div className="faq2__element__header">
                                    Cuanto cuesta este servicio?
                                </div>
                                <div className="faq2__element__content">
                                    <p>Si desea compartir el coste de su suscripción, el servicio es totalmente gratuito. No hay comisiones ocultas: todo el dinero que recaude le será devuelto a su cuenta bancaria. Tampoco hay gastos de devolución.</p>
                                </div>
                            </div>
                            <div className="faq2__element">
                                <div className="faq2__element__header">
                                    Cuanto cuesta este servicio?
                                </div>
                                <div className="faq2__element__content">
                                    <p>Si desea compartir el coste de su suscripción, el servicio es totalmente gratuito. No hay comisiones ocultas: todo el dinero que recaude le será devuelto a su cuenta bancaria. Tampoco hay gastos de devolución.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="container">
                    <div className="site-footer__header">
                        
                    </div>
                    <div className="site-footer__content">
                        <div className="site-footer__links">
                            <h3>Made with love in venezuela</h3>
                            <div className="site-footer__links__socials">
                                <a href="#">
                                    <img src="img/twitter.svg" />
                                </a>
                                <a href="#">
                                    <img src="img/tiktok.svg" />
                                </a>
                                <a href="#">
                                    <img src="img/linkedin.svg" />
                                </a>
                                <a href="#">
                                    <img src="img/instagram.svg" />
                                </a>
                            </div>
                        </div>
                        <div className="hero">
                            <div className="site-footer__links">
                                <a href="#" className="footer-link">
                                    Ayuda en linea
                                </a>
                                <a href="#" className="footer-link">
                                    Pongase en contacto con nosotros
                                </a>
                                <a href="#" className="footer-link">
                                    Prensa
                                </a>
                            </div>
                        
                        
                            <div className="site-footer__links">
                                <div className="site-footer__links__header">
                                    Mas informacion
                                </div>
                                <a href="#" className="footer-link">
                                    Condiciones de uso
                                </a>
                                <a href="#" className="footer-link">
                                    Politica de privacidad
                                </a>
                                <a href="#" className="footer-link">
                                    Quienes somos?
                                </a>
                                <a href="#" className="footer-link">
                                    Contratacion
                                </a>
                            </div>
                        </div>
                        
                        <div className="site-footer__links">
                            <div className="site-footer__links__header">
                                La guia
                            </div>
                            <a href="#" className="footer-link">
                                Condiciones de uso
                            </a>
                            <a href="#" className="footer-link">
                                Politica de privacidad
                            </a>
                            <a href="#" className="footer-link">
                                Quienes somos?
                            </a>
                            <a href="#" className="footer-link">
                                Contratacion
                            </a>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Header;