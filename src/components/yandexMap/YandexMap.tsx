"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const YandexMap: React.FC = (): JSX.Element => {
    return (
        <div className="wrapper yandex-map__padding">
            <YMaps>
                <Map defaultState={{
                    center: [38.8976694, -77.03655],
                    zoom: 15,
                    controls: ["zoomControl", "fullscreenControl"],
                }}
                    width={"100%"}
                    height={450}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        defaultGeometry={[38.8976694, -77.03655]}
                        properties={{
                            balloonContentBody:
                                "Что бы получить скидку 101% нужно насрать на крыльцо и размазать говно рукой по стенам",
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    );
};