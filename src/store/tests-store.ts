export interface ITaxonomy {
  id: string
  discipline: string
  level: string
  subject: string
  tests: ITests[]
}

export interface ITests {
  id: string
  title: string
  difficulty: string
  duration: number
  questions: IQuestion[]
}

export interface IQuestion {
  id: string
  selected: number[]
  question: string
  answers: IAnswer[]
}

export interface IAnswer {
  id: string
  text: string | number
  correct: boolean
}

export const tests: ITaxonomy[] = [
  {
    id: 'd1',
    discipline: 'Mathematics',
    level: 'Grade 1',
    subject: 'Algebra G1',
    tests: [
      {
        id: 't1',
        title: 'Addition Test 1',
        difficulty: 'easy',
        duration: 30,
        questions: [
          {
            id: 'q1',
            selected: [],
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
            selected: [],
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
            selected: [],
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
        difficulty: 'easy',
        duration: 30,
        questions: [
          {
            id: 'q1',
            selected: [],
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
            selected: [],
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
            selected: [],
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
        difficulty: 'easy',
        duration: 25,
        questions: [
          {
            id: 'q1',
            selected: [],
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
            selected: [],
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
            selected: [],
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
      {
        id: 't6',
        title: 'Subtraction Test 1',
        difficulty: 'easy',
        duration: 20,
        questions: [
          {
            id: 'q1',
            selected: [],
            question: '8 - 2',
            answers: [
              {
                id: 'a1',
                text: 4,
                correct: false,
              },
              {
                id: 'a2',
                text: 7,
                correct: false,
              },
              {
                id: 'a3',
                text: 2,
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
            id: 'q2',
            selected: [],
            question: '7 - 2',
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
                text: 5,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            selected: [],
            question: '4 - 4',
            answers: [
              {
                id: 'a1',
                text: 2,
                correct: false,
              },
              {
                id: 'a2',
                text: 1,
                correct: false,
              },
              {
                id: 'a3',
                text: 3,
                correct: false,
              },
              {
                id: 'a4',
                text: 0,
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
    level: 'Grade 1',
    subject: 'Organic',
    tests: [
      {
        id: 't4',
        title: 'Elements Test 1',
        difficulty: 'easy',
        duration: 40,
        questions: [
          {
            id: 'q1',
            selected: [],
            question: 'Oxygen',
            answers: [
              {
                id: 'a1',
                text: 'S2',
                correct: false,
              },
              {
                id: 'a2',
                text: 'O3',
                correct: false,
              },
              {
                id: 'a3',
                text: 'H2',
                correct: false,
              },
              {
                id: 'a4',
                text: 'O2',
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            selected: [],
            question: 'Water',
            answers: [
              {
                id: 'a1',
                text: 'HO2',
                correct: false,
              },
              {
                id: 'a2',
                text: 'OH2',
                correct: false,
              },
              {
                id: 'a3',
                text: 'O2H',
                correct: false,
              },
              {
                id: 'a4',
                text: 'H20',
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
    subject: 'Geometry G2',
    tests: [
      {
        id: 't5',
        title: 'Number of angles in shapes',
        difficulty: 'easy',
        duration: 10,
        questions: [
          {
            id: 'q1',
            selected: [],
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
            selected: [],
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
            selected: [],
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
  {
    id: 'd4',
    discipline: 'Mathematics',
    level: 'Grade 2',
    subject: 'Algebra G2',
    tests: [
      {
        id: 't7',
        title: 'Addition Test 1',
        difficulty: 'medium',
        duration: 30,
        questions: [
          {
            id: 'q1',
            selected: [],
            question: '12 + 22',
            answers: [
              {
                id: 'a1',
                text: 32,
                correct: false,
              },
              {
                id: 'a2',
                text: 30,
                correct: false,
              },
              {
                id: 'a3',
                text: 28,
                correct: false,
              },
              {
                id: 'a4',
                text: 34,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            selected: [],
            question: '14 + 32',
            answers: [
              {
                id: 'a1',
                text: 48,
                correct: false,
              },
              {
                id: 'a2',
                text: 43,
                correct: false,
              },
              {
                id: 'a3',
                text: 45,
                correct: false,
              },
              {
                id: 'a4',
                text: 46,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            selected: [],
            question: '24 + 18',
            answers: [
              {
                id: 'a1',
                text: 39,
                correct: false,
              },
              {
                id: 'a2',
                text: 47,
                correct: false,
              },
              {
                id: 'a3',
                text: 45,
                correct: false,
              },
              {
                id: 'a4',
                text: 42,
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 't8',
        title: 'Multiplication Test 1',
        difficulty: 'medium',
        duration: 20,
        questions: [
          {
            id: 'q1',
            selected: [],
            question: '12 * 6',
            answers: [
              {
                id: 'a1',
                text: 74,
                correct: false,
              },
              {
                id: 'a2',
                text: 76,
                correct: false,
              },
              {
                id: 'a3',
                text: 75,
                correct: false,
              },
              {
                id: 'a4',
                text: 72,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            selected: [],
            question: '40 * 2',
            answers: [
              {
                id: 'a1',
                text: 90,
                correct: false,
              },
              {
                id: 'a2',
                text: 70,
                correct: false,
              },
              {
                id: 'a3',
                text: 60,
                correct: false,
              },
              {
                id: 'a4',
                text: 80,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            selected: [],
            question: '14 * 12',
            answers: [
              {
                id: 'a1',
                text: 160,
                correct: false,
              },
              {
                id: 'a2',
                text: 164,
                correct: false,
              },
              {
                id: 'a3',
                text: 158,
                correct: false,
              },
              {
                id: 'a4',
                text: 168,
                correct: true,
              },
            ],
          },
          {
            id: 'q4',
            selected: [],
            question: '10 * 12',
            answers: [
              {
                id: 'a1',
                text: 130,
                correct: false,
              },
              {
                id: 'a2',
                text: 115,
                correct: false,
              },
              {
                id: 'a3',
                text: 130,
                correct: false,
              },
              {
                id: 'a4',
                text: 120,
                correct: true,
              },
            ],
          },
          {
            id: 'q5',
            selected: [],
            question: '14 * 10',
            answers: [
              {
                id: 'a1',
                text: 150,
                correct: false,
              },
              {
                id: 'a2',
                text: 145,
                correct: false,
              },
              {
                id: 'a3',
                text: 135,
                correct: false,
              },
              {
                id: 'a4',
                text: 140,
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 't9',
        title: 'Division Test 1',
        difficulty: 'hard',
        duration: 5,
        questions: [
          {
            id: 'q1',
            selected: [],
            question: '121 / 11',
            answers: [
              {
                id: 'a1',
                text: 12,
                correct: false,
              },
              {
                id: 'a2',
                text: 10,
                correct: false,
              },
              {
                id: 'a3',
                text: 9,
                correct: false,
              },
              {
                id: 'a4',
                text: 11,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            selected: [],
            question: '428 / 2',
            answers: [
              {
                id: 'a1',
                text: 234,
                correct: false,
              },
              {
                id: 'a2',
                text: 204,
                correct: false,
              },
              {
                id: 'a3',
                text: 224,
                correct: false,
              },
              {
                id: 'a4',
                text: 214,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            selected: [],
            question: '250 / 5',
            answers: [
              {
                id: 'a1',
                text: 60,
                correct: false,
              },
              {
                id: 'a2',
                text: 55,
                correct: false,
              },
              {
                id: 'a3',
                text: 45,
                correct: false,
              },
              {
                id: 'a4',
                text: 50,
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 't10',
        title: 'Subtraction Test 1',
        difficulty: 'easy',
        duration: 20,
        questions: [
          {
            id: 'q1',
            selected: [],
            question: '18 - 8',
            answers: [
              {
                id: 'a1',
                text: 14,
                correct: false,
              },
              {
                id: 'a2',
                text: 12,
                correct: false,
              },
              {
                id: 'a3',
                text: 8,
                correct: false,
              },
              {
                id: 'a4',
                text: 10,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            selected: [],
            question: '70 - 30',
            answers: [
              {
                id: 'a1',
                text: 30,
                correct: false,
              },
              {
                id: 'a2',
                text: 45,
                correct: false,
              },
              {
                id: 'a3',
                text: 35,
                correct: false,
              },
              {
                id: 'a4',
                text: 40,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            selected: [],
            question: '48 - 26',
            answers: [
              {
                id: 'a1',
                text: 26,
                correct: false,
              },
              {
                id: 'a2',
                text: 24,
                correct: false,
              },
              {
                id: 'a3',
                text: 20,
                correct: false,
              },
              {
                id: 'a4',
                text: 22,
                correct: true,
              },
            ],
          },
          {
            id: 'q4',
            selected: [],
            question: '28 - 26',
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
                text: 0,
                correct: false,
              },
              {
                id: 'a4',
                text: 2,
                correct: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'd5',
    discipline: 'Mathematics',
    level: 'Grade 2',
    subject: 'Algebra G2',
    tests: [
      {
        id: 't11',
        title: 'Addition Test 2',
        difficulty: 'easy',
        duration: 20,
        questions: [
          {
            id: 'q1',
            selected: [],
            question: '6 + 1',
            answers: [
              {
                id: 'a1',
                text: 3,
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
                text: 7,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            selected: [],
            question: '6 + 12',
            answers: [
              {
                id: 'a1',
                text: 22,
                correct: false,
              },
              {
                id: 'a2',
                text: 20,
                correct: false,
              },
              {
                id: 'a3',
                text: 16,
                correct: false,
              },
              {
                id: 'a4',
                text: 18,
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 't12',
        title: 'Multiplication Test 2',
        difficulty: 'easy',
        duration: 10,
        questions: [
          {
            id: 'q1',
            selected: [],
            question: '2 * 3',
            answers: [
              {
                id: 'a1',
                text: 7,
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
                text: 6,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            selected: [],
            question: '4 * 10',
            answers: [
              {
                id: 'a1',
                text: 44,
                correct: false,
              },
              {
                id: 'a2',
                text: 42,
                correct: false,
              },
              {
                id: 'a3',
                text: 38,
                correct: false,
              },
              {
                id: 'a4',
                text: 40,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            selected: [],
            question: '14 * 2',
            answers: [
              {
                id: 'a1',
                text: 24,
                correct: false,
              },
              {
                id: 'a2',
                text: 30,
                correct: false,
              },
              {
                id: 'a3',
                text: 26,
                correct: false,
              },
              {
                id: 'a4',
                text: 28,
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 't13',
        title: 'Division Test 2',
        difficulty: 'easy',
        duration: 15,
        questions: [
          {
            id: 'q1',
            selected: [],
            question: '20 / 2',
            answers: [
              {
                id: 'a1',
                text: 11,
                correct: false,
              },
              {
                id: 'a2',
                text: 12,
                correct: false,
              },
              {
                id: 'a3',
                text: 8,
                correct: false,
              },
              {
                id: 'a4',
                text: 10,
                correct: true,
              },
            ],
          },
          {
            id: 'q2',
            selected: [],
            question: '14 / 2',
            answers: [
              {
                id: 'a1',
                text: 4,
                correct: false,
              },
              {
                id: 'a2',
                text: 8,
                correct: false,
              },
              {
                id: 'a3',
                text: 6,
                correct: false,
              },
              {
                id: 'a4',
                text: 7,
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 't14',
        title: 'Subtraction Test 2',
        difficulty: 'easy',
        duration: 10,
        questions: [
          {
            id: 'q1',
            selected: [],
            question: '18 - 12',
            answers: [
              {
                id: 'a1',
                text: 4,
                correct: false,
              },
              {
                id: 'a2',
                text: 5,
                correct: false,
              },
              {
                id: 'a3',
                text: 2,
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
            id: 'q2',
            selected: [],
            question: '17 - 5',
            answers: [
              {
                id: 'a1',
                text: 9,
                correct: false,
              },
              {
                id: 'a2',
                text: 10,
                correct: false,
              },
              {
                id: 'a3',
                text: 11,
                correct: false,
              },
              {
                id: 'a4',
                text: 12,
                correct: true,
              },
            ],
          },
          {
            id: 'q3',
            selected: [],
            question: '14 - 4',
            answers: [
              {
                id: 'a1',
                text: 12,
                correct: false,
              },
              {
                id: 'a2',
                text: 11,
                correct: false,
              },
              {
                id: 'a3',
                text: 13,
                correct: false,
              },
              {
                id: 'a4',
                text: 10,
                correct: true,
              },
            ],
          },
        ],
      },
    ],
  },
]

//   d5
//   t14
