import React from 'react';
import Trips from "./trips";
import {act, screen, render, waitFor} from '@testing-library/react';


describe('<Trips/>', () => {

    beforeEach(() => {
        sessionStorage.setItem('validUser', 'true')
    });

    let component

    test('renders the component', async () => {
        await act(async () => {
            component = await render(<Trips/>)
        })
        expect(component).toBeDefined()
    })

    test('All the elements are present on the component', async () => {
        await act(async () => {
            component = await render(<Trips/>)
        })
        const fromStationDropdown = screen.getByText('From Station')
        expect(fromStationDropdown).toBeDefined()

        const toStationDropdown = screen.getByText('To Station')
        expect(toStationDropdown).toBeDefined()

        const dateInput = screen.getByRole('textbox')
        expect(dateInput).toBeDefined()

    })
});
