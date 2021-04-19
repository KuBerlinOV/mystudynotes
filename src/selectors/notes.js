


const selectNotes = (notes, { text, sortBy, startDate, endDate }) => {
    return notes.filter(note => {
        const descriptionToMatch = note.description.toLowerCase()
        const topicToMatch = note.topic.toLowerCase();
        const textToMatch = text.toLowerCase();

        const textMatch = descriptionToMatch.includes(textToMatch) || topicToMatch.includes(textToMatch) ? true : false;
        const startDateMatch = typeof startDate !== 'number' || note.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || note.createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'status') {
            return a.status === 'mastered' ? 1 : -1
        }
    })
}

export default selectNotes;