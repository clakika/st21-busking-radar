import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EventForm from './EventForm';
import { startUpdateEvent } from '../../actions/events';

const UpdateEvent = ({ match, history }) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const events = useSelector((state) => state.events)
    const selectedEvent = events.find(event => {
        return event._id === match.params.id
    })
    console.log(match)
    return (
        <EventForm
            user={auth.user}
            event={selectedEvent}
            handleSubmit={((event) => {
                dispatch(startUpdateEvent(selectedEvent._id, event))
                history.push('/events')
            })}
        />
    )
}

export default UpdateEvent