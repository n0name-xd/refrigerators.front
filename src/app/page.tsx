import { Main } from "@/components/main/Main";
// import axios from "axios";

export interface ICMSFridgeItem {
    id: number;
    attributes: {
        name: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    }
}

// const getFridges = async (): Promise<Array<ICMSFridgeItem>> => {
// const res = await axios.get("http://localhost:1337/api/fridges");

// return res.data.data;
// };

const Home = async (): Promise<JSX.Element> => {

    // await getFridges();

    return (
        <main>
            <Main />
        </main>
    );
};

export default Home;
