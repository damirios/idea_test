import { TCurrency, TTicket } from "../../utils/types";
import { TicketItem } from "../TicketItem/TicketItem";
import s from "./styles.module.css";

interface ITicketsListProps {
    className?: string;
    tickets: TTicket[];
    currency: TCurrency;
}

export function TicketsList({ className, tickets, currency }: ITicketsListProps) {
    return (
        <div className={className || ""}>
            <ul>
                {tickets.map((ticket, index) => (
                    <TicketItem currency={currency} ticket={ticket} key={index} />
                ))}
            </ul>
        </div>
    );
}
