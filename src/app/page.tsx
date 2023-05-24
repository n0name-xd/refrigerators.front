import { Main } from "@/components/main/Main";

const getPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    return data.json();
}

const Home = async (): Promise<JSX.Element> => {

    const data = await getPosts();

    return (
        <main>
            <Main />
        </main>
    )
}

export default Home;


