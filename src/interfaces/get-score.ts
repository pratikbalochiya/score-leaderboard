export interface IGetScoreParams {
  index: number
  randomIndex: number
  shuffleRows: number
  score: number
}

export type IGetScore = (params: IGetScoreParams) => number
