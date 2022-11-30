import { render, screen } from '@testing-library/react'
import Home from 'pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)
        const heading = screen.getByRole('heading', { level: 1, name: `Welcome to FinChamp!` })
        expect(heading).toBeInTheDocument()
    })
})