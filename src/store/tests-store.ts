interface IAnswer {
  id: number
  text: string | number
  correct: boolean
}

export interface ITaxonomy {
  id: number
  discipline: string
  level: string
  subject: string
  tests: ITests[]
}

export interface ITests {
  id: number
  test: ITest[]
}

export interface ITest {
  id: number
  question: string
  answers: IAnswer[]
}

export const tests = [
  {
    id: 1,
    discipline: 'Mathematics',
    level: 'Grade 3',
    subject: 'Geometry',
    tests: [
      {
        id: 10,
        title: 'First test',
        test: [
          {
            id: 100,
            question: '2 x 2',
            answers: [
              {
                id: 1000,
                text: 3,
                correct: false,
              },
              {
                id: 2000,
                text: 1,
                correct: false,
              },
              {
                id: 3000,
                text: 5,
                correct: false,
              },
              {
                id: 4000,
                text: 4,
                correct: true,
              },
            ],
          },
          {
            id: 200,
            question: '4 x 2',
            answers: [
              {
                id: 10001,
                text: 9,
                correct: false,
              },
              {
                id: 2001,
                text: 8,
                correct: false,
              },
              {
                id: 3001,
                text: 5,
                correct: false,
              },
              {
                id: 4001,
                text: 4,
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 20,
        title: 'Second test',
        test: [
          {
            id: 102,
            question: '345 x 768',
            answers: [
              {
                id: 1003,
                text: 123412341,
                correct: false,
              },
              {
                id: 2003,
                text: 245735685,
                correct: false,
              },
              {
                id: 3003,
                text: 974665434,
                correct: false,
              },
              {
                id: 4003,
                text: 198734687,
                correct: true,
              },
            ],
          },
          {
            id: 201,
            question: '3 x 5',
            answers: [
              {
                id: 1004,
                text: 10,
                correct: false,
              },
              {
                id: 2004,
                text: 9,
                correct: false,
              },
              {
                id: 3004,
                text: 13,
                correct: false,
              },
              {
                id: 4004,
                text: 15,
                correct: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    discipline: 'Chemistry',
    level: 'Grade 4',
    subject: 'Organic',
    tests: [
      {
        id: 30,
        title: 'Third test',
        test: [
          {
            id: 101,
            question: '2 x 2',
            answers: [
              {
                id: 1005,
                text: 3,
                correct: false,
              },
              {
                id: 2005,
                text: 1,
                correct: false,
              },
              {
                id: 3005,
                text: 5,
                correct: false,
              },
              {
                id: 4005,
                text: 4,
                correct: true,
              },
            ],
          },
          {
            id: 202,
            question: '4 x 2',
            answers: [
              {
                id: 1006,
                text: 9,
                correct: false,
              },
              {
                id: 2006,
                text: 8,
                correct: false,
              },
              {
                id: 3006,
                text: 5,
                correct: false,
              },
              {
                id: 4006,
                text: 4,
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 40,
        title: 'Fourth test',
        test: [
          {
            id: 107,
            question: '345 x 768',
            answers: [
              {
                id: 1007,
                text: 123412341,
                correct: false,
              },
              {
                id: 2007,
                text: 245735685,
                correct: false,
              },
              {
                id: 3007,
                text: 974665434,
                correct: false,
              },
              {
                id: 4007,
                text: 198734687,
                correct: true,
              },
            ],
          },
          {
            id: 207,
            question: '3 x 5',
            answers: [
              {
                id: 1008,
                text: 10,
                correct: false,
              },
              {
                id: 2008,
                text: 9,
                correct: false,
              },
              {
                id: 3008,
                text: 13,
                correct: false,
              },
              {
                id: 4008,
                text: 15,
                correct: true,
              },
            ],
          },
        ],
      },
    ],
  },
]
