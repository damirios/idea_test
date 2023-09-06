import React from "react";
import { getCorrectWordStop } from "../../utils/getCorrectWord";
import { TCurrency, TFilterStops } from "../../utils/types";
import { CheckboxBlock } from "../CheckboxBlock/CheckboxBlock";
import s from "./styles.module.css";

interface ISidebarProps {
    className?: string;
    stopsArr: number[];
    allCurrencies: TCurrency[];
    changeCurrency: (newCurrency: TCurrency) => void;
    currency: TCurrency;
    changeFilterStops: (value: string) => void;
    filterStops: TFilterStops;
}

export function Sidebar({
    className,
    stopsArr,
    allCurrencies,
    changeCurrency,
    currency,
    changeFilterStops,
    filterStops,
}: ISidebarProps) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        changeFilterStops(e.target.value);
    }

    return (
        <div className={className || ""}>
            <div className={s.sidebar_block}>
                <div className={s.currency_block}>
                    <h2 className={s.sidebar_block_title}>Валюта</h2>
                    <div className={s.currency_buttons}>
                        {allCurrencies.map((currencyItem) => (
                            <button
                                key={currencyItem}
                                className={`${s.currency_button} ${currency === currencyItem ? s._active : ""}`}
                                type="button"
                                onClick={() => changeCurrency(currencyItem)}
                            >
                                {currencyItem}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={s.stops_block}>
                    <h2 className={s.sidebar_block_title}>Количество пересадок</h2>
                    <ul className={s.stops_list}>
                        <li className={s.stops_item}>
                            <CheckboxBlock
                                isChecked={filterStops === "all"}
                                changeHandler={handleChange}
                                value="all"
                                text="Все"
                            />
                        </li>
                        {stopsArr.map((stop) => (
                            <li key={stop} className={s.stops_item}>
                                <CheckboxBlock
                                    isChecked={filterStops !== "all" && filterStops.includes(stop)}
                                    changeHandler={handleChange}
                                    value={stop}
                                    text={`${stop === 0 ? "Без" : stop} ${getCorrectWordStop(stop)}`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
