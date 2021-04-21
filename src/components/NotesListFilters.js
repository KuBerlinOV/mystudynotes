import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setEndDate, setStartDate, setTextFilter, sortByDate, sortByStatus } from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

const NotesListFilters = (props) => {
    const [calendarFocused, setCalendarFocused] = useState(null)


    //Date picker logic and on change manipulation
    const handleDatesChange = ({ startDate, endDate }) => {
        props.dispatch(setStartDate(startDate))
        props.dispatch(setEndDate(endDate))
    }

    const handleOnFocusChange = (calFocused) => {
        setCalendarFocused(calFocused)
    }

    return (
        <div>
            <div className="search-notes">
                <h3>Search</h3>
                <input type="text" value={props.filters.text} onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value))
                }} />
            </div>
            <div className="sort-notes" >
                <h3>Sort by</h3>
                <select
                    value={props.filters.sortBy}
                    onChange={(e) => {
                        e.target.value === "status" ? props.dispatch(sortByStatus()) : props.dispatch(sortByDate())
                    }}>
                    <option value="status">Status</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                    startDate={props.filters.startDate}
                    endDate={props.filters.endDate}
                    onDatesChange={handleDatesChange}
                    focusedInput={calendarFocused}
                    onFocusChange={handleOnFocusChange}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(NotesListFilters);