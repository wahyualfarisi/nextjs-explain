import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';

function ShowFilterEvent(){
    const router = useRouter();

    const filterData = router.query.slug;

    if(!filterData) {
        return <p className='center'>Loading...</p>
    }

    const filterYear = filterData[0];
    const filterMonth = filterData[1];

    const numYear = +filterYear;
    const numMonth = +filterMonth;

    if( isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 ) {
        return <p>Invalid Filter, please just your value</p>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if(!filteredEvents || filteredEvents.length === 0){
        return <p>No Event Found</p>
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <div>
            <ResultsTitle date={date}  />
            <EventList items={filteredEvents} />
        </div>
    )
}

export default ShowFilterEvent