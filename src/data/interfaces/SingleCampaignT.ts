import { CampaignId, CampaignNotes, Deck, InvestigatorData, ScenarioResult, TraumaAndCardData, WeaknessSet } from '@actions/types';
import { ChaosBag } from '@app_constants';
import MiniCampaignT from './MiniCampaignT';

export default interface SingleCampaignT extends MiniCampaignT {
  latestDecks: () => Deck[];
  investigatorSpentXp: (code: string) => number;
  getInvestigatorData: (investigator: string) => TraumaAndCardData;

  showInterludes: boolean;
  chaosBag: ChaosBag;
  investigatorData: InvestigatorData;
  weaknessSet: WeaknessSet;
  campaignNotes: CampaignNotes;
  scenarioResults: ScenarioResult[];
  linkedCampaignId: CampaignId | undefined;
  guideVersion: number;
}
