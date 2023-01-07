export interface ITaxonomy {
  id: string
  discipline: string
  level: string
  subject: string
  tests: ITest[]
}

export interface NewITest {
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

export interface ITest {
  id: string
  title: string
  difficulty: string
  duration: number
  questions: IQuestion[]
}

export interface IQuestion {
  _id?: string
  question: string
  answers?: IAnswer[]
  selected: number[]
}

export interface IAnswer {
  id?: string
  text: string | number
  correct: boolean
}
