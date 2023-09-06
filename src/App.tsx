import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { TicketsList } from "./components/TicketsList/TicketsList";

import "./global.css";
import { tickets } from "./utils/tickets";
import { TCurrency, TFilterStops, TTicket } from "./utils/types";

const allCurrencies: TCurrency[] = ["RUB", "USD", "EUR"];

function App() {
    const [ticketsData, setTicketsData] = useState<TTicket[]>(tickets);
    const [stops, setStops] = useState<number[]>([]);
    const [currency, setCurrency] = useState<TCurrency>("RUB");
    const [filterStops, setFilterStops] = useState<TFilterStops>("all");

    useEffect(() => {
        const newStops: number[] = [];
        ticketsData.forEach((ticket) => {
            if (!newStops.includes(ticket.stops)) {
                newStops.push(ticket.stops);
            }
        });
        newStops.sort((a, b) => a - b);
        setStops(newStops);
    }, []);

    function filterTickets(ticket: TTicket) {
        return filterStops === "all" || filterStops.includes(ticket.stops);
    }

    function handleCurrencyChange(newCurrency: TCurrency) {
        setCurrency(newCurrency);
    }

    function handleFilterStopsChange(newStop: string) {
        if (newStop === "all") {
            setFilterStops(newStop);
        } else if (!isNaN(+newStop)) {
            if (filterStops === "all") {
                setFilterStops([+newStop]);
            } else if (filterStops.includes(+newStop)) {
                if (filterStops.length === 1) {
                    setFilterStops("all");
                } else {
                    setFilterStops(filterStops.filter((stop) => stop !== +newStop));
                }
            } else {
                setFilterStops([...filterStops, +newStop]);
            }
        }
    }

    return (
        <div className="App">
            <Header />
            <div className="content">
                <Sidebar
                    stopsArr={stops}
                    className="sidebar"
                    allCurrencies={allCurrencies}
                    changeCurrency={handleCurrencyChange}
                    currency={currency}
                    changeFilterStops={handleFilterStopsChange}
                    filterStops={filterStops}
                />
                <TicketsList currency={currency} tickets={ticketsData.filter(filterTickets)} className="main_content" />
            </div>
        </div>
    );
}

export default App;
