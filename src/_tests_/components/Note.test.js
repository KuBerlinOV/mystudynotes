import React from 'react';
import { shallow } from 'enzyme';
import { Note } from '../../components/Note';
import notes from '../fixtures/notes'

describe('Note', () => {
    it('should render Note', () => {
        const wrapper = shallow(<Note {...notes[0]}
        // topic={notes[0].topic}
        // description={notes[0].description}
        // note={notes[0].note}
        // reference={notes[0].reference}
        // tag={notes[0].tag}
        // createdAt={notes[0].createdAt}
        // id={notes[0].id}
        // status={notes[0].status}
        />)
        expect(wrapper).toMatchSnapshot();
    })
})