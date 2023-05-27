import Image from "next/image";
import { Navigation } from "./Navigation";

const NavLiks = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Контакты", href: "/contacts" }
];

export const Header: React.FC = (): JSX.Element => {

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-conteiner">
                    <div className='header-logo-conteiner'>
                        <div className='header-logo-item'>
                            <Image src='/images/logo/prusak.jpg' alt='logo' width={60} height={60} />
                        </div>
                        <div className='header-logo-title'>
                            <h3>Без прусака и жизнь плоха</h3>
                        </div>
                    </div>
                    <Navigation links={NavLiks} />
                </div>
            </div>
        </header>
    );
};