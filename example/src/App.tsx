import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  NumberInput,
  PasswordInput,
  TextInput,
  SearchInput,
  CTabs,
} from '@vincent/react-native-core-components';
import { useState } from 'react';

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Avatar name="AAA" size={50} />
      <Button text="Click me" variant="danger" />
      <Checkbox
        checked={checked}
        onPress={() => setChecked(!checked)}
        label="Click me"
      />
      <Divider />
      <NumberInput />
      <PasswordInput />

      <TextInput />
      <SearchInput onSearch={(text) => console.log(text)} />
      <CTabs
        tabs={[
          { label: 'Tab 1', value: 'tab1' },
          { label: 'Tab 2', value: 'tab2' },
        ]}
        value="tab1"
        onChange={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
