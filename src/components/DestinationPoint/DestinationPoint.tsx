import { getFormattedDate } from "../../utils/getFormattedDate";

import s from "./styles.module.css";

interface IDestinationPointProps {
    time: string;
    date: string;
    short_name: string;
    name: string;
}

export function DestinationPoint({ time, date, short_name, name }: IDestinationPointProps) {
    return (
        <div className={s.dest_point}>
            <div className={s.time}>{time}</div>
            <div className={s.name}>
                {short_name}, {name}
            </div>
            <div className={s.date}>{getFormattedDate(date)}</div>
        </div>
    );
}
