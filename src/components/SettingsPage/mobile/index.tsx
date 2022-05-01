import React from 'react';
import { t } from 'i18next';

import List from '@mui/material/List';
import CommonContainer from 'components/CommonContainer/mobile';
import Spacer from 'components/SharedComponents/mobile/Spacer';
import PersonalInfoIcon from '@mui/icons-material/PersonOutline';
import PersonalPlanIcon from '@mui/icons-material/AccountTree';
import ListItem from 'components/ListItem/mobile';
import GradientTypography from 'components/SharedComponents/mobile/GradientTypography';

import { PATHS } from 'navigation/constants';

interface Props {}

const ContentBlock: React.FC<Props> = () => {
  const settingPageItems = [
    {
      title: t('settingsPagePersonalInfoItem'),
      icon: <PersonalInfoIcon color="primary" />,
      to: PATHS.PERSONAL_INFO,
    },
    {
      title: t('settingsPagePersonalPlanItem'),
      icon: <PersonalPlanIcon color="primary" />,
      to: PATHS.PERSONAL_PLAN,
    },
  ];

  return (
    <CommonContainer isMenu>
      <Spacer size={31.5} />
      <GradientTypography type="light" variant="h4">
        {t('settingsPageTitle')}
      </GradientTypography>
      <Spacer size={23.5} />
      <List disablePadding>
        {settingPageItems.map(({ to, title, icon }) => (
          <ListItem key={to} to={to} title={title} icon={icon} />
        ))}
      </List>
    </CommonContainer>
  );
};

export default ContentBlock;
