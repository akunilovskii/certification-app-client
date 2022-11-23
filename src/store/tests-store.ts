interface IAnswer {
  id: string
  text: string | number
  correct: boolean
}

export interface ITaxonomy {
  id: string
  discipline: string
  level: string
  subject: string
  tests: ITests[]
}

export interface ITests {
  id: string
  test: ITest[]
}

export interface ITest {
  id: string
  question: string
  answers: IAnswer[]
}

export const tests = [
  {
    id: 'd1',
    discipline: 'Mathematics',
    level: 'Grade 1',
    subject: 'Algebra G1',
    tests: [
      {
        id: 't1',
        title: 'Addition Test 1',
        test: [
          {
            id: 'q1',
            question: '2 + 2',
            answers: [
              {
                id: 'a1',
                text: 3,
                correct: false,
              },
              {
                id: 'a2',
                text: 1,
                correct: false,
              },
              {
                id: 'a3',
                text: 5,
                correct: false,
              },
              {
                id: 'a4',
                text: 4,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            question: '4 + 2',
            answers: [
              {
                id: 'a1',
                text: 9,
                correct: false,
              },
              {
                id: 'a2',
                text: 8,
                correct: false,
              },
              {
                id: 'a3',
                text: 5,
                correct: false,
              },
              {
                id: 'a4',
                text: 6,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            question: '4 + 8',
            answers: [
              {
                id: 'a1',
                text: 6,
                correct: false,
              },
              {
                id: 'a2',
                text: 7,
                correct: false,
              },
              {
                id: 'a3',
                text: 15,
                correct: false,
              },
              {
                id: 'a4',
                text: 12,
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 't2',
        title: 'Multiplication Test 1',
        test: [
          {
            id: 'q1',
            question: '2 * 2',
            answers: [
              {
                id: 'a1',
                text: 8,
                correct: false,
              },
              {
                id: 'a2',
                text: 3,
                correct: false,
              },
              {
                id: 'a3',
                text: 6,
                correct: false,
              },
              {
                id: 'a4',
                text: 4,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            question: '4 * 2',
            answers: [
              {
                id: 'a1',
                text: 9,
                correct: false,
              },
              {
                id: 'a2',
                text: 6,
                correct: false,
              },
              {
                id: 'a3',
                text: 5,
                correct: false,
              },
              {
                id: 'a4',
                text: 8,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            question: '4 * 4',
            answers: [
              {
                id: 'a1',
                text: 18,
                correct: false,
              },
              {
                id: 'a2',
                text: 12,
                correct: false,
              },
              {
                id: 'a3',
                text: 15,
                correct: false,
              },
              {
                id: 'a4',
                text: 16,
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 't3',
        title: 'Division Test 1',
        test: [
          {
            id: 'q1',
            question: '2 / 2',
            answers: [
              {
                id: 'a1',
                text: 3,
                correct: false,
              },
              {
                id: 'a2',
                text: 2,
                correct: false,
              },
              {
                id: 'a3',
                text: 4,
                correct: false,
              },
              {
                id: 'a4',
                text: 1,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            question: '4 / 2',
            answers: [
              {
                id: 'a1',
                text: 4,
                correct: false,
              },
              {
                id: 'a2',
                text: 1,
                correct: false,
              },
              {
                id: 'a3',
                text: 8,
                correct: false,
              },
              {
                id: 'a4',
                text: 2,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            question: '4 / 4',
            answers: [
              {
                id: 'a1',
                text: 2,
                correct: false,
              },
              {
                id: 'a2',
                text: 4,
                correct: false,
              },
              {
                id: 'a3',
                text: 3,
                correct: false,
              },
              {
                id: 'a4',
                text: 1,
                correct: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'd2',
    discipline: 'Chemistry',
    level: 'Grade 3',
    subject: 'Organic',
    tests: [
      {
        id: 't1',
        title: 'Elements Test 1',
        test: [
          {
            id: 'q1',
            question: 'Oxygen',
            answers: [
              {
                id: 'a1',
                text: 'S2',
                correct: false,
              },
              {
                id: 'O3',
                text: 1,
                correct: false,
              },
              {
                id: 'H2',
                text: 5,
                correct: false,
              },
              {
                id: 'O2',
                text: 4,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            question: 'Water',
            answers: [
              {
                id: 'HO2',
                text: 9,
                correct: false,
              },
              {
                id: 'OH2',
                text: 8,
                correct: false,
              },
              {
                id: 'O2H',
                text: 5,
                correct: false,
              },
              {
                id: 'H20',
                text: 6,
                correct: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'd3',
    discipline: 'Mathematics',
    level: 'Grade 2',
    subject: 'Geometry G1',
    tests: [
      {
        id: 't1',
        title: 'Number of angles in shapes',
        test: [
          {
            id: 'q1',
            question: 'How many angles does Triangle have',
            answers: [
              {
                id: 'a1',
                text: 2,
                correct: false,
              },
              {
                id: 'a2',
                text: 4,
                correct: false,
              },
              {
                id: 'a3',
                text: 5,
                correct: false,
              },
              {
                id: 'a4',
                text: 3,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            question: 'How many angles does Circle have',
            answers: [
              {
                id: 'a1',
                text: 3,
                correct: false,
              },
              {
                id: 'a2',
                text: 2,
                correct: false,
              },
              {
                id: 'a3',
                text: 1,
                correct: false,
              },
              {
                id: 'a4',
                text: 0,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            question: 'How many angles does Rectangle have',
            answers: [
              {
                id: 'a1',
                text: 2,
                correct: false,
              },
              {
                id: 'a2',
                text: 3,
                correct: false,
              },
              {
                id: 'a3',
                text: 5,
                correct: false,
              },
              {
                id: 'a4',
                text: 4,
                correct: true,
              },
            ],
          },
        ],
      },
    ],
  },
]
