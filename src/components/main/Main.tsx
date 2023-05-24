import { SideMenu } from "../common/SideMenu"
import { MainContent } from "./MainContent"

export interface IMainProps {

}

export const Main: React.FC<IMainProps> = ({ }: IMainProps): JSX.Element => {

    return (
        <div className="wrapper">
            <div className="main-conteiner">
                <SideMenu />
                <MainContent />
            </div>
        </div>
    )
}