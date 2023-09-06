import { TCurrency } from "./types";

export const currencySigns: {[x in TCurrency]: string} = {
    "RUB": "₽",
    "USD": "$",
    "EUR": "€",
}

export const currencyToRUB: {[x in TCurrency]: number} = {
    "RUB": 1,
    "USD": (1 / 97),
    "EUR": (1 / 105)
}

export const intlFormats: {[x in TCurrency]: string} = {
    "RUB": "ru-RU",
    "USD": "en-US",
    "EUR": "en-GB"
}