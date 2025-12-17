import { useEffect, useRef, useState } from 'react';
import type { ViewStyle, TextStyle, LayoutChangeEvent } from 'react-native';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type { TabsProps } from '../../types/tabs';
import { getTabsColors } from '../../constants/tabs';
import { useThemeColors } from '../../utils/theme';

export type { TabsProps, TabItem } from '../../types/tabs';

interface TabLayout {
  x: number;
  width: number;
}

export function Tabs<T = string>({
  tabs,
  value,
  onChange,
  containerStyle,
  tabStyle,
  selectedTabStyle,
  textStyle,
  selectedTextStyle,
}: TabsProps<T>) {
  const colors = useThemeColors();
  const tabsColors = getTabsColors(colors);
  const [tabLayouts, setTabLayouts] = useState<Map<T, TabLayout>>(new Map());
  const [isInitialized, setIsInitialized] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const widthAnim = useRef(new Animated.Value(0)).current;

  const selectedIndex = tabs.findIndex((tab) => tab.value === value);

  useEffect(() => {
    if (tabLayouts.size === 0 || selectedIndex === -1) return;

    const selectedTab = tabs[selectedIndex];
    if (!selectedTab) return;

    const layout = tabLayouts.get(selectedTab.value);
    if (!layout) return;

    if (!isInitialized) {
      // Set initial position without animation
      slideAnim.setValue(layout.x);
      widthAnim.setValue(layout.width);
      setIsInitialized(true);
    } else {
      // Animate to new position
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: layout.x,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(widthAnim, {
          toValue: layout.width,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [
    value,
    tabLayouts,
    selectedIndex,
    slideAnim,
    widthAnim,
    tabs,
    isInitialized,
  ]);

  const handleTabLayout = (tabValue: T, event: LayoutChangeEvent) => {
    const { x, width } = event.nativeEvent.layout;
    setTabLayouts((prev) => {
      const newMap = new Map(prev);
      newMap.set(tabValue, { x, width });
      return newMap;
    });
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: tabsColors.background },
        containerStyle,
      ]}
    >
      <View style={styles.tabsRow}>
        {/* Sliding background indicator */}
        {tabLayouts.size > 0 && (
          <Animated.View
            style={[
              styles.slidingIndicator,
              {
                transform: [{ translateX: slideAnim }],
                width: widthAnim,
                backgroundColor: tabsColors.selectedTabBackground,
              },
              selectedTabStyle,
            ]}
          />
        )}

        {tabs.map((tab) => {
          const isSelected = value === tab.value;
          const isDisabled = tab.disabled;

          const tabStyles: ViewStyle[] = [
            styles.tab,
            {
              backgroundColor: tabsColors.tabBackground,
            },
            tabStyle,
            isDisabled && styles.disabled,
          ].filter(Boolean) as ViewStyle[];

          const labelStyles: TextStyle[] = [
            styles.text,
            {
              color: isSelected ? tabsColors.selectedText : tabsColors.text,
            },
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
              onLayout={(e) => handleTabLayout(tab.value, e)}
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

Tabs.displayName = 'Tabs';

export default Tabs;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 6,
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    position: 'relative',
  },
  slidingIndicator: {
    position: 'absolute',
    borderRadius: 8,
    height: '100%',
    top: 0,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    zIndex: 1,
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
