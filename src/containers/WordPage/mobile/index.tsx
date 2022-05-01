import React from 'react';
// import { useNavigate } from 'react-router-dom';
import ContentBlock from 'components/Word/mobile';
// import { PATHS } from 'navigation/constants';

const MobileWordPage: React.FC = () => {
  // const navigate = useNavigate();
  const selectError = false; // TODO get frome store

  const mockWordsPage = [
    {
      word: 'instant',
      translate: ['мгновенный', 'моментальный'],
      level: 'intermediate',
      image: 'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
      example: [
        { translate: 'мгновенное удовлетворение ', usage: 'Instant gratification ' },
        { translate: 'Растворимый кофе', usage: 'Instant coffee' },
        { translate: 'Каждую секунду', usage: 'At every instant' },
      ],
    },
    {
      word: 'instant',
      translate: ['мгновенный', 'моментальный'],
      level: 'intermediate',
      image: 'https://www.pexels.com/photo/photo-of-person-holding-an-instant-camera-3353653',
      example: [
        { translate: 'мгновенное удовлетворение ', usage: 'Instant gratification ' },
        { translate: 'Растворимый кофе', usage: 'Instant coffee' },
        { translate: 'Каждую секунду', usage: 'At every instant' },
      ],
    },
    {
      word: 'instant',
      translate: ['мгновенный', 'моментальный'],
      level: 'intermediate',
      image: 'https://www.pexels.com/photo/photo-of-person-holding-an-instant-camera-3353653',
      example: [
        { translate: 'мгновенное удовлетворение ', usage: 'Instant gratification ' },
        { translate: 'Растворимый кофе', usage: 'Instant coffee' },
        { translate: 'Каждую секунду', usage: 'At every instant' },
      ],
    },
    {
      word: 'instant',
      translate: ['мгновенный', 'моментальный'],
      level: 'intermediate',
      image: 'https://www.pexels.com/photo/photo-of-person-holding-an-instant-camera-3353653',
      example: [
        { translate: 'мгновенное удовлетворение ', usage: 'Instant gratification ' },
        { translate: 'Растворимый кофе', usage: 'Instant coffee' },
        { translate: 'Каждую секунду', usage: 'At every instant' },
      ],
    },
    {
      word: 'instant',
      translate: ['мгновенный', 'моментальный'],
      level: 'intermediate',
      image: 'https://www.pexels.com/photo/photo-of-person-holding-an-instant-camera-3353653',
      example: [
        { translate: 'мгновенное удовлетворение ', usage: 'Instant gratification ' },
        { translate: 'Растворимый кофе', usage: 'Instant coffee' },
        { translate: 'Каждую секунду', usage: 'At every instant' },
      ],
    },
    {
      word: 'instant',
      translate: ['мгновенный', 'моментальный'],
      level: 'intermediate',
      image: 'https://www.pexels.com/photo/photo-of-person-holding-an-instant-camera-3353653',
      example: [
        { translate: 'мгновенное удовлетворение ', usage: 'Instant gratification ' },
        { translate: 'Растворимый кофе', usage: 'Instant coffee' },
        { translate: 'Каждую секунду', usage: 'At every instant' },
      ],
    },
  ];

  return <ContentBlock list={mockWordsPage} error={selectError} />;
};

export default MobileWordPage;
