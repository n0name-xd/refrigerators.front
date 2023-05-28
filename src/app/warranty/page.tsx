import Link from "next/link";

const Warranty = (): JSX.Element => {
    return (
        <div className="warranty">
            <h1>
                Какая тебе гарантия? Ты себя в зеркало видел?
            </h1>

            <h2>
                <Link href="/contacts">
                    Вернуться назад
                </Link>
            </h2>
        </div>
    );
};

export default Warranty;