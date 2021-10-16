import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage(){

    const featureEvents = getFeaturedEvents();

    return (
        <div>
            <h1>Home Page</h1>
            <EventList
                items={featureEvents}
            />
        </div>
    )
}

export default HomePage;