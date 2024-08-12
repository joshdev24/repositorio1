import data from "../data";


export function getContactInfoById(id) {
    return data.find((chat) => Number(chat.id) === Number (id));
}