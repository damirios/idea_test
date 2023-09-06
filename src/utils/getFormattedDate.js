const months = {
    "01": "янв",
    "02": "фев",
    "03": "мар",
    "04": "апр",
    "05": "мая",
    "06": "июн",
    "07": "июл",
    "08": "авг",
    "09": "сен",
    "10": "окт",
    "11": "ноя",
    "12": "дек",
};

const weekdays = {
    0: "Вс",
    1: "Пн",
    2: "Вт",
    3: "Ср",
    4: "Чт",
    5: "Пт",
    6: "Сб",
}

export function getFormattedDate(date) {
    let [day, month, year] = date.split(".");
    year = "20" + year;
    const weekday = new Date(+year, +month - 1, +day).getDay();
    return `${+day} ${months[month]} ${year}, ${weekdays[weekday]}`;
}