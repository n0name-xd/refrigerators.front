import { MainContent } from "./MainContent";

export interface IMainProps {

}

export const Main: React.FC<IMainProps> = ({ }: IMainProps): JSX.Element => {
    return (
        <div className="wrapper">
            <MainContent />
        </div>
    );
};