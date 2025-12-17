import type { ViewStyle, TextStyle } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { CTabsProps } from '../../types/tabs';
import { TABS_COLORS } from '../../constants/tabs';

export type { CTabsProps, TabItem } from '../../types/tabs';

export function CTabs<T = string>({
  tabs,
  value,
  onChange,
  containerStyle,
  tabStyle,
  selectedTabStyle,
  textStyle,
  selectedTextStyle,
}: CTabsProps<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.tabsRow}>
        {tabs.map((tab) => {
          const isSelected = value === tab.value;
          const isDisabled = tab.disabled;

          const tabStyles: ViewStyle[] = [
            styles.tab,
            isSelected && styles.selectedTab,
            tabStyle,
            isSelected && selectedTabStyle,
            isDisabled && styles.disabled,
          ].filter(Boolean) as ViewStyle[];

          const labelStyles: TextStyle[] = [
            styles.text,
            isSelected && styles.selectedText,
            textStyle,
            isSelected && selectedTextStyle,
          ].filter(Boolean) as TextStyle[];

          return (
            <TouchableOpacity
              key={String(tab.value)}
              onPress={() => {
                if (!isDisabled) {
                  onChange(tab.value);
                }
              }}
              disabled={isDisabled}
              activeOpacity={0.7}
              accessibilityRole="tab"
              accessibilityState={{
                selected: isSelected,
                disabled: isDisabled,
              }}
              style={tabStyles}
            >
              <Text style={labelStyles}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

CTabs.displayName = 'CTabs';

export default CTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: TABS_COLORS.background,
    borderRadius: 12,
    padding: 6,
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TABS_COLORS.tabBackground,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  selectedTab: {
    backgroundColor: TABS_COLORS.selectedTabBackground,
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: TABS_COLORS.text,
  },
  selectedText: {
    color: TABS_COLORS.selectedText,
  },
  disabled: {
    opacity: 0.5,
  },
});
