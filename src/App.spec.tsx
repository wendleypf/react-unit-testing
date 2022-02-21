import {findByText, render, waitForElementToBeRemoved} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe('App Component', () => {
    it('should render list items', () => {
        const {getByText} = render(<App/>)
        expect(getByText('Wendley')).toBeInTheDocument()
        expect(getByText('Karol')).toBeInTheDocument()
        expect(getByText('Wyslayne')).toBeInTheDocument()
        expect(getByText('Wylyane')).toBeInTheDocument()
    })

    it('should be able to add new item to the list', async () => {
        const {getByText, getByRole, findByText} = render(<App/>)
        const input = getByRole('textbox')
        const addButton = getByText(/add/i)

        userEvent.type(input, 'New')
        userEvent.click(addButton)

        expect(await findByText('New')).toBeInTheDocument()
    })

    it('should be able to remove item from list', async () => {
        const {getByText, getAllByText} = render(<App/>)

        const removeButton = getAllByText(/Remove/i)
        userEvent.click(removeButton[0])

        await waitForElementToBeRemoved(() => {
            return getByText('Wendley')
        })
    })
})