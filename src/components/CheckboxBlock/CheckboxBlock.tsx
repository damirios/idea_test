import React from "react";

import s from "./styles.module.css";

interface ICheckboxBlockProps {
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number | string;
    text: string;
    isChecked: boolean;
}

export function CheckboxBlock({ changeHandler, value, text, isChecked }: ICheckboxBlockProps) {
    return (
        <div className={s.flex_box}>
            <input
                type="checkbox"
                id={`checkbox_${value}`}
                checked={isChecked}
                value={value}
                onChange={changeHandler}
                className={s.input}
            />
            <label className={s.label} htmlFor={`checkbox_${value}`}>
                {text}
            </label>
        </div>
    );
}
