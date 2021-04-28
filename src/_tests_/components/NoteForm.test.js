import React from 'react';
import { shallow } from 'enzyme';
import NoteForm from '../../components/NoteForm';
import notes from '../fixtures/notes';
import { render, fireEvent, cleanup } from '@testing-library/react';

describe('NoteForm', () => {
    it('should render NoteForm correctly', () => {
        const wrapper = shallow(<NoteForm />)
        expect(wrapper).toMatchSnapshot();
    })
    it('should render NoteForm with a note data correctly', () => {
        const wrapper = shallow(<NoteForm noteBeforeUpdate={notes[0]} />)
        expect(wrapper).toMatchSnapshot();
    })
    it('should render error for invalid form submission', () => {
        const wrapper = shallow(<NoteForm />)
        expect(wrapper).toMatchSnapshot()
        wrapper.find('form').simulate('submit', {
            preventDefault: () => { }
        });
        expect(wrapper.findByProps('error')).toBeTruthy()// <--this simulates that the 
        expect(wrapper).toMatchSnapshot()
    })
})
