export function getCorrectWordStop(count: number) {
    const words = {
        single: "пересадка",
        few: "пересадки",
        many: "пересадок"
    };

    if ((count >= 10 && count <= 20) || count % 10 >= 5 || count === 0) {
        return words.many;
    } else if (count % 10 === 1) {
        return words.single;
    } else {
        return words.few;
    }
}