"use client";

export interface ISideMenuProps {
    children: React.ReactNode
}

const servicesList = [
    { category: "frige", name: "Холодильники" },
    { category: "accessories", name: "Запчасти и комплектующие для холодильников" },
    { category: "servises", name: "Услуги" },
];

export const SideMenu: React.FC<ISideMenuProps> = ({
    children
}): JSX.Element => {

    const handleCategiry = (cat: string) => {

        return cat;
    };

    return (
        <div className="side-menu-wrapper">
            <div className="sidemenu-conteiner">
                <div className="sidemenu-categories">
                    {servicesList.map((el: { name: string, category: string }) => {
                        return (
                            <div
                                className="sidemenu-link"
                                onClick={() => handleCategiry(el.category)}
                                key={el.category}
                            >
                                {el.name}

                            </div>
                        );
                    })}
                </div>
            </div>
            {children}
        </div>
    );
};