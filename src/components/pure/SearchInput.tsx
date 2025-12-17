import { forwardRef, useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { SearchInputProps } from '../../types/searchInput';
import { SEARCH_INPUT_COLORS } from '../../constants/searchInput';
import { useDebounce } from '../../utils/debounce';
import { TextInput } from './TextInput';

export type { SearchInputProps } from '../../types/searchInput';

export const SearchInput = forwardRef<any, SearchInputProps>(
  (
    {
      value: valueProp,
      onChangeText,
      onSearch,
      debounceDelay = 300,
      onClear,
      placeholder,
      placeholderTextColor,
      error = false,
      disabled = false,
      focusBorderColor,
      style,
      searchIcon,
      ...textInputProps
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = useState(valueProp ?? '');

    // Use prop if provided (controlled), otherwise use internal state
    const value = valueProp ?? internalValue;

    // Sync internal state when prop changes
    useEffect(() => {
      if (valueProp !== undefined) {
        setInternalValue(valueProp);
      }
    }, [valueProp]);

    const debouncedSearch = useDebounce((text: string) => {
      onSearch?.(text);
    }, debounceDelay);

    const handleChangeText = useCallback(
      (text: string) => {
        // Update internal state
        setInternalValue(text);
        // Notify parent if callback provided (controlled mode)
        onChangeText?.(text);
        // Debounced search callback
        debouncedSearch(text);
      },
      [onChangeText, debouncedSearch]
    );

    const handleClear = useCallback(() => {
      // Update internal state
      setInternalValue('');
      // Notify parent
      onChangeText?.('');
      onClear?.();
      // Trigger search immediately on clear
      onSearch?.('');
    }, [onClear, onChangeText, onSearch]);

    // Default search icon as text fallback
    const defaultSearchIcon = <Text style={styles.searchIcon}>🔍</Text>;

    return (
      <View style={style}>
        <TextInput
          ref={ref}
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          leftIcon={searchIcon || defaultSearchIcon}
          onClear={handleClear}
          error={error}
          disabled={disabled}
          focusBorderColor={focusBorderColor}
          {...textInputProps}
        />
      </View>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;

const styles = StyleSheet.create({
  searchIcon: {
    fontSize: 18,
    color: SEARCH_INPUT_COLORS.icon,
  },
});
