import { useEffect } from 'react';
import './HorizontalScroller.scss'

function HorizontalScrollerUsuario(){

    const scrollers = document.querySelectorAll('.scroller');

    

    function addAnimation(){
        scrollers.forEach(scroller =>{
            scroller.setAttribute('data-animated', true);
            

            const scrollerInner = scroller.querySelector('.scroller__inner')
            const scrollerContent = Array.from(scrollerInner.children)

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem)
            })
        })
    }

    useEffect(()=>{
        if (!window.matchMedia("(prefers-reduced-montion: reduce)").matches){
            addAnimation()
        }else{
            console.log('p');
        }
    }, [])
    return (
        
        <div className="scroller user__scroller" data-speed="slow">
            <ul className="tag-list scroller__inner">
                <li>
                    <div className='user__scroller__header'>
                        <img src='img/unt.png' />
                        <span>Celia D.</span>
                    </div>
                    <div className='user__scroller__content'>
                        Comparto una licencia de software de diseño gráfico con un autónomo en mi espacio de coworking. Es agradable no tener que hacer cuentas.
                    </div>
                    <div className='user__scroller__footer'>
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                    </div>
                </li>
                <li>
                    <div className='user__scroller__header'>
                        <img src='img/unt.png' />
                        <span>Celia D.</span>
                    </div>
                    <div className='user__scroller__content'>
                        Comparto una licencia de software de diseño gráfico con un autónomo en mi espacio de coworking. Es agradable no tener que hacer cuentas.
                    </div>
                    <div className='user__scroller__footer'>
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                    </div>
                </li>
                <li>
                    <div className='user__scroller__header'>
                        <img src='img/unt.png' />
                        <span>Celia D.</span>
                    </div>
                    <div className='user__scroller__content'>
                        Comparto una licencia de software de diseño gráfico con un autónomo en mi espacio de coworking. Es agradable no tener que hacer cuentas.
                    </div>
                    <div className='user__scroller__footer'>
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                    </div>
                </li>
                <li>
                    <div className='user__scroller__header'>
                        <img src='img/unt.png' />
                        <span>Celia D.</span>
                    </div>
                    <div className='user__scroller__content'>
                        Comparto una licencia de software de diseño gráfico con un autónomo en mi espacio de coworking. Es agradable no tener que hacer cuentas.
                    </div>
                    <div className='user__scroller__footer'>
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                    </div>
                </li>
                <li>
                    <div className='user__scroller__header'>
                        <img src='img/unt.png' />
                        <span>Celia D.</span>
                    </div>
                    <div className='user__scroller__content'>
                        Comparto una licencia de software de diseño gráfico con un autónomo en mi espacio de coworking. Es agradable no tener que hacer cuentas.
                    </div>
                    <div className='user__scroller__footer'>
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                    </div>
                </li>
                <li>
                    <div className='user__scroller__header'>
                        <img src='img/unt.png' />
                        <span>Celia D.</span>
                    </div>
                    <div className='user__scroller__content'>
                        Comparto una licencia de software de diseño gráfico con un autónomo en mi espacio de coworking. Es agradable no tener que hacer cuentas.
                    </div>
                    <div className='user__scroller__footer'>
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                    </div>
                </li>
                <li>
                    <div className='user__scroller__header'>
                        <img src='img/unt.png' />
                        <span>Celia D.</span>
                    </div>
                    <div className='user__scroller__content'>
                        Comparto una licencia de software de diseño gráfico con un autónomo en mi espacio de coworking. Es agradable no tener que hacer cuentas.
                    </div>
                    <div className='user__scroller__footer'>
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                    </div>
                </li>
                <li>
                    <div className='user__scroller__header'>
                        <img src='img/unt.png' />
                        <span>Celia D.</span>
                    </div>
                    <div className='user__scroller__content'>
                        Comparto una licencia de software de diseño gráfico con un autónomo en mi espacio de coworking. Es agradable no tener que hacer cuentas.
                    </div>
                    <div className='user__scroller__footer'>
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                        <img src='img/full-star.svg' />
                    </div>
                </li>
                
            </ul>
        </div>
    )
}


export default HorizontalScrollerUsuario;