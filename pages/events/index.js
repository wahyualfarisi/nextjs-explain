import { Fragment } from "react";
import { useRouter } from 'next/router';
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data"
import EventList from './../../components/events/EventList';

function Events(){
    const router = useRouter();
    const events = getAllEvents();

    const findsEventHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push( fullPath );
    }

    return (
        <Fragment>
            <EventSearch onSearch={findsEventHandler} />
            <EventList items={events} />
        </Fragment>
    )
}

export default Events