import React from 'react';
import {
  Text,
} from 'react-native';

import SetupStepWrapper from '../SetupStepWrapper';
import BulletsComponent from './BulletsComponent';
import { RuleReminderStep } from 'data/scenario/types';
import CampaignGuideTextComponent from '../CampaignGuideTextComponent';
import typography from 'styles/typography';
import { COLORS } from 'styles/colors';

interface Props {
  step: RuleReminderStep;
}

export default class GenericStepComponent extends React.Component<Props> {
  render() {
    const { step } = this.props;
    return (
      <SetupStepWrapper>
        { !!step.title && (
          <Text style={[typography.bigGameFont, { color: COLORS.scenarioGreen }]}>
            { step.title }
          </Text>
        ) }
        <CampaignGuideTextComponent text={step.text} />
        <BulletsComponent bullets={step.bullets} />
        { !!step.example && <CampaignGuideTextComponent text={step.example} /> }
      </SetupStepWrapper>
    );
  }
}
