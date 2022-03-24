import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import TicTacToe from '../../src/components/TicTacToe'
describe('Game specs', () => {
  it('should display 9 squares by default', () => {
    render(<TicTacToe />)
    const squares = screen.getAllByRole('square')

    expect(squares).toHaveLength(9)
  })

  it('should display X in the first movement', () => {
    render(<TicTacToe />)
    const squares = screen.getAllByRole('square')

    fireEvent.click(squares[0])

    expect(squares[0].textContent).toBe('X')
  })

  it('should display O in the second movement', () => {
    render(<TicTacToe />)
    const squares = screen.getAllByRole('square')

    fireEvent.click(squares[0])
    fireEvent.click(squares[1])

    expect(squares[1].textContent).toBe('O')
  })
})
