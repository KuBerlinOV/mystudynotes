import React from 'react';
import { mount } from 'enzyme';
import { Note } from '../../components/Note';
import notes from '../fixtures/notes'


let wrapper, removeNoteSpy;

beforeEach(() => {
    removeNoteSpy = jest.fn();
    wrapper = mount(<Note {...notes[0]} />);
})

describe('Note', () => {
    it('should render Note', () => {
        // const wrapper = mount(<Note {...notes[0]}
        // // topic={notes[0].topic}
        // // description={notes[0].description}
        // // note={notes[0].note}
        // // reference={notes[0].reference}
        // // tag={notes[0].tag}
        // // createdAt={notes[0].createdAt}
        // // id={notes[0].id}
        // // status={notes[0].status}
        // />)
        expect(wrapper).toMatchSnapshot();
    })
    // it('should dispatch remove note', () => {
    //     wrapper.find('button').at(1).simulate('click')
    //     wrapper.prop('removeNote').dispatch.toHaveBeenCalled()
    // })
})