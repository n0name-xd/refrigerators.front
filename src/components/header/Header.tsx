import Image from 'next/image'

export const Header: React.FC = (): JSX.Element => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-conteiner">
                    <div className='header-logo-conteiner'>
                        <div className=''>
                            <Image src='/test/prusak.jpg' alt='logo' width={30} height={30} />
                        </div>
                        <div>
                            <h3>Без прусака и жизнь плоха</h3>
                        </div>
                    </div>
                    <div>
                        <nav>
                            Nav
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}