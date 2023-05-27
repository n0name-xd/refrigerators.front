import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="wrapper footer-conteiner">
                <div className="footer-social">
                    <div>Посетите нашего партнера</div>
                    <div>
                        <Link
                            href="https://volgograd.jsprav.ru/sanepidemstantsii/">
                            <Image
                                src="/images/social/socialvk.svg"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};