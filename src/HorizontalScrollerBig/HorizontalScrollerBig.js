import { useEffect } from 'react';
import './HorizontalScroller.scss'

function HorizontalScrollerBig(){

    
    
    function addAnimation(){
        const scrollers = document.querySelectorAll('.scroller');
        console.log('a')
        scrollers.forEach(scroller =>{
            scroller.setAttribute('data-animated', true);
            const scrollerInner = scroller.querySelector('.scroller__inner')
            const scrollerContent = Array.from(scrollerInner.children)
            console.log('b')

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem)
            })
        })
    }
    function runStart(){
        addAnimation()

        // if (!window.matchMedia("(prefers-reduced-montion: reduce)").matches){
        //     addAnimation()
        // }else{
        //     console.log('p');
        // }
    }

    useEffect(()=>{
        runStart()
        

    }, [])
    return (
        <div className="scroller big-objects" data-direction="right">
            <ul className="tag-list scroller__inner">
                <li style={{background:'red'}}>
                    <a href='#'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class=":class"><path d="M7.2959 1.60659L6.68752 17.4222C5.86882 17.002 4.84168 16.8202 3.76394 16.9732C1.44008 17.3023 -0.233257 19.0553 0.0265434 20.8882C0.286383 22.7211 2.38082 23.9399 4.70458 23.6106C6.76696 23.3184 8.31506 21.9046 8.45572 20.3091L8.45616 20.31C8.45648 20.3064 8.45668 20.301 8.457 20.2969C8.46046 20.2564 8.46242 20.2153 8.46392 20.1745C8.55046 18.5272 9.08022 6.01401 9.08022 6.01401L22.1285 4.66963L21.5392 15.9392C20.7019 15.4732 19.6256 15.2655 18.4939 15.4259C16.1701 15.7554 14.4968 17.508 14.7567 19.3411C15.0164 21.1739 17.1108 22.3928 19.4347 22.0632C21.5409 21.7651 23.1102 20.2969 23.1926 18.6598L23.1936 18.6588C23.2377 17.9232 23.9739 0.935993 23.9999 0.335693L7.2959 1.60659Z"></path></svg></div>
                        <div className='title'>Youtube</div>
                        <div className='line'></div>
                        <div className='price'>$6.78</div>
                        <div className='frequency'>/ cada mes</div>
                        <div className='offer'>Hasta el -71% <img src='img/next.svg' /></div>
                    </a>        
                </li>

                <li style={{background:'rgb(15, 38, 163)'}}>
                    <a href='#'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class=":class"><path d="M17.36 20.988H6.536C6.23 20.988 6.026 20.783 6.026 20.477C6.026 20.171 6.23 19.967 6.536 19.967H17.464C17.77 19.967 17.974 20.171 17.974 20.477C17.974 20.783 17.668 20.987 17.362 20.987L17.36 20.988ZM1.635 3.01202C0.714 3.01202 0 3.73002 0 4.64802V17.208C0 18.128 0.714 18.842 1.634 18.842H22.364C23.284 18.842 24 18.128 24 17.209V4.64802C24 3.72802 23.284 3.01202 22.364 3.01202H1.635ZM9.498 7.40502L15.728 10.877L9.498 14.452V7.40502Z"></path></svg></div>
                        <div className='title'>Paramount</div>
                        <div className='line'></div>
                        <div className='price'>$6.78</div>
                        <div className='frequency'>/ cada mes</div>
                        <div className='offer'>Hasta el -71% <img src='img/next.svg' /></div>
                    </a>        
                </li>

                <li style={{background:'black'}}>
                    <a href='#'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class=":class"><path d="M21.6 17.6C21.6 17.9183 21.4736 18.2235 21.2485 18.4485C21.0235 18.6736 20.7183 18.8 20.4 18.8C20.0817 18.8 19.7765 18.6736 19.5515 18.4485C19.3264 18.2235 19.2 17.9183 19.2 17.6V3.2C19.2 2.88174 19.0736 2.57652 18.8485 2.35147C18.6235 2.12643 18.3183 2 18 2H1.2C0.88174 2 0.576515 2.12643 0.351472 2.35147C0.126428 2.57652 0 2.88174 0 3.2V18.8C0 19.4365 0.252856 20.047 0.702944 20.4971C1.15303 20.9471 1.76348 21.2 2.4 21.2H20.4C22.3848 21.2 24 19.5848 24 17.6V5.6H21.6V17.6ZM12 5.6H15.6V8H12V5.6ZM12 10.4H15.6V12.8H12V10.4ZM3.6 5.6H9.6V12.8H3.6V5.6ZM3.6 17.6V15.2H15.6V17.6H3.6Z"></path></svg></div>
                        <div className='title'>Le Monde</div>
                        <div className='line'></div>
                        <div className='price'>$6.78</div>
                        <div className='frequency'>/ cada mes</div>
                        <div className='offer'>Hasta el -71% <img src='img/next.svg' /></div>
                    </a>        
                </li>

                <li style={{background:'linear-gradient(218.88deg, rgb(245, 56, 68) 5.33%, rgb(66, 55, 143) 70.21%)'}}>
                    <a href='#'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class=":class"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.3328 11.2332C22.2744 5.32197 19.908 3.57837 18.6492 3.57837C16.6848 3.57837 16.1808 5.03877 12 5.08797C7.81917 5.03877 7.31517 3.57837 5.35077 3.57837C4.09197 3.57837 1.72437 5.32197 0.665968 11.2332C0.062368 14.6076 -0.592832 19.6452 0.968368 20.25C2.91117 21.0024 3.56997 19.1208 5.70357 17.5308C7.86957 15.9192 8.90877 15.54 12 15.54C15.0912 15.54 16.1304 15.9192 18.2964 17.5308C20.43 19.1196 21.0888 21.0024 23.0316 20.25C24.5928 19.6452 23.9376 14.6088 23.3328 11.2332ZM7.19997 12C6.56345 12 5.953 11.7471 5.50291 11.297C5.05282 10.8469 4.79997 10.2365 4.79997 9.59997C4.79997 8.96345 5.05282 8.353 5.50291 7.90291C5.953 7.45283 6.56345 7.19997 7.19997 7.19997C7.83649 7.19997 8.44694 7.45283 8.89703 7.90291C9.34711 8.353 9.59997 8.96345 9.59997 9.59997C9.59997 10.2365 9.34711 10.8469 8.89703 11.297C8.44694 11.7471 7.83649 12 7.19997 12ZM15.6 12C15.2817 12 14.9765 11.8735 14.7514 11.6485C14.5264 11.4235 14.4 11.1182 14.4 10.8C14.4 10.4817 14.5264 10.1765 14.7514 9.95144C14.9765 9.7264 15.2817 9.59997 15.6 9.59997C15.9182 9.59997 16.2235 9.7264 16.4485 9.95144C16.6735 10.1765 16.8 10.4817 16.8 10.8C16.8 11.1182 16.6735 11.4235 16.4485 11.6485C16.2235 11.8735 15.9182 12 15.6 12ZM18 9.59997C17.6817 9.59997 17.3765 9.47354 17.1514 9.2485C16.9264 9.02345 16.8 8.71823 16.8 8.39997C16.8 8.08171 16.9264 7.77648 17.1514 7.55144C17.3765 7.3264 17.6817 7.19997 18 7.19997C18.3182 7.19997 18.6235 7.3264 18.8485 7.55144C19.0735 7.77648 19.2 8.08171 19.2 8.39997C19.2 8.71823 19.0735 9.02345 18.8485 9.2485C18.6235 9.47354 18.3182 9.59997 18 9.59997Z"></path></svg></div>
                        <div className='title'>Apple</div>
                        <div className='line'></div>
                        <div className='price'>$0.6</div>
                        <div className='frequency'>/ cada mes</div>
                        <div className='offer'>Hasta el -71% <img src='img/next.svg' /></div>
                    </a>        
                </li>
                
            </ul>
        </div>
    )
}


export default HorizontalScrollerBig;