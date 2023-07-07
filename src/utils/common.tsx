/* eslint-disable @typescript-eslint/no-unused-vars */
// Modules
import { keyframes } from 'styled-components'

// Constants
import { PLAYERS } from '../constants/players'
import { RANDOM_MAX_VALUE } from '../constants/common'

// Interfaces
import { IPlayerData } from '../interfaces/player'
import { IGetScore } from '../interfaces/get-score'
import { IRowSwipeProps } from '../interfaces/row-swipe'

export const getRandomIndex = () => {
  return Math.floor(Math.random() * PLAYERS.length)
}

export const getRandomScore = () => {
  return Math.floor(Math.random() * RANDOM_MAX_VALUE)
}

export const getScore: IGetScore = ({ index, randomIndex, shuffleRows, score }) => {
  let isMatch = false
  for (let i = randomIndex - shuffleRows + 1; i <= randomIndex; i++) {
    if (i === index) {
      isMatch = true
    }
  }

  return isMatch
    ? index % 2 === 0
      ? isMatch && score + getRandomScore()
      : isMatch && score - getRandomScore()
    : score
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
