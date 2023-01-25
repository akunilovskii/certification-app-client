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
  shouldSelect: number
  answers?: IAnswer[]
  selected: number[]
  error: Boolean
}

export interface IAnswer {
  id?: string
  text: string
  correct: boolean
}

export interface IResult {
  _id?: string
  createdAt?: string
  test: { title: string }
  user: string
  questions: {
    title: string
    answers: string[]
    correct: boolean
  }[]
}
