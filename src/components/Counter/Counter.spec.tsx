import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe('Counter Component', () => {
    it('should initialize title with the value 0.', () => {
        render(<Counter/>)
        const counterTitle = screen.getByRole('heading', {name: /0/i})
        expect(counterTitle).toBeInTheDocument()
    })

    it('should contain the counter__title class in the title.', () => {
        render(<Counter/>)
        const counterTitle = screen.getByRole('heading', {name: /0/i})
        expect(counterTitle).toHaveClass('counter__title')
    })

    it('should not start the title with classes counter__title--increment and counter__title--decrement.', () => {
        render(<Counter/>)
        const counterTitle = screen.getByRole('heading', {name: /0/i})
        expect(counterTitle).not.toHaveClass('counter__title--increment')
        expect(counterTitle).not.toHaveClass('counter__title--decrement')
    })

    it('should have an increment button.', () => {
        render(<Counter/>)
        const buttonIncrement = screen.getByRole('button', {
            name: /incrementar/i
        })
        expect(buttonIncrement).toBeInTheDocument()
    })

    it('should have an increment button with class button and button--increment.', () => {
        render(<Counter/>)
        const buttonIncrement = screen.getByRole('button', {
            name: /incrementar/i
        })
        expect(buttonIncrement).toHaveClass('button')
        expect(buttonIncrement).toHaveClass('button--increment')
    })

    it('should have an decrement button.', () => {
        render(<Counter/>)
        const buttonIncrement = screen.getByRole('button', {
            name: /decrementar/i
        })
        expect(buttonIncrement).toBeInTheDocument()
    })

    it('should have an decrement button with class button and button--decrement.', () => {
        render(<Counter/>)
        const buttonIncrement = screen.getByRole('button', {
            name: /decrementar/i
        })
        expect(buttonIncrement).toHaveClass('button')
        expect(buttonIncrement).toHaveClass('button--decrement')
    })

    it('should increment + 1 when clicking increment button', () => {
        render(<Counter/>)
        const buttonIncrement = screen.getByRole('button', {
            name: /incrementar/i
        })
        expect(screen.queryByRole('heading', {name: /1/i})).toBeNull()

        userEvent.click(buttonIncrement)

        expect(screen.getByRole('heading', {name: /1/i})).toBeInTheDocument()
    })

    it('should increment -1 when clicking decrement button', () => {
        render(<Counter/>)
        const buttonIncrement = screen.getByRole('button', {
            name: /decrementar/i
        })
        expect(screen.queryByRole('heading', {name: /-1/i})).toBeNull()

        userEvent.click(buttonIncrement)

        expect(screen.getByRole('heading', {name: /-1/i})).toBeInTheDocument()
    })

    it('should add to classes counter__title--increment in the title, when the value is greater than 0.', () => {
        render(<Counter/>)
        const buttonIncrement = screen.getByRole('button', {
            name: /incrementar/i
        })

        expect(screen.getByRole('heading', {name: /0/i})).not.toHaveClass('counter__title--increment')
        userEvent.click(buttonIncrement)
        expect(screen.getByRole('heading', {name: /1/i})).toHaveClass('counter__title--increment')
    })

    it('should add to classes counter__title--decrement in the title, when the value is less than 0.', () => {
        render(<Counter/>)
        const buttonDecrement = screen.getByRole('button', {
            name: /decrementar/i
        })

        expect(screen.getByRole('heading', {name: /0/i})).not.toHaveClass('counter__title--decrement')
        userEvent.click(buttonDecrement)
        expect(screen.getByRole('heading', {name: /-1/i})).toHaveClass('counter__title--decrement')
    })
})