"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface INavigationProps {
    links: Array<INavLiks>
}

export interface INavLiks {
    label: string;
    href: string;
}

export const Navigation: React.FC<INavigationProps> = ({
    links
}: INavigationProps): JSX.Element => {

    const pathname = usePathname();

    return (
        <div>
            <nav>
                <div className='nav-conteiner'>
                    {links.map((el: INavLiks): JSX.Element => {

                        const active = pathname === el.href ? "header-nav__active" : "";

                        return (
                            <div
                                className={active}
                                key={el.label}
                            >
                                <Link
                                    className={active}
                                    href={el.href}
                                >
                                    {el.label}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};