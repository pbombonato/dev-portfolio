import React from 'react'
import Social from './Social'
import { render } from '@testing-library/react'

describe('<Social />', () => {
    it('is a dummy test', () => {
        render(<Social />)

        expect(1).toBe(1)
    })
})