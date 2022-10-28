import axios from "axios";

const url = "http://localhost:5000/addcard";

export const fetchCards = () => axios.get(url);

export const createCard = (newCard) => axios.post(url, newCard);
