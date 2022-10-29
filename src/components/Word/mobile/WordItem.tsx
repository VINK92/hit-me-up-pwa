import React from 'react';
import {
  Avatar,
  // Card,
  // CardActionArea,
  // CardContent,
  // CardMedia,
  // Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import Spacer from 'components/SharedComponents/mobile/Spacer';
import { Word } from 'types/interfaces/word';
// import { colors } from 'styles/constants';

interface WordItemProps {
  item: Word;
}

const WordItem: React.FC<WordItemProps> = ({ item }) => {
  // const translates = item.translate.join(', ');
  return (
    <ListItem alignItems="flex-start" disableGutters>
      <ListItemAvatar>
        <Avatar alt={item.word} src={item.image} />
      </ListItemAvatar>
      <ListItemText>
        <Typography variant="h6" color="primary">
          {item.word.toUpperCase()}
        </Typography>
        <Typography variant="bodySmallBook" color="primary">
          Level: {item.level}
        </Typography>
      </ListItemText>
      <Spacer size={15} />

      {/* <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={item.image} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="bodySmallBook" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}
    </ListItem>
  );
};

export default WordItem;
