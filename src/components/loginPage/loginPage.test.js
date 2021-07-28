import React from 'react';
import LoginPage from "./loginPage";
import {act, screen, render, waitFor} from '@testing-library/react';


describe('<LoginPage/>', () => {
    let component

    test('renders the component', async () => {
        await act(async () => {
            component = await render(<LoginPage/>)
        })
        expect(component).toBeDefined()
    })

    test('All the elements are present on the component', async () => {
        await act(async () => {
            component = await render(<LoginPage/>)
        })
        const userNameElement = screen.getByLabelText('User name')
        expect(userNameElement).toBeDefined()

        const passwordElement = screen.getByLabelText('Password')
        expect(passwordElement).toBeDefined()
    })
});
