import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByStatus } from '../actions/filters'

const NotesListFilters = (props) => {
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