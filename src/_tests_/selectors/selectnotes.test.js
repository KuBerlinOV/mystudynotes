import moment from 'moment';
import selectNotes from '../../selectors/notes';

const notes = [{
    id: '1',
    topic: 'redux',
    description: 'redux note',
    note: 'here is a note',
    reference: 'some reference',
    tag: 'some tag',
    status: 'mastered',
    createdAt: 0
},
{
    id: '2',
    topic: 'react',
    description: 'react note',
    note: 'here is another note',
    reference: 'some other reference',
    tag: 'some other tag',
    status: 'in progress',
    createdAt: moment(0).subtract(6, 'days').valueOf()
},
{
    id: '3',
    topic: 'moment.js',
    description: 'about moment',
    note: 'here is information',
    reference: 'moment from moment.js',
    tag: 'moment',
    status: 'in progress',
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should filter by text value', () => {
    const filters = {
        text: 'mom',
        sortBy: 'status',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectNotes(notes, filters)

    expect(result).toEqual([notes[2]])
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectNotes(notes, filters);

    expect(result).toEqual([notes[2], notes[0]])
})

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectNotes(notes, filters);

    expect(result).toEqual([notes[0], notes[1]])
})

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectNotes(notes, filters);

    expect(result).toEqual([notes[2], notes[0], notes[1]])
})


test('should filter by status', () => {
    const filters = {
        text: '',
        sortBy: 'status',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectNotes(notes, filters);

    expect(result).toEqual([notes[2], notes[1], notes[0]])
})

