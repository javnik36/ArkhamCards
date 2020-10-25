import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { flatMap, forEach } from 'lodash';
import { t } from 'ttag';

import CardSectionHeader from '@components/core/CardSectionHeader';
import { scenarioRewards } from '@components/campaign/constants';
import { Slots } from '@actions/types';
import Card from '@data/Card';
import { PLAYER_CARDS_QUERY, combineQueries, MYTHOS_CARDS_QUERY } from '@data/query';
import CardSelectorComponent from '@components/cardlist/CardSelectorComponent';
import { useDeck, useSlots } from '@components/core/hooks';
import useCardsFromQuery from '@components/card/useCardsFromQuery';
import { QuerySort } from '@data/types';
import StyleContext from '@styles/StyleContext';
import space from '@styles/space';
import { ActivityIndicator } from 'react-native';

interface Props {
  componentId: string;
  investigator: Card;
  deckId: number;
  encounterCodes: string[];
  scenarioName?: string;
  updateStoryCounts: (exileCounts: Slots) => void;
}

const QUERY = combineQueries(MYTHOS_CARDS_QUERY, [PLAYER_CARDS_QUERY], 'and');
const SORT: QuerySort[] = [
  { s: 'c.renderName', direction: 'ASC' },
  { s: 'c.xp', direction: 'ASC' },
];

export default function StoryCardSelectorComponent({
  componentId,
  investigator,
  deckId,
  encounterCodes,
  scenarioName,
  updateStoryCounts,
}: Props) {
  const { colors } = useContext(StyleContext);
  const [initialized, setInitialized] = useState(false);
  const [storyCounts, setStoryCounts] = useSlots({});
  const [deck] = useDeck(deckId, {});
  const tabooSetId = deck?.taboo_id || 0;
  useEffect(() => {
    updateStoryCounts(storyCounts);
  }, [storyCounts]);

  const updateCounts = useCallback((slots: Slots) => {
    setStoryCounts({ type: 'sync', slots });
  }, [setStoryCounts]);

  const [allStoryCards, loading] = useCardsFromQuery({
    query: QUERY,
    sort: SORT,
    tabooSetOverride: tabooSetId,
  });
  const encounterCodesSet = useMemo(() => {
    return new Set(flatMap(encounterCodes, encounterCode => {
      return [
        encounterCode,
        ...scenarioRewards(encounterCode),
      ];
    }));
  }, [encounterCodes]);
  const [storyCards, deckStoryCards] = useMemo(() => {
    const deckStorySlots: Slots = {};
    const storyCards: Card[] = [];
    const deckStoryCards: Card[] = [];
    forEach(allStoryCards, card => {
      if (deck && card.code && deck.slots[card.code] > 0) {
        deckStoryCards.push(card);
        deckStorySlots[card.code] = deck.slots[card.code];
      } else if (card.encounter_code && encounterCodesSet.has(card.encounter_code)) {
        storyCards.push(card);
      }
    });
    if (!initialized) {
      setInitialized(true);
      setStoryCounts({ type: 'sync', slots: deckStorySlots });
    }
    return [storyCards, deckStoryCards];
  }, [allStoryCards, deck, encounterCodesSet]);

  const storyCardsSection = useMemo(() => {
    if (!storyCards.length) {
      return null;
    }
    const header = (
      <CardSectionHeader
        investigator={investigator}
        section={{ superTitle: scenarioName ? t`Story cards to add - ${scenarioName}` : t`Story cards to add` }}
      />
    );
    const slots: Slots = {};
    forEach(storyCards, card => {
      if (card.code && card.deck_limit) {
        slots[card.code] = card.deck_limit;
      }
    });
    return (
      <CardSelectorComponent
        componentId={componentId}
        slots={slots}
        counts={storyCounts}
        updateCounts={updateCounts}
        header={header}
      />
    );
  }, [componentId, scenarioName, investigator, storyCards, storyCounts, updateCounts]);

  const deckStoryCardsSection = useMemo(() => {
    if (!deckStoryCards.length) {
      return null;
    }

    const header = (
      <CardSectionHeader
        investigator={investigator}
        section={{ superTitle: t`Story Cards - Existing` }}
      />
    );
    const slots: Slots = {};
    forEach(deckStoryCards, card => {
      if (card.code && card.deck_limit) {
        slots[card.code] = card.deck_limit;
      }
    });
    return (
      <CardSelectorComponent
        componentId={componentId}
        slots={slots}
        counts={storyCounts}
        updateCounts={updateCounts}
        header={header}
      />
    );
  }, [deckStoryCards, componentId, investigator, storyCounts, updateCounts]);

  if (loading) {
    return (
      <ActivityIndicator
        style={space.paddingM}
        color={colors.lightText}
        size="large"
        animating
      />
    );
  }
  return (
    <>
      { storyCardsSection }
      { deckStoryCardsSection }
    </>
  );
}
