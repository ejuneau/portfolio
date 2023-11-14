export default function Hamburger(props) {
    return(
        <>
        <div className="hamburger">
            <div className="burger burger1" />
            <div className="burger burger2" />
            <div className="burger burger3" />
        </div>

        <style jsx>{`
            .hamburger{
                width:2rem;
                height: 2rem;
                display: flex;
                justify-content: space-around;
                flex-flow: column nowrap;
                z-index: 10;
                display: none;
            }
            .burger {
                width: 2rem;
                height: 0.25rem;
                border-radius: 10px;
                background-color: white;
                transform-origin: 1px;
                transition: all 0.2s ease-in-out;
            }
            @media (max-width: 767px) {
                .hamburger{
                    display: flex;
                }
                header nav {
                    display: flex;
                    visibility: ${props.hamburgerOpen? 'visible' : 'hidden'};
                    opacity: ${props.hamburgerOpen? '1' : '0'};
                    background-color: black;
                    top: 0;
                    height: 100vh;
                    width: 100vw;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    flex-direction: column;
                    transition: visibility 0.3s, opacity 0.3s linear;
                }
                }
                header nav li {
                    list-style: none;
                }
                .burger1{
                    transform: ${props.hamburgerOpen? 'rotate(45deg)' : 'rotate(0deg)'}
                }
                .burger2{
                    transform: ${props.hamburgerOpen? 'translateX(10%)' : 'translateX(0%)'};
                    opacity: ${props.hamburgerOpen? '0' : '1'};
                    transition: transform 0.1s ease-in-out, opacity 0.2s ease-in-out;
                }
                .burger3{
                    transform: ${props.hamburgerOpen? 'rotate(-45deg)' : 'rotate(0deg)'}
                }
            }
        `}
        </style>
        </>
    )
}