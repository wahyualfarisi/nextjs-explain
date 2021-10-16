import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../../dummy-data';

//Component
import EventSummary from './../../components/events/event-summary';
import EventLogistics from './../../components/events/event-logistics';
import EventContent from './../../components/events/event-content';

function EventDetailPage(){
    const router = useRouter();
    const event  = getEventById(router.query.id);
    

    if(!event) {
        return <p>Event Not Found !</p>
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics 
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>

        </Fragment>
    )
}

export default EventDetailPage