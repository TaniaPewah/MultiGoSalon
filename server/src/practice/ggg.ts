import type { TsumegoProblem } from './problems.js';

/**
 * Converted from Go Game Guru's Weekly Go Problems.
 * Authors: An Younggil 8p and David Ormerod.
 * Source: https://github.com/gogameguru/go-problems
 * License: CC BY-NC-SA 4.0. This file adapts the SGF trees into solution nodes
 * and keeps only variations marked correct. See SOURCES.md.
 */
export const GGG_PROBLEMS: TsumegoProblem[] = [
  {
    id: 'ggg-easy-01',
    title: 'Weekly easy 1',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[14, 15], [15, 15], [16, 15], [17, 15], [18, 15], [12, 16], [14, 16], [13, 17], [16, 18]],
    white: [[15, 16], [16, 16], [18, 16], [14, 17], [16, 17], [18, 17], [14, 18]],
    solution: [
    { move: [17, 18], reply: [17, 17], next: [{ move: [13, 18] }, { move: [15, 18] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-03',
    title: 'Weekly easy 3',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[15, 14], [17, 14], [13, 15], [15, 15], [17, 15], [14, 16], [16, 16], [14, 17], [14, 18]],
    white: [[16, 15], [15, 16], [17, 16], [18, 16], [15, 17], [17, 17], [15, 18]],
    solution: [
    { move: [18, 18], reply: [17, 18], next: [{ move: [16, 17], reply: [16, 18], next: [{ move: [16, 16] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-04',
    title: 'Weekly easy 4',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[15, 16], [17, 16], [18, 16], [15, 17], [15, 18]],
    white: [[14, 15], [15, 15], [16, 15], [17, 15], [18, 15], [14, 16], [14, 17], [14, 18]],
    solution: [
    { move: [17, 18] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-05',
    title: 'Weekly easy 5',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[18, 17], [14, 16], [14, 17], [14, 18], [16, 17], [17, 17], [18, 18]],
    white: [[13, 18], [13, 17], [13, 16], [13, 15], [14, 15], [15, 15], [16, 16], [17, 15], [17, 18]],
    solution: [
    { move: [15, 16], reply: [15, 18], next: [{ move: [15, 17] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-06',
    title: 'Weekly easy 6',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[13, 15], [13, 16], [13, 17], [13, 18], [14, 15], [15, 14], [16, 14], [17, 15], [17, 16], [14, 18]],
    white: [[14, 16], [14, 17], [15, 15], [16, 16], [16, 17], [17, 17], [18, 17], [16, 18], [15, 18]],
    solution: [
    { move: [15, 16], reply: [15, 17], next: [{ move: [16, 15] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-07',
    title: 'Weekly easy 7',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[17, 16], [14, 17], [15, 17], [16, 17], [14, 18], [16, 18], [18, 18]],
    white: [[16, 15], [17, 15], [18, 15], [12, 16], [14, 16], [15, 16], [13, 17], [17, 17]],
    solution: [
    { move: [16, 16], reply: [18, 16], next: [{ move: [18, 17], reply: [17, 18], next: [{ move: [18, 17], reply: [18, 18], next: [{ move: [18, 17] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-09',
    title: 'Weekly easy 9',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[15, 16], [17, 16], [15, 17], [17, 17], [15, 18]],
    white: [[14, 15], [15, 15], [16, 15], [17, 15], [18, 15], [14, 16], [14, 17], [14, 18]],
    solution: [
    { move: [17, 18] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-109',
    title: 'Weekly easy 109',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[14, 15], [15, 15], [16, 15], [11, 16], [12, 16], [13, 16], [17, 16], [11, 17], [15, 17], [17, 17], [12, 18], [17, 18]],
    white: [[16, 11], [16, 13], [17, 14], [17, 15], [14, 16], [15, 16], [16, 16], [12, 17], [13, 17], [16, 17], [14, 18], [16, 18]],
    solution: [
    { move: [14, 17], reply: [15, 18], next: [{ move: [14, 17], reply: [15, 17], next: [{ move: [11, 18], reply: [18, 16], next: [{ move: [13, 18] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-11',
    title: 'Weekly easy 11',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[14, 17], [15, 17], [16, 17], [14, 18], [17, 18]],
    white: [[17, 15], [18, 15], [13, 16], [14, 16], [15, 16], [16, 16], [13, 17], [15, 18]],
    solution: [
    { move: [18, 17], reply: [17, 16], next: [{ move: [17, 17] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-110',
    title: 'Weekly easy 110',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[17, 15], [17, 16], [15, 17], [16, 17], [17, 17]],
    white: [[16, 13], [14, 14], [17, 14], [16, 15], [14, 16], [16, 16], [12, 17], [14, 17]],
    solution: [
    { move: [18, 18], reply: [18, 15], next: [{ move: [18, 16], reply: [15, 18], next: [{ move: [16, 18] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-114',
    title: 'Weekly easy 114',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[1, 14], [6, 14], [1, 15], [2, 15], [6, 15], [3, 16], [4, 16], [5, 16]],
    white: [[2, 14], [3, 15], [4, 15], [5, 15], [2, 16], [6, 16], [2, 17], [6, 17]],
    solution: [
    { move: [3, 14], reply: [4, 14], next: [{ move: [4, 13], reply: [3, 13], next: [{ move: [5, 14], reply: [3, 14], next: [{ move: [3, 12] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-12',
    title: 'Weekly easy 12',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[17, 15], [18, 15], [17, 16], [15, 17], [17, 17], [15, 18]],
    white: [[15, 14], [16, 14], [17, 14], [18, 14], [14, 16], [15, 16], [18, 16], [14, 17], [14, 18], [17, 18]],
    solution: [
    { move: [16, 17], reply: [18, 17], next: [{ move: [16, 18] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-124',
    title: 'Weekly easy 124',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[2, 12], [1, 13], [2, 14], [2, 15], [2, 16], [4, 16], [3, 17]],
    white: [[1, 14], [1, 15], [1, 16], [2, 17], [2, 18]],
    solution: [
    { move: [0, 17], reply: [1, 17], next: [{ move: [0, 18], reply: [0, 14], next: [{ move: [0, 16] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-13',
    title: 'Weekly easy 13',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[17, 16], [18, 16], [15, 17], [16, 17], [15, 18]],
    white: [[17, 15], [18, 15], [14, 16], [15, 16], [16, 16], [14, 17], [14, 18]],
    solution: [
    { move: [17, 18] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-130',
    title: 'Weekly easy 130',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[1, 13], [2, 13], [3, 14], [5, 14], [3, 15], [5, 15], [3, 16], [4, 16], [3, 17], [2, 18], [3, 18]],
    white: [[6, 15], [2, 16], [5, 16], [7, 16], [0, 17], [2, 17], [4, 17], [5, 17], [1, 18]],
    solution: [
    { move: [1, 16], reply: [1, 15], next: [{ move: [2, 15], reply: [1, 17], next: [{ move: [0, 15], reply: [0, 16], next: [{ move: [0, 14] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-131',
    title: 'Weekly easy 131',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[1, 13], [1, 15], [2, 15], [3, 15], [4, 16], [5, 16], [6, 16], [6, 17], [5, 18], [6, 18]],
    white: [[1, 16], [2, 16], [3, 16], [1, 17], [4, 17], [5, 17], [3, 18]],
    solution: [
    { move: [0, 16], reply: [0, 17], next: [{ move: [1, 18], reply: [2, 18], next: [{ move: [3, 17], reply: [2, 17], next: [{ move: [4, 18] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-14',
    title: 'Weekly easy 14',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[16, 15], [18, 15], [16, 16], [17, 16], [14, 17], [16, 17], [14, 18]],
    white: [[17, 13], [15, 14], [16, 14], [17, 14], [17, 15], [13, 16], [14, 16], [15, 16], [13, 17], [17, 17], [13, 18]],
    solution: [
    { move: [17, 18], reply: [18, 17], next: [{ move: [15, 17] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-15',
    title: 'Weekly easy 15',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[14, 16], [15, 16], [16, 16], [17, 16], [12, 16], [11, 15], [11, 17], [11, 18], [15, 17], [16, 18]],
    white: [[12, 18], [12, 17], [13, 17], [14, 17], [14, 18], [15, 18], [16, 17], [17, 17], [18, 17]],
    solution: [
    { move: [17, 18], reply: [18, 18], next: [{ move: [16, 18] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-21',
    title: 'Weekly easy 21',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[0, 17], [1, 17], [3, 17], [4, 17], [5, 17], [3, 18], [5, 18]],
    white: [[1, 15], [2, 15], [0, 16], [1, 16], [3, 16], [4, 16], [5, 16], [6, 16], [2, 17], [6, 17], [6, 18]],
    solution: [
    { move: [1, 18] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-22',
    title: 'Weekly easy 22',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[2, 16], [0, 17], [3, 17], [4, 17], [5, 17], [3, 18], [5, 18]],
    white: [[1, 15], [2, 15], [3, 16], [4, 16], [5, 16], [6, 16], [2, 17], [6, 17]],
    solution: [
    { move: [1, 17], reply: [1, 16], next: [{ move: [1, 18] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-25',
    title: 'Weekly easy 25',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[13, 15], [14, 15], [15, 15], [12, 16], [13, 16], [15, 16], [12, 17], [15, 17], [16, 17], [16, 18]],
    white: [[13, 14], [14, 14], [15, 14], [16, 14], [11, 15], [12, 15], [16, 15], [11, 16], [14, 16], [16, 16], [11, 17], [17, 17], [12, 18], [13, 18], [17, 18]],
    solution: [
    { move: [14, 18] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-27',
    title: 'Weekly easy 27',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[2, 15], [3, 15], [4, 15], [5, 15], [6, 15], [1, 16], [3, 16], [6, 16], [1, 17], [4, 17], [7, 17], [1, 18]],
    white: [[2, 11], [2, 13], [1, 14], [7, 14], [1, 15], [7, 15], [2, 16], [4, 16], [5, 16], [7, 16], [2, 17], [3, 17], [5, 17], [6, 17], [8, 17]],
    solution: [
    { move: [4, 18], reply: [7, 18], next: [{ move: [2, 18] }, { move: [3, 18] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-30',
    title: 'Weekly easy 30',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[2, 14], [3, 14], [4, 14], [5, 14], [6, 15], [1, 16], [2, 16], [6, 16], [0, 17], [6, 17], [1, 18]],
    white: [[4, 15], [3, 16], [5, 16], [1, 17], [2, 17], [3, 17], [4, 17], [5, 17]],
    solution: [
    { move: [3, 15], reply: [5, 15], next: [{ move: [5, 18], reply: [4, 18], next: [{ move: [2, 18] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-31',
    title: 'Weekly easy 31',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[17, 15], [16, 16], [14, 17], [15, 17], [16, 17], [18, 17]],
    white: [[17, 13], [16, 14], [18, 14], [16, 15], [18, 15], [13, 16], [14, 16], [15, 16], [17, 16], [13, 17]],
    solution: [
    { move: [17, 18], reply: [18, 16], next: [{ move: [17, 17] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-35',
    title: 'Weekly easy 35',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[2, 14], [0, 15], [1, 15], [1, 16], [2, 16], [0, 17], [3, 17], [3, 18]],
    white: [[1, 13], [2, 13], [3, 13], [1, 14], [4, 14], [3, 16], [4, 16], [2, 17], [4, 17], [4, 18]],
    solution: [
    { move: [1, 18], reply: [2, 18], next: [{ move: [1, 17] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-37',
    title: 'Weekly easy 37',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[9, 15], [10, 15], [11, 15], [12, 15], [9, 16], [13, 16], [14, 16], [16, 16], [9, 17], [14, 17], [15, 17], [16, 17], [9, 18], [16, 18]],
    white: [[13, 15], [14, 15], [15, 15], [16, 15], [10, 16], [11, 16], [12, 16], [15, 16], [17, 16], [10, 17], [12, 17], [17, 17], [10, 18], [12, 18], [17, 18]],
    solution: [
    { move: [14, 18], reply: [13, 18], next: [{ move: [11, 18] }, { move: [11, 17] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-38',
    title: 'Weekly easy 38',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[16, 9], [16, 13], [17, 13], [16, 14], [13, 15], [14, 15], [15, 15], [13, 16], [15, 16], [14, 17], [16, 17], [13, 18]],
    white: [[11, 13], [13, 14], [14, 14], [15, 14], [17, 14], [12, 15], [16, 15], [17, 15], [12, 16], [16, 16], [12, 17], [13, 17], [17, 17], [17, 18]],
    solution: [
    { move: [16, 18] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-41',
    title: 'Weekly easy 41',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[3, 13], [3, 14], [3, 15], [4, 16], [4, 17]],
    white: [[9, 9], [1, 12], [2, 14], [2, 15], [4, 15], [3, 16], [1, 17], [3, 17]],
    solution: [
    { move: [5, 15], reply: [4, 14], next: [{ move: [5, 13] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-42',
    title: 'Weekly easy 42',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[3, 10], [1, 12], [3, 12], [4, 12], [1, 13], [2, 13], [5, 13], [1, 14], [5, 14], [1, 15], [4, 15], [1, 16], [0, 17], [4, 17]],
    white: [[1, 9], [3, 9], [2, 10], [2, 11], [2, 12], [3, 13], [4, 13], [2, 14], [2, 15], [3, 15], [2, 16], [4, 16], [5, 16], [7, 16], [1, 17], [2, 17]],
    solution: [
    { move: [3, 14], reply: [4, 14], next: [{ move: [3, 14] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-44',
    title: 'Weekly easy 44',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[3, 12], [4, 12], [2, 13], [5, 13], [1, 14], [2, 14], [5, 14], [1, 15], [4, 15], [5, 15], [2, 16], [3, 16], [4, 16]],
    white: [[2, 11], [3, 11], [4, 11], [1, 12], [5, 12], [6, 12], [1, 13], [6, 13], [3, 14], [4, 14], [6, 14], [3, 15], [6, 15], [1, 16], [5, 16], [1, 17], [2, 17], [3, 17], [4, 17], [5, 17]],
    solution: [
    { move: [3, 13] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-46',
    title: 'Weekly easy 46',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[1, 12], [1, 13], [2, 13], [3, 13], [1, 14], [3, 14], [2, 15]],
    white: [[2, 10], [1, 11], [2, 12], [3, 12], [4, 12], [5, 14], [3, 15], [2, 16], [3, 16], [5, 16], [1, 17]],
    solution: [
    { move: [0, 15], reply: [1, 16], next: [{ move: [1, 15], reply: [0, 12], next: [{ move: [0, 13] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-50',
    title: 'Weekly easy 50',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[15, 12], [16, 12], [17, 12], [15, 13], [17, 13], [18, 13], [14, 14], [15, 15], [16, 15], [17, 15], [18, 15]],
    white: [[17, 9], [14, 11], [15, 11], [16, 11], [17, 11], [14, 12], [18, 12], [14, 13], [16, 13], [13, 14], [16, 14], [13, 15], [14, 15], [15, 16], [16, 16], [17, 16]],
    solution: [
    { move: [17, 14], reply: [15, 14], next: [{ move: [14, 14], reply: [15, 14], next: [{ move: [16, 14] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-51',
    title: 'Weekly easy 51',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[0, 10], [1, 10], [2, 10], [3, 10], [3, 11], [3, 12], [3, 13], [3, 14], [3, 15], [3, 16], [1, 17], [2, 17], [3, 17]],
    white: [[0, 11], [1, 11], [2, 11], [0, 12], [2, 12], [0, 13], [1, 13], [2, 13], [2, 14], [1, 16], [2, 16]],
    solution: [
    { move: [1, 15], reply: [2, 15], next: [{ move: [0, 16], reply: [0, 15], next: [{ move: [0, 14], reply: [1, 14], next: [{ move: [1, 12] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-53',
    title: 'Weekly easy 53',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[2, 10], [16, 13], [6, 15], [17, 15], [3, 16], [4, 16], [2, 17]],
    white: [[2, 14], [3, 15], [4, 15], [13, 15], [15, 15], [1, 16], [2, 16], [8, 16]],
    solution: [
    { move: [6, 17] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-56',
    title: 'Weekly easy 56',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[17, 14], [14, 15], [15, 15], [16, 15], [14, 16], [12, 17], [14, 17], [16, 17], [17, 17], [16, 18]],
    white: [[15, 16], [16, 16], [17, 16], [18, 16], [15, 17], [15, 18]],
    solution: [
    { move: [17, 18] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-60',
    title: 'Weekly easy 60',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[17, 12], [15, 13], [15, 14], [15, 15], [17, 15], [18, 15], [16, 16], [17, 16], [17, 17], [18, 17]],
    white: [[16, 14], [17, 14], [18, 14], [16, 15], [11, 16], [14, 16], [15, 16], [16, 17], [16, 18], [17, 18]],
    solution: [
    { move: [15, 17], reply: [14, 17], next: [{ move: [16, 13] }, { move: [17, 13] }, { move: [18, 13] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-63',
    title: 'Weekly easy 63',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[15, 11], [15, 12], [15, 13], [15, 14], [15, 15], [15, 16], [16, 16], [17, 17], [18, 17]],
    white: [[16, 10], [16, 11], [16, 12], [16, 15], [17, 15], [11, 16], [14, 16], [17, 16], [13, 17], [15, 17], [16, 17]],
    solution: [
    { move: [17, 14], reply: [16, 14], next: [{ move: [16, 13], reply: [17, 13], next: [{ move: [18, 16], reply: [18, 14], next: [{ move: [18, 15] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-66',
    title: 'Weekly easy 66',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[16, 13], [17, 13], [18, 13], [14, 14], [15, 14], [14, 15], [17, 15], [15, 16], [14, 17], [16, 17], [17, 17]],
    white: [[17, 11], [15, 12], [15, 13], [16, 14], [17, 14], [18, 14], [15, 15], [18, 15], [16, 16], [17, 16]],
    solution: [
    { move: [18, 17], reply: [16, 12], next: [{ move: [18, 16] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-67',
    title: 'Weekly easy 67',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[15, 14], [17, 14], [14, 15], [16, 15], [17, 15], [14, 16], [16, 16], [14, 17], [16, 17]],
    white: [[16, 13], [17, 13], [16, 14], [15, 15], [15, 16], [17, 16], [15, 17], [17, 17], [15, 18], [16, 18]],
    solution: [
    { move: [17, 18], reply: [18, 18], next: [{ move: [14, 18], reply: [17, 18], next: [{ move: [18, 16] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-70',
    title: 'Weekly easy 70',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[1, 16], [2, 16], [4, 16], [0, 17], [1, 17], [3, 17], [4, 17]],
    white: [[1, 13], [1, 15], [2, 15], [3, 15], [4, 15], [5, 15], [0, 16], [3, 16], [5, 16], [5, 17], [7, 17], [2, 18]],
    solution: [
    { move: [1, 18], reply: [4, 18], next: [{ move: [2, 17], reply: [5, 18], next: [{ move: [3, 18] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-72',
    title: 'Weekly easy 72',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[3, 13], [3, 14], [1, 15], [2, 15], [4, 15], [5, 15], [6, 15], [1, 16], [6, 16], [1, 17], [4, 17], [5, 17]],
    white: [[2, 14], [4, 14], [3, 15], [2, 16], [3, 16], [4, 16], [5, 16], [9, 16], [2, 17], [6, 17], [7, 17], [1, 18], [5, 18]],
    solution: [
    { move: [3, 18], reply: [2, 18], next: [{ move: [0, 17], reply: [6, 18], next: [{ move: [0, 18] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-74',
    title: 'Weekly easy 74',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[4, 14], [4, 15], [3, 16], [6, 16], [7, 16], [0, 17], [2, 17], [3, 17], [7, 17], [1, 18], [6, 18]],
    white: [[2, 15], [3, 15], [1, 16], [2, 16], [4, 16], [1, 17], [4, 17], [5, 17], [6, 17]],
    solution: [
    { move: [4, 18], reply: [3, 18] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-75',
    title: 'Weekly easy 75',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[16, 15], [17, 15], [16, 16], [16, 17], [18, 17]],
    white: [[14, 13], [16, 14], [17, 14], [15, 15], [18, 15], [15, 16], [15, 17]],
    solution: [
    { move: [17, 18] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-76',
    title: 'Weekly easy 76',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[2, 15], [3, 15], [4, 15], [4, 16], [2, 17], [3, 17]],
    white: [[5, 15], [1, 16], [2, 16], [3, 16], [5, 16], [4, 17], [6, 17], [5, 18]],
    solution: [
    { move: [1, 17], reply: [1, 15], next: [{ move: [1, 14] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-78',
    title: 'Weekly easy 78',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[11, 14], [13, 14], [11, 15], [12, 16], [13, 16], [14, 16], [15, 16], [17, 16], [12, 17], [16, 17], [17, 17], [13, 18]],
    white: [[16, 12], [10, 15], [16, 15], [17, 15], [9, 16], [11, 16], [16, 16], [11, 17], [13, 17], [14, 17], [15, 17], [11, 18], [12, 18]],
    solution: [
    { move: [15, 18], reply: [14, 18], next: [{ move: [13, 18] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-84',
    title: 'Weekly easy 84',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[9, 15], [16, 15], [17, 15], [18, 15], [11, 16], [15, 16], [16, 16], [18, 16], [13, 17], [14, 17], [17, 17]],
    white: [[15, 13], [16, 14], [17, 14], [18, 14], [12, 15], [14, 15], [15, 15], [14, 16], [15, 17], [16, 17], [16, 18], [17, 18]],
    solution: [
    { move: [18, 17] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-86',
    title: 'Weekly easy 86',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[16, 14], [13, 15], [14, 15], [15, 15], [11, 16], [12, 16], [16, 16], [17, 16], [13, 17], [18, 17]],
    white: [[13, 16], [14, 16], [15, 16], [14, 17], [16, 17], [17, 17], [15, 18]],
    solution: [
    { move: [12, 18], reply: [17, 18], next: [{ move: [14, 18] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-91',
    title: 'Weekly easy 91',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[17, 10], [16, 11], [16, 12], [16, 13], [17, 13], [18, 13], [15, 14], [15, 15], [16, 16]],
    white: [[15, 10], [16, 10], [15, 11], [17, 11], [18, 11], [15, 12], [15, 13], [16, 14], [17, 14], [18, 14]],
    solution: [
    { move: [18, 10], reply: [17, 9], next: [{ move: [16, 15] }, { move: [17, 15] }, { move: [18, 15] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-92',
    title: 'Weekly easy 92',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[14, 13], [15, 13], [14, 14], [13, 15], [15, 15], [16, 15], [17, 15], [13, 16], [16, 16], [13, 17], [14, 17], [16, 17]],
    white: [[15, 12], [16, 13], [15, 14], [16, 14], [17, 14], [14, 15], [14, 16], [15, 16], [15, 17], [17, 17], [15, 18], [16, 18]],
    solution: [
    { move: [17, 18], reply: [18, 18], next: [{ move: [14, 18], reply: [17, 18], next: [{ move: [17, 16] }, { move: [18, 16] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-93',
    title: 'Weekly easy 93',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[3, 14], [4, 14], [5, 14], [2, 15], [2, 16], [6, 16], [2, 17], [3, 17]],
    white: [[1, 14], [2, 14], [1, 15], [3, 15], [4, 15], [1, 16], [3, 16], [1, 17], [4, 17]],
    solution: [
    { move: [4, 16], reply: [5, 16], next: [{ move: [5, 15], reply: [4, 16], next: [{ move: [5, 17] }, { move: [4, 18] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-94',
    title: 'Weekly easy 94',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[2, 15], [3, 15], [4, 15], [1, 16], [5, 16], [6, 16], [7, 16], [1, 17], [7, 17]],
    white: [[2, 13], [4, 13], [1, 14], [5, 14], [1, 15], [5, 15], [2, 16], [3, 16], [4, 16], [5, 17], [6, 17]],
    solution: [
    { move: [4, 17], reply: [3, 17], next: [{ move: [3, 18], reply: [4, 18], next: [{ move: [2, 18], reply: [4, 14], next: [{ move: [2, 17], reply: [4, 17], next: [{ move: [6, 18] }, { move: [5, 18] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-96',
    title: 'Weekly easy 96',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[3, 13], [4, 13], [3, 14], [5, 14], [2, 15], [2, 16], [6, 16], [7, 16], [2, 17], [3, 17]],
    white: [[1, 14], [2, 14], [4, 14], [1, 15], [3, 15], [1, 16], [3, 16], [5, 16], [1, 17], [4, 17]],
    solution: [
    { move: [4, 16], reply: [4, 15], next: [{ move: [5, 15], reply: [4, 16], next: [{ move: [5, 17], reply: [4, 18], next: [{ move: [5, 18] }] }, { move: [4, 18], reply: [5, 17], next: [{ move: [6, 17], reply: [2, 18], next: [{ move: [5, 18] }] }, { move: [5, 18], reply: [6, 17], next: [{ move: [7, 17], reply: [2, 18], next: [{ move: [6, 18] }] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-easy-98',
    title: 'Weekly easy 98',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'intermediate',
    size: 19,
    toPlay: 'black',
    black: [[2, 12], [1, 13], [2, 13], [2, 14], [4, 14], [3, 15], [3, 16], [5, 16], [4, 17], [3, 18]],
    white: [[3, 10], [6, 10], [3, 13], [1, 14], [3, 14], [1, 15], [2, 15], [2, 16], [1, 17], [2, 17], [3, 17]],
    solution: [
    { move: [4, 12], reply: [4, 15], next: [{ move: [4, 16], reply: [4, 13], next: [{ move: [5, 13], reply: [5, 14], next: [{ move: [3, 12], reply: [4, 14], next: [{ move: [6, 14] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-01',
    title: 'Weekly intermediate 1',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[12, 14], [13, 14], [14, 15], [14, 16], [14, 17], [14, 18]],
    white: [[14, 13], [14, 14], [16, 14], [13, 15], [15, 15], [13, 16], [16, 16], [13, 17]],
    solution: [
    { move: [12, 17], reply: [12, 16], next: [{ move: [11, 16], reply: [11, 17], next: [{ move: [12, 15], reply: [12, 18], next: [{ move: [13, 18] }] }, { move: [13, 18], reply: [12, 18], next: [{ move: [12, 15] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-02',
    title: 'Weekly intermediate 2',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 11], [14, 12], [15, 12], [17, 12], [13, 13], [18, 13], [13, 14], [13, 15], [13, 16], [14, 16], [18, 16], [15, 17], [16, 17], [17, 17], [18, 17]],
    white: [[14, 13], [17, 13], [14, 14], [17, 14], [14, 15], [16, 15], [18, 15], [15, 16], [16, 16], [17, 16]],
    solution: [
    { move: [16, 13], reply: [16, 14], next: [{ move: [15, 14] }] },
    { move: [18, 12], reply: [18, 14], next: [{ move: [16, 13], reply: [16, 14], next: [{ move: [15, 14] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-06',
    title: 'Weekly intermediate 6',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[15, 15], [16, 15], [17, 15], [11, 16], [13, 16], [14, 16], [17, 16]],
    white: [[15, 16], [16, 16], [18, 16], [15, 17], [17, 17]],
    solution: [
    { move: [16, 18] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-07',
    title: 'Weekly intermediate 7',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[13, 14], [14, 14], [15, 14], [13, 15], [16, 15], [17, 15], [13, 16], [17, 16], [13, 17]],
    white: [[14, 15], [15, 15], [14, 16], [16, 16], [14, 17], [17, 17], [18, 17]],
    solution: [
    { move: [15, 17], reply: [15, 18], next: [{ move: [16, 18], reply: [14, 18], next: [{ move: [13, 18] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-08',
    title: 'Weekly intermediate 8',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 15], [16, 16], [17, 16], [14, 17], [16, 17]],
    white: [[15, 14], [16, 14], [17, 14], [15, 15], [17, 15], [13, 16], [14, 16], [11, 17], [13, 17]],
    solution: [
    { move: [14, 18], reply: [17, 18], next: [{ move: [16, 18], reply: [15, 17], next: [{ move: [15, 16], reply: [18, 17], next: [{ move: [18, 16], reply: [18, 15] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-09',
    title: 'Weekly intermediate 9',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[11, 15], [12, 15], [10, 16], [13, 16], [14, 16], [15, 16], [11, 17], [15, 17], [12, 18], [13, 18], [15, 18]],
    white: [[10, 14], [11, 14], [12, 14], [16, 14], [9, 15], [13, 15], [14, 15], [15, 15], [9, 16], [16, 16], [9, 17], [10, 17], [13, 17], [14, 17], [16, 17], [11, 18], [16, 18]],
    solution: [
    { move: [11, 16], reply: [12, 17], next: [{ move: [10, 18], reply: [9, 18], next: [{ move: [11, 18] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-102',
    title: 'Weekly intermediate 102',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[3, 13], [4, 13], [4, 14], [5, 14], [3, 15], [6, 15], [2, 16], [3, 16], [4, 16], [6, 16], [3, 17], [7, 17], [8, 17], [3, 18]],
    white: [[2, 11], [2, 13], [2, 14], [3, 14], [2, 15], [4, 15], [5, 15], [1, 16], [5, 16], [7, 16], [2, 17], [4, 17], [5, 17], [6, 17]],
    solution: [
    { move: [1, 17], reply: [1, 18], next: [{ move: [6, 18], reply: [0, 17], next: [{ move: [5, 18] }, { move: [4, 18] }] }, { move: [4, 18], reply: [0, 17], next: [{ move: [6, 18] }, { move: [5, 18] }] }, { move: [5, 18] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-106',
    title: 'Weekly intermediate 106',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[13, 14], [13, 15], [15, 15], [12, 16], [12, 17], [13, 17]],
    white: [[16, 10], [16, 13], [11, 15], [12, 15], [17, 15], [11, 16], [13, 16], [14, 16], [11, 17]],
    solution: [
    { move: [14, 17], reply: [15, 16], next: [{ move: [16, 16], reply: [15, 17], next: [{ move: [16, 17] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-107',
    title: 'Weekly intermediate 107',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[12, 16], [13, 16], [14, 16], [15, 16], [16, 16], [15, 17]],
    white: [[16, 14], [11, 15], [12, 15], [13, 15], [14, 15], [9, 16], [11, 16], [17, 16], [18, 16], [16, 17], [17, 18], [18, 18]],
    solution: [
    { move: [17, 15], reply: [16, 15], next: [{ move: [15, 18], reply: [11, 17], next: [{ move: [16, 18], reply: [17, 14], next: [{ move: [17, 17] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-11',
    title: 'Weekly intermediate 11',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[15, 14], [16, 14], [17, 14], [13, 15], [14, 15], [18, 15], [13, 16], [15, 16], [18, 16], [13, 17]],
    white: [[15, 15], [16, 15], [17, 15], [14, 16], [17, 16], [14, 17], [17, 17], [14, 18], [17, 18]],
    solution: [
    { move: [15, 17], reply: [15, 18], next: [{ move: [13, 18], reply: [16, 18], next: [{ move: [18, 17] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-12',
    title: 'Weekly intermediate 12',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[15, 14], [14, 15], [16, 15], [17, 15], [12, 16], [14, 16], [13, 17]],
    white: [[15, 16], [16, 16], [14, 17], [17, 17], [15, 18]],
    solution: [
    { move: [18, 17], reply: [18, 16], next: [{ move: [17, 16], reply: [16, 17], next: [{ move: [17, 18], reply: [18, 18] }, { move: [13, 18], reply: [14, 18], next: [{ move: [17, 18], reply: [18, 18] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-120',
    title: 'Weekly intermediate 120',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[5, 11], [4, 12], [2, 13], [4, 13], [2, 14], [3, 14], [1, 15], [3, 15], [4, 16], [4, 17]],
    white: [[4, 11], [3, 12], [3, 13], [4, 14], [2, 15], [4, 15], [5, 15], [1, 16], [2, 16], [3, 16], [5, 16], [8, 16], [2, 17]],
    solution: [
    { move: [3, 11], reply: [2, 12], next: [{ move: [1, 12], reply: [2, 11], next: [{ move: [2, 10], reply: [1, 11], next: [{ move: [1, 10], reply: [0, 11], next: [{ move: [0, 10], reply: [3, 10], next: [{ move: [0, 12], reply: [3, 11], next: [{ move: [3, 9] }] }] }, { move: [0, 12], reply: [3, 10], next: [{ move: [0, 10], reply: [3, 11], next: [{ move: [3, 9] }] }] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-124',
    title: 'Weekly intermediate 124',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[1, 15], [1, 16], [3, 16], [1, 17], [2, 17]],
    white: [[1, 14], [2, 14], [4, 14], [6, 14], [2, 15], [2, 16], [5, 16], [3, 17], [5, 17]],
    solution: [
    { move: [0, 18], reply: [2, 18], next: [{ move: [4, 17], reply: [4, 18], next: [{ move: [3, 18] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-125',
    title: 'Weekly intermediate 125',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[2, 13], [3, 14], [4, 14], [3, 15], [2, 16], [4, 16], [1, 17], [4, 17], [5, 17], [6, 17], [7, 17]],
    white: [[2, 11], [4, 15], [5, 15], [1, 16], [3, 16], [5, 16], [6, 16], [7, 16], [8, 16], [2, 17], [3, 17], [8, 17]],
    solution: [
    { move: [2, 15], reply: [1, 18], next: [{ move: [0, 17], reply: [0, 16], next: [{ move: [4, 18], reply: [0, 18], next: [{ move: [1, 17], reply: [0, 17], next: [{ move: [3, 18] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-13',
    title: 'Weekly intermediate 13',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[10, 18], [10, 17], [10, 16], [11, 16], [12, 16], [13, 15], [12, 14], [14, 14], [15, 14], [16, 14], [16, 15], [17, 16], [17, 17], [17, 18], [14, 17]],
    white: [[16, 16], [16, 17], [16, 18], [15, 15], [14, 15], [14, 16], [13, 17], [12, 17], [11, 17], [11, 18], [13, 16]],
    solution: [
    { move: [15, 18], reply: [15, 16], next: [{ move: [13, 18] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-131',
    title: 'Weekly intermediate 131',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[3, 11], [4, 11], [4, 12], [4, 13], [1, 14], [2, 14], [5, 14], [1, 15], [3, 15], [4, 15], [5, 15], [3, 16], [4, 16], [4, 17], [5, 17]],
    white: [[2, 12], [3, 12], [3, 13], [5, 13], [6, 13], [3, 14], [4, 14], [6, 14], [2, 15], [2, 16], [5, 16], [6, 16], [8, 16], [2, 17], [3, 17], [6, 17]],
    solution: [
    { move: [1, 12], reply: [2, 11], next: [{ move: [2, 10], reply: [1, 11], next: [{ move: [1, 10], reply: [1, 13], next: [{ move: [0, 11], reply: [0, 12], next: [{ move: [0, 10], reply: [2, 13], next: [{ move: [0, 13], reply: [0, 14], next: [{ move: [0, 15] }] }] }] }, { move: [2, 13], reply: [0, 12], next: [{ move: [0, 10], reply: [0, 11], next: [{ move: [0, 13], reply: [0, 14], next: [{ move: [0, 15] }] }] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-135',
    title: 'Weekly intermediate 135',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 10], [12, 11], [16, 11], [13, 12], [16, 12], [12, 13], [15, 13], [16, 13], [12, 14], [16, 14], [12, 15], [11, 16], [11, 17], [12, 17], [13, 17], [14, 17], [16, 17]],
    white: [[13, 11], [11, 12], [12, 12], [15, 12], [11, 13], [14, 13], [15, 14], [10, 15], [11, 15], [14, 15], [16, 15], [17, 15], [12, 16], [13, 16]],
    solution: [
    { move: [13, 13], reply: [14, 12], next: [{ move: [14, 11], reply: [13, 10], next: [{ move: [14, 14], reply: [13, 14], next: [{ move: [15, 11], reply: [14, 14], next: [{ move: [14, 16] }] }] }] }, { move: [14, 14], reply: [13, 14], next: [{ move: [14, 11], reply: [13, 10], next: [{ move: [15, 11], reply: [14, 14], next: [{ move: [14, 16] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-137',
    title: 'Weekly intermediate 137',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[3, 13], [2, 15], [6, 15], [5, 16]],
    white: [[3, 15], [5, 15], [2, 16], [6, 16], [7, 16]],
    solution: [
    { move: [4, 15], reply: [5, 14], next: [{ move: [3, 16], reply: [3, 14], next: [{ move: [4, 14], reply: [2, 14], next: [{ move: [5, 13], reply: [6, 14], next: [{ move: [2, 13], reply: [1, 14], next: [{ move: [2, 17], reply: [1, 16], next: [{ move: [1, 17] }] }] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-14',
    title: 'Weekly intermediate 14',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[13, 14], [14, 14], [15, 14], [13, 15], [15, 15], [9, 16], [11, 16], [12, 16], [15, 16], [13, 17], [16, 17], [17, 17], [16, 18]],
    white: [[12, 13], [13, 13], [14, 13], [16, 13], [12, 14], [12, 15], [16, 15], [17, 15], [13, 16], [14, 16], [16, 16], [14, 17], [15, 17]],
    solution: [
    { move: [14, 18], reply: [12, 17], next: [{ move: [15, 18], reply: [13, 18], next: [{ move: [14, 15] }] }, { move: [13, 18], reply: [15, 13], next: [{ move: [15, 18] }] }, { move: [14, 15], reply: [13, 18], next: [{ move: [15, 18] }] }] },
    { move: [15, 18], reply: [12, 17], next: [{ move: [14, 18], reply: [13, 18], next: [{ move: [14, 15] }] }, { move: [14, 15], reply: [13, 18], next: [{ move: [14, 18] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-15',
    title: 'Weekly intermediate 15',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 10], [15, 12], [16, 12], [14, 13], [14, 14], [14, 15], [15, 16], [14, 17], [16, 17], [17, 18]],
    white: [[15, 13], [15, 14], [15, 15], [17, 15], [16, 16], [18, 16], [17, 17], [18, 17]],
    solution: [
    { move: [17, 14], reply: [17, 13], next: [{ move: [16, 13] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-16',
    title: 'Weekly intermediate 16',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[11, 14], [13, 14], [15, 14], [13, 15], [15, 15], [18, 15], [12, 16], [16, 16], [17, 16], [12, 17], [16, 17], [16, 18]],
    white: [[14, 13], [15, 13], [16, 13], [17, 14], [16, 15], [17, 15], [13, 16], [14, 16], [15, 16], [15, 17], [15, 18]],
    solution: [
    { move: [17, 18], reply: [18, 17], next: [{ move: [13, 17] }, { move: [14, 15] }, { move: [14, 18] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-19',
    title: 'Weekly intermediate 19',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 13], [17, 13], [18, 13], [15, 14], [15, 15], [15, 16], [16, 17], [17, 17]],
    white: [[16, 14], [17, 14], [16, 15], [13, 16], [16, 16], [17, 16], [14, 17], [15, 17]],
    solution: [
    { move: [18, 17], reply: [18, 15], next: [{ move: [18, 14] }, { move: [18, 16] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-20',
    title: 'Weekly intermediate 20',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[13, 15], [14, 15], [15, 15], [16, 15], [17, 15], [13, 16], [17, 16], [12, 17], [15, 17], [16, 17]],
    white: [[14, 16], [15, 16], [16, 16], [18, 16], [14, 17], [17, 17], [14, 18], [16, 18]],
    solution: [
    { move: [18, 17], reply: [18, 18], next: [{ move: [18, 15], reply: [15, 18], next: [{ move: [18, 17] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-25',
    title: 'Weekly intermediate 25',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[12, 13], [15, 13], [12, 14], [13, 15], [15, 15], [16, 15], [13, 16], [14, 16], [12, 17], [15, 17]],
    white: [[10, 14], [13, 14], [14, 14], [12, 15], [14, 15], [10, 16], [12, 16], [15, 16], [16, 16], [11, 17], [16, 17]],
    solution: [
    { move: [13, 13], reply: [14, 17], next: [{ move: [13, 17], reply: [15, 18], next: [{ move: [14, 13] }] }] },
    { move: [14, 13], reply: [14, 17], next: [{ move: [13, 17], reply: [15, 18], next: [{ move: [13, 13] }] }] },
    { move: [15, 14], reply: [14, 17], next: [{ move: [13, 17], reply: [15, 18], next: [{ move: [13, 13] }, { move: [14, 13] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-28',
    title: 'Weekly intermediate 28',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 13], [13, 15], [15, 15], [16, 16], [17, 17]],
    white: [[16, 9], [16, 11], [17, 15], [12, 16], [13, 16], [15, 17], [16, 17]],
    solution: [
    { move: [17, 14], reply: [17, 16], next: [{ move: [18, 17], reply: [16, 15], next: [{ move: [15, 16], reply: [15, 14], next: [{ move: [14, 14], reply: [16, 14], next: [{ move: [15, 13], reply: [17, 13], next: [{ move: [18, 16], reply: [18, 14], next: [{ move: [18, 15] }] }, { move: [18, 15], reply: [18, 14], next: [{ move: [18, 16] }] }] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-32',
    title: 'Weekly intermediate 32',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 11], [16, 14], [16, 15], [13, 16]],
    white: [[14, 12], [15, 13], [16, 13], [15, 14], [15, 15]],
    solution: [
    { move: [17, 13], reply: [17, 12], next: [{ move: [17, 14], reply: [16, 12], next: [{ move: [15, 17], reply: [16, 16], next: [{ move: [17, 16] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-38',
    title: 'Weekly intermediate 38',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 9], [15, 10], [16, 11], [17, 11], [17, 12], [9, 14], [13, 14], [9, 15], [11, 15], [14, 15], [9, 16], [15, 16], [9, 17], [10, 17], [16, 17], [17, 17]],
    white: [[15, 11], [15, 12], [16, 12], [10, 13], [17, 13], [10, 14], [16, 14], [10, 15], [16, 15], [10, 16], [11, 16], [12, 16], [16, 16], [14, 17]],
    solution: [
    { move: [13, 17], reply: [13, 16], next: [{ move: [14, 16], reply: [12, 17], next: [{ move: [15, 17], reply: [13, 18], next: [{ move: [13, 12] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-42',
    title: 'Weekly intermediate 42',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 14], [17, 14], [12, 15], [13, 15], [14, 15], [15, 15], [16, 15], [9, 16], [11, 16], [14, 16], [11, 17]],
    white: [[12, 13], [14, 13], [16, 13], [11, 15], [17, 15], [12, 16], [13, 16], [15, 16], [16, 16], [17, 16], [12, 17], [14, 17]],
    solution: [
    { move: [11, 14], reply: [10, 15], next: [{ move: [11, 18], reply: [13, 17], next: [{ move: [9, 13], reply: [9, 15], next: [{ move: [8, 15], reply: [8, 16], next: [{ move: [9, 14], reply: [10, 16], next: [{ move: [9, 17], reply: [10, 17], next: [{ move: [10, 14] }, { move: [10, 18] }] }] }] }] }] }, { move: [9, 13], reply: [9, 15], next: [{ move: [11, 18], reply: [13, 17], next: [{ move: [8, 15], reply: [8, 16], next: [{ move: [9, 14], reply: [10, 16], next: [{ move: [9, 17], reply: [10, 17], next: [{ move: [10, 14] }, { move: [10, 18] }] }] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-43',
    title: 'Weekly intermediate 43',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[2, 11], [9, 14], [10, 15], [16, 15], [5, 16], [10, 16], [8, 17], [9, 17]],
    white: [[2, 13], [3, 15], [9, 15], [7, 16], [9, 16], [14, 16], [3, 17], [10, 17], [11, 17]],
    solution: [
    { move: [7, 15], reply: [8, 16], next: [{ move: [7, 17], reply: [6, 16], next: [{ move: [6, 15], reply: [6, 17], next: [{ move: [5, 17], reply: [6, 18], next: [{ move: [8, 15] }, { move: [5, 18] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-46',
    title: 'Weekly intermediate 46',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[8, 13], [1, 14], [3, 14], [4, 14], [1, 15], [2, 15], [4, 15], [2, 16], [4, 16]],
    white: [[5, 12], [1, 13], [2, 13], [3, 13], [2, 14], [3, 15], [8, 15], [3, 16], [9, 16], [3, 17], [5, 17]],
    solution: [
    { move: [4, 17], reply: [4, 18], next: [{ move: [5, 16], reply: [6, 17], next: [{ move: [2, 17], reply: [3, 18], next: [{ move: [7, 16], reply: [7, 17], next: [{ move: [5, 18], reply: [6, 18], next: [{ move: [2, 18] }] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-64',
    title: 'Weekly intermediate 64',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[17, 11], [16, 12], [17, 12], [16, 14], [15, 15], [16, 15], [16, 16], [17, 16]],
    white: [[17, 9], [17, 10], [15, 11], [16, 11], [15, 12], [15, 13], [15, 14], [14, 15], [14, 16], [15, 16], [16, 17], [17, 17]],
    solution: [
    { move: [18, 15], reply: [17, 14], next: [{ move: [18, 11], reply: [18, 13], next: [{ move: [17, 13], reply: [18, 14], next: [{ move: [16, 13] }] }, { move: [18, 14], reply: [17, 13], next: [{ move: [16, 13] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-66',
    title: 'Weekly intermediate 66',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[2, 10], [16, 12], [3, 14], [15, 14], [15, 15], [3, 16], [15, 16]],
    white: [[16, 14], [16, 15], [13, 16], [16, 16]],
    solution: [
    { move: [16, 17], reply: [17, 17], next: [{ move: [15, 17], reply: [16, 13], next: [{ move: [15, 13], reply: [17, 12], next: [{ move: [17, 11], reply: [16, 11], next: [{ move: [15, 12], reply: [17, 10], next: [{ move: [15, 11], reply: [16, 10], next: [{ move: [9, 15] }, { move: [9, 16] }, { move: [10, 16] }] }, { move: [9, 15] }] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-70',
    title: 'Weekly intermediate 70',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 10], [17, 10], [17, 11], [16, 12], [18, 12], [16, 13], [17, 13], [13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [15, 15], [18, 15]],
    white: [[16, 9], [17, 9], [15, 10], [18, 10], [15, 11], [16, 11], [15, 12], [13, 13], [14, 13], [15, 13], [18, 14], [16, 15], [17, 15], [11, 16], [14, 16], [15, 16], [17, 16], [16, 17]],
    solution: [
    { move: [12, 14] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-71',
    title: 'Weekly intermediate 71',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[2, 14], [3, 14], [1, 15], [3, 15], [1, 16], [4, 16], [5, 16], [6, 16]],
    white: [[1, 13], [2, 13], [3, 13], [4, 13], [1, 14], [4, 15], [5, 15], [2, 16], [3, 16]],
    solution: [
    { move: [3, 17], reply: [2, 17], next: [{ move: [1, 17], reply: [4, 17], next: [{ move: [2, 18], reply: [3, 18], next: [{ move: [1, 18] }] }, { move: [2, 15], reply: [3, 18], next: [{ move: [1, 18], reply: [2, 18], next: [{ move: [5, 18] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-78',
    title: 'Weekly intermediate 78',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[13, 10], [12, 12], [11, 13], [12, 13], [10, 14], [3, 15], [4, 15], [7, 15], [9, 15], [11, 15], [16, 15], [4, 16], [5, 16], [6, 16], [7, 16], [9, 16], [4, 17], [8, 17], [10, 17], [8, 18]],
    white: [[11, 11], [9, 12], [11, 12], [4, 13], [6, 13], [10, 13], [2, 14], [8, 14], [9, 14], [2, 15], [8, 15], [3, 16], [8, 16], [3, 17], [5, 17], [6, 17], [7, 17], [9, 17], [4, 18]],
    solution: [
    { move: [2, 16], reply: [2, 17], next: [{ move: [5, 18], reply: [6, 18], next: [{ move: [3, 18], reply: [2, 18], next: [{ move: [9, 18] }, { move: [1, 16], reply: [1, 17], next: [{ move: [9, 18] }] }] }, { move: [1, 16], reply: [1, 17], next: [{ move: [3, 18] }] }] }, { move: [1, 16], reply: [1, 17], next: [{ move: [5, 18], reply: [6, 18], next: [{ move: [3, 18], reply: [2, 18], next: [{ move: [9, 18] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-87',
    title: 'Weekly intermediate 87',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[13, 15], [14, 15], [15, 15], [17, 15], [13, 16], [16, 16], [17, 16], [12, 17], [17, 17]],
    white: [[12, 13], [14, 13], [16, 13], [11, 14], [16, 14], [16, 15], [11, 16], [14, 16], [15, 16], [11, 17], [13, 17], [16, 17], [13, 18]],
    solution: [
    { move: [14, 17], reply: [15, 17], next: [{ move: [16, 18], reply: [14, 18], next: [{ move: [17, 18], reply: [12, 16], next: [{ move: [15, 18] }] }] }, { move: [17, 18], reply: [14, 18], next: [{ move: [16, 18], reply: [12, 16], next: [{ move: [15, 18] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-89',
    title: 'Weekly intermediate 89',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[4, 14], [5, 14], [8, 14], [2, 15], [3, 15], [6, 15], [2, 16], [6, 16], [8, 16], [1, 17], [8, 17]],
    white: [[5, 15], [3, 16], [5, 16], [2, 17], [3, 17], [4, 17], [6, 17], [7, 17]],
    solution: [
    { move: [5, 18], reply: [4, 18], next: [{ move: [5, 17], reply: [6, 18], next: [{ move: [5, 17], reply: [5, 18], next: [{ move: [4, 15] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-93',
    title: 'Weekly intermediate 93',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[2, 12], [1, 13], [2, 14], [3, 14], [4, 15], [4, 16], [2, 17], [4, 17], [3, 18]],
    white: [[0, 14], [1, 14], [1, 15], [2, 15], [3, 16], [1, 17], [3, 17]],
    solution: [
    { move: [2, 16], reply: [1, 16], next: [{ move: [1, 18], reply: [2, 18], next: [{ move: [2, 17] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-95',
    title: 'Weekly intermediate 95',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[14, 14], [14, 15], [17, 15], [15, 16], [16, 16]],
    white: [[17, 14], [15, 15], [16, 15], [12, 16], [14, 16], [17, 16]],
    solution: [
    { move: [16, 14], reply: [18, 15], next: [{ move: [15, 14], reply: [17, 15], next: [{ move: [13, 16], reply: [14, 17], next: [{ move: [13, 17], reply: [16, 17], next: [{ move: [12, 15] }, { move: [14, 18], reply: [15, 17], next: [{ move: [12, 15] }] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  },
  {
    id: 'ggg-intermediate-97',
    title: 'Weekly intermediate 97',
    description: 'Black to play. Find the move marked correct in the Weekly Go Problems.',
    difficulty: 'hard',
    size: 19,
    toPlay: 'black',
    black: [[16, 14], [17, 14], [14, 15], [15, 15], [14, 17], [15, 17], [16, 17]],
    white: [[16, 12], [15, 13], [15, 14], [16, 15], [17, 15], [15, 16], [17, 17]],
    solution: [
    { move: [17, 16], reply: [16, 16], next: [{ move: [18, 15], reply: [18, 16], next: [{ move: [18, 14], reply: [17, 13], next: [{ move: [14, 16], reply: [17, 16], next: [{ move: [17, 18] }] }] }] }] }
    ],
    successMessage: 'Correct.',
  }
];
