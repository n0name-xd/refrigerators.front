import Image from 'next/image'
import Link from 'next/link'

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
                    <div>
                        <nav>
                            <div className='nav-conteiner'>
                                <div><Link href='/'>Главная</Link></div>
                                <div><Link href='/services'>Услуги</Link></div>
                                <div><Link href='/contacts'>Контакты</Link></div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}