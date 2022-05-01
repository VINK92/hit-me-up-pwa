import React from 'react';
import { Box } from '@mui/material';
import CommonContainer from 'components/CommonContainer/mobile';
import WordEmptyState from 'components/Word/mobile/WordEmptyState';
import WordErrorState from 'components/Word/mobile/WordErrorState';
import WordList from 'components/Word/mobile/WordList';
import CustomIconButton from 'components/SharedComponents/mobile/CustomIconButton';

import { ReactComponent as SendIcon } from 'assets/icons/add-icon.svg';
import { ReactComponent as ReceiveIcon } from 'assets/icons/del-icon.svg';

import { Word } from 'types/interfaces/word';
import Spacer from 'components/SharedComponents/mobile/Spacer';
import { colors } from 'styles/constants';

interface WordProps {
  list: Word[];
  error: boolean;
}

const Words: React.FC<WordProps> = ({ list, error }) => {
  const content = React.useMemo(() => {
    if (error) {
      return <WordErrorState />;
    }
    if (list.length <= 0) {
      return <WordEmptyState />;
    }
    return <WordList list={list} />;
  }, [list, error]);

  const renderHeaderContent = () => {
    return (
      <>
        <Spacer size={30} />
        <Box display="flex" flexDirection="row" justifyContent="center">
          <CustomIconButton onClick={() => {}} color={colors.backgroundPrimary} title="Add" icon={<SendIcon />} />
          <Spacer size={30} isHorizontal />
          <CustomIconButton onClick={() => {}} color={colors.backgroundPrimary} title="Del" icon={<ReceiveIcon />} />
        </Box>
        <Spacer size={30} />
      </>
    );
  };

  return (
    <CommonContainer headerContent={renderHeaderContent()} contentScrollable>
      <div>{content}</div>
    </CommonContainer>
  );
};

export default Words;
