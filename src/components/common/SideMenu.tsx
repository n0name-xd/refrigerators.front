export interface ISideMenuProps {
    children: React.ReactNode
}

export const SideMenu: React.FC<ISideMenuProps> = ({
    children
}): JSX.Element => {
    return (
        <div className="side-menu-wrapper">
            <div className="sidemenu-conteiner">
                SideMenu
            </div>
            <>
                {children}
            </>
        </div>
    );
};