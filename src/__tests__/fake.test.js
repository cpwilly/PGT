import * as router from 'react-router'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from "react-validation/build/input";
import FilterPage from '../pages/FilterPage.js'

describe('FilterPage', () => {
    const ui = userEvent.setup()
    const navigate = jest.fn()

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

    it('renders filter page correctly', async () => {
        render(withRouter(<FilterPage />))

        // expect(screen.getByText("RateMyDorm")).toBeInTheDocument();
        expect(screen.getByText("Tyler")).toBeInTheDocument();
        expect(screen.getByText("Kusch")).toBeInTheDocument();
        expect(screen.getByText("Stephanie Tubbs Jones")).toBeInTheDocument();
        expect(screen.getByText("Village House 7")).toBeInTheDocument();
        // expect(screen.getByText("Sign out")).toBeInTheDocument();
        // await ui.click(screen.queryByText('Home'))

        // expect(navigate).toHaveBeenCalledWith('/home')
    })
})