import { shallow } from 'enzyme'
import React from 'react'
import Section from '../../src/components/Section'
import Stats from '../../src/components/Stats'
const helpers = require('../../src/helpers/game.helpers')

describe('Stats', () => {
  it('renders', () => {
    const wrapper = shallow(<Stats marksInBoard={0} />)
    expect(wrapper).toBeDefined()
  })

  it('renders 3 sections', () => {
    const wrapper = shallow(<Stats marksInBoard={0} />)
    expect(wrapper.find(Section)).toHaveLength(3)
  })

  describe('first section', () => {
    const mock = jest.spyOn(helpers, 'getPlayerMessage')
    mock.mockReturnValue('Test Player')
    const nextPlayer = { id: 1, mark: 'X' }
    const wrapper = shallow(<Stats marksInBoard={0} nextPlayer={nextPlayer} />)
    const firstSection = wrapper.find(Section).at(0)

    it('has nextPlayer as id', () => {
      expect(firstSection.prop('id')).toBe('nextPlayer')
    })

    it('has Next Player: as label', () => {
      expect(firstSection.prop('label')).toBe('Next Player:')
    })

    it('calls function with nextPlayer param', () => {
      expect(mock).toHaveBeenNthCalledWith(1, nextPlayer)
    })

    it('has message from getPlayerMessage function', () => {
      expect(firstSection.prop('message')).toBe('Test Player')
    })
  })

  describe('second section', () => {
    const marksInBoard = Math.floor(Math.random() * 100)
    const wrapper = shallow(<Stats marksInBoard={marksInBoard} />)
    const section = wrapper.find(Section).at(1)

    it('has winner as id', () => {
      expect(section.prop('id')).toBe('numberOfMarks')
    })

    it('has Winner: as label', () => {
      expect(section.prop('label')).toBe('Number of marks:')
    })

    it('has message from getPlayerMessage function', () => {
      expect(section.prop('message')).toBe(marksInBoard)
    })
  })

  describe('third section', () => {
    const mock = jest.spyOn(helpers, 'getPlayerMessage')
    mock.mockReturnValue('Player who won')
    const winner = { id: 1, mark: 'X' }
    const wrapper = shallow(<Stats marksInBoard={0} winner={winner} />)
    const section = wrapper.find(Section).at(2)

    it('has winner as id', () => {
      expect(section.prop('id')).toBe('winner')
    })

    it('has Winner: as label', () => {
      expect(section.prop('label')).toBe('Winner:')
    })

    it('calls function with nextPlayer param', () => {
      expect(mock).toHaveBeenNthCalledWith(1, winner)
    })

    it('has message from getPlayerMessage function', () => {
      expect(section.prop('message')).toBe('Player who won')
    })
  })
})
