export interface ITest {
  id?: string
  discipline?: string
  subject?: string
  level?: string
  title?: string
  difficulty?: string
  duration?: string | number
  questions: IQuestion[]

  [key: string]: any
}

export interface IQuestion {
  _id?: string
  question: string
  answers?: IAnswer[]
  selected: number[]
}

export interface IAnswer {
  id?: string
  text: string
  correct: boolean
}

export interface IResult {
  test: string
  user: string
  questions: {
    title: string
    answer: string[]
    correct: boolean
  }[]
}
