import React from 'react';
import WordItem from 'components/Word/mobile/WordItem';
import { Word } from 'types/interfaces/word';
import { List } from '@mui/material';

interface WordListProps {
  list: Word[];
}

const WordList: React.FC<WordListProps> = ({ list }) => {
  return (
    <List>
      {list.map(el => (
        <WordItem key={el.word} item={el} />
      ))}
    </List>
  );
};

export default WordList;
