export interface WordExample {
  translate: string;
  usage: string;
}

export interface Word {
  word: string;
  translate: string[];
  level: string;
  image: string;
  example: WordExample[];
}

// const w = {
//   word: 'instant',
//   translate: ['мгновенный', 'моментальный'],
//   level: 'intermediate',
//   image: 'https://www.pexels.com/photo/photo-of-person-holding-an-instant-camera-3353653',
//   example: [
//     { translate: 'мгновенное удовлетворение ', usage: 'Instant gratification ' },
//     { translate: 'Растворимый кофе', usage: 'Instant coffee' },
//     { translate: 'Каждую секунду', usage: 'At every instant' },
//   ],
// }
