import { getCorrectWordStop } from "../../utils/getCorrectWord";
import { TCurrency, TTicket } from "../../utils/types";

import s from "./styles.module.css";

import turkishAirlinesLogo from "./turkish_airlines_logo.png";

import airplaneIcon from "./airplane_icon.svg";
import { currencySigns, currencyToRUB, intlFormats } from "../../utils/currencyConsts";
import { DestinationPoint } from "../DestinationPoint/DestinationPoint";

interface ITicketItemProps {
    ticket: TTicket;
    currency: TCurrency;
}

export function TicketItem({ ticket, currency }: ITicketItemProps) {
    const priceStr = `${new Intl.NumberFormat(intlFormats[currency]).format(
        Math.floor(ticket.price * currencyToRUB[currency] * 10) / 10
    )} ${currencySigns[currency]}`;
    return (
        <li className={s.ticket}>
            <div className={s.purchase_block}>
                <div className={s.purchase_box}>
                    <div className={s.logo}>
                        <img className={s.logo_image} src={turkishAirlinesLogo} alt="tur_air_logo" />
                    </div>
                    <button type="button" className={s.purchase_button}>
                        <p>Купить</p>
                        <p>за {priceStr}</p>
                    </button>
                </div>
            </div>
            <div className={s.info_block}>
                <DestinationPoint
                    time={ticket.departure_time}
                    date={ticket.departure_date}
                    name={ticket.origin_name}
                    short_name={ticket.origin}
                />
                <div className={s.stops_count}>
                    {ticket.stops} {getCorrectWordStop(ticket.stops)}
                    <div className={s.stops_count_icon}>
                        <div className={s.stops_count_line}></div>
                        <img src={airplaneIcon} alt="plane" />
                    </div>
                </div>
                <DestinationPoint
                    time={ticket.arrival_time}
                    date={ticket.arrival_date}
                    name={ticket.destination_name}
                    short_name={ticket.destination}
                />
            </div>
        </li>
    );
}
