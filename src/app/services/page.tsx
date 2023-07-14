/* eslint-disable no-unused-vars */
"use client";

import { SideMenu } from "@/components/common/SideMenu";
import { useState } from "react";
import Image from "next/image";

export enum EnumServiceCategory {
    FRIGE = "Холодильники",
    ACCESSORIES = "Запчасти и комплектующие для холодильников",
    SERVICES = "Услуги"
};

export interface IFrigeCMS {
    id: number;
    brand: string;
    description: string;
    price: number;
    images: Array<string>
    condition: string;
}

const friges = [
    {
        id: 1,
        brand: "Atlant",
        description: "Флагман этого бренда. Mercedes в мире холодильников.",
        price: 59_000,
        images: ["/images/friges/atlant.jpg", "/images/friges/atlant2.jpg"],
        condition: "Без пробега по СНГ."
    },
    {
        id: 2,
        brand: "LG",
        description: "Просто замечательный холодильник с оригинальным принтом и дезайнерской ручкой.",
        price: 44_000,
        images: ["/images/friges/lg.jpg", "/images/friges/lg2.jpg"],
        condition: "Проработал 1 месяц в штабквартире Google."
    },
    {
        id: 3,
        brand: "Sumsung",
        description: "За эти деньги лучше не найти. Коллеги умрут от зависти.",
        price: 34_500,
        images: ["/images/friges/sumsung.jpg", "/images/friges/sumsung2.jpg"],
        condition: "Пользовались неделю, работает как часы. Одна маленькая царапина."
    }
];

const accessoriesList = [
    {
        id: 1,
        title: "Крутая наклейка на холодильник",
        img: "/images/stickers/warning.jpg",
        price: 3000
    }
];

const servicesData = [
    {
        id: 1,
        title: "Побухать.",
        description: "Мы приедем с своим бухлом, с вас закуска. Услуга для своих или при покупке 10-ти холодильников за раз.",
        price: 3_000,
        img: "/images/stickers/alc.webp"
    }
];

const Services: React.FC = () => {
    const categoryLIst = Object.values(EnumServiceCategory);
    const [serviceCategory, setServiceCategory] = useState<EnumServiceCategory>(EnumServiceCategory.FRIGE);

    const frigesList = friges.map((el: IFrigeCMS) => {
        return <div key={el.id} className="frige-card">
            <div className="frige-card__wrapper">
                <div className="frige-card__img">
                    <Image src={el.images[0]} alt="frige" width={150} height={150} />
                </div>
                <div className="frige-card__description">
                    <h3>Бренд: {el.brand}</h3>
                    <div>Описание: {el.description}</div>
                    <div>Состояние: {el.condition}</div>
                    <div>Цена: {el.price}р.</div>
                </div>
            </div>
        </div>;
    });

    const accessories = accessoriesList.map((el: any) => {
        return <div key={el.id} className="frige-card">
            <div className="frige-card__wrapper">
                <div className="frige-card__img">
                    <Image src={el.img} alt="frige" width={150} height={150} />
                </div>
                <div className="frige-card__description">
                    <h3>{el.title}</h3>
                    <div>Цена: {el.price}р.</div>
                </div>
            </div>
        </div>;
    });

    const services = servicesData.map((el: any) => {
        return <div key={el.id} className="frige-card">
            <div className="frige-card__wrapper">
                <div className="frige-card__img">
                    <Image src={el.img} alt="frige" width={150} height={150} />
                </div>
                <div className="frige-card__description">
                    <h3>Услуга: {el.title}</h3>
                    <div>Описание: {el.description}</div>
                    <div>Цена: {el.price}р.</div>
                </div>
            </div>
        </div>;
    });

    return (
        <div className="wrapper">
            <SideMenu
                categoryLIst={categoryLIst}
                setCategory={setServiceCategory}
                activeCategory={serviceCategory}
            >
                <div className="service__list">
                    <h2>{serviceCategory}</h2>
                    {EnumServiceCategory.FRIGE === serviceCategory ? frigesList : null}
                    {EnumServiceCategory.ACCESSORIES === serviceCategory ? accessories : null}
                    {EnumServiceCategory.SERVICES === serviceCategory ? services : null}
                </div>
            </SideMenu>
        </div>
    );
};

export default Services;