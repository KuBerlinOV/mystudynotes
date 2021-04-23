import selectNotes from '../../selectors/notes';

const notes = [{
    id: '1',
    topic: 'redux',
    description: 'redux note',
    note: 'here is a note',
    reference: 'some reference',
    tag: 'some tag',
    createdAt: 10
},
{
    id: '2',
    topic: 'react',
    description: 'react note',
    note: 'here is another note',
    reference: 'some other reference',
    tag: 'some other tag',
    createdAt: 11
},
{
    id: '3',
    topic: 'moment.js',
    description: 'about moment',
    note: 'here is information about moment',
    reference: 'moment from moment.js',
    tag: 'moment',
    createdAt: 3
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