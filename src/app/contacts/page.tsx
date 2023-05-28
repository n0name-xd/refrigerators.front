import { YandexMap } from "@/components/yandexMap/YandexMap";
import Image from "next/image";
import Link from "next/link";

const Сontacts = () => {
    return (
        <>
            <div className="wrapper">
                <div className="contacts-conteiner">
                    <h2>
                        Если желаете приобрести или заказать услугу:
                    </h2>
                    <ul>
                        <li>
                            Телефон: +7 (969) 777-49-19
                        </li>
                        <li>
                            Электронная почта: prusachok@email.us
                        </li>
                        <li>
                            Голубиная почта: &exist;&zeta;&iota;&xi;&sigmaf;&sigma;&xi;&middot;&yen;&forall;&not;&brvbar;
                        </li>
                    </ul>
                    <h2 >
                        Если хотити связаться с нами по гарантийным обязательствам перейдите по ссылке ниже.
                    </h2>
                    <div className="contacts__flex">

                        <div className="contacts-link-img-wrapper">
                            <div>
                                Она сдесь
                            </div>
                            <div className="red-one">
                                <Image width={50} height={20} src="/images/test/redarrow.svg" alt="" />
                            </div>
                        </div>

                        <div className="contacts__flex contacts-tiny-link">
                            <Link href="/warranty">не нажимай</Link>
                        </div>

                        <div className="contacts-link-img-wrapper">
                            <div className="red-two">
                                <Image width={50} height={20} src="/images/test/redarrow.svg" alt="" />
                            </div>
                            <div>
                                Она сдесь
                            </div>
                        </div>

                    </div>
                    <div>
                        <h2 className="contacts__padding">
                            Если хотити покупку забрать сами.
                        </h2>
                    </div>

                </div>
            </div>
            <YandexMap />
        </>
    );
};

export default Сontacts;