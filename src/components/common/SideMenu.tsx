"use client";

import { EnumServiceCategory } from "@/app/services/page";
import { Dispatch, SetStateAction } from "react";

export interface ISideMenuProps {
    children: React.ReactNode;
    setCategory: Dispatch<SetStateAction<EnumServiceCategory>>;
    categoryLIst: Array<EnumServiceCategory>;
    activeCategory: EnumServiceCategory;
}

export const SideMenu: React.FC<ISideMenuProps> = ({
    children,
    setCategory,
    categoryLIst,
    activeCategory,
}): JSX.Element => {

    const categoryLinksArray = categoryLIst.map((el: EnumServiceCategory) => {
        return <div
            key={el}
            className={`${activeCategory === el ? "category_active" : ""} sidemenu-link`}
            onClick={() => setCategory(el)}
        >
            {el}
        </div>;
    });

    return (
        <div className="side-menu-wrapper">
            <div className="sidemenu-conteiner">
                <div className="sidemenu-categories">
                    {categoryLinksArray}
                </div>
            </div>
            {children}
        </div>
    );
};