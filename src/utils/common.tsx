/* eslint-disable @typescript-eslint/no-unused-vars */
// Modules
import { keyframes } from 'styled-components'

// Constants
import { RANDOM_MAX_VALUE } from '../constants/common'

// Interfaces
import { IPlayerData } from '../interfaces/player'
import { IRowSwipeProps } from '../interfaces/row-swipe'

export const getRandomScore = () => {
  return Math.floor(Math.random() * RANDOM_MAX_VALUE)
}

export const getScore = (score: number) => {
  return score + getRandomScore()
}

export const getSortByKey = (sortArr: IPlayerData[]) => {
  return sortArr.sort((p1, p2) => (p1.score < p2.score ? 1 : p1.score > p2.score ? -1 : 0))
}

export const rowSwipe = ({ start, end }: IRowSwipeProps) => keyframes`
    from {
        transform: translateY(${start}px)
    }
    to {
        transform: translateY(${end}px)
    }
`
