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
  FormField,
  FormCheckbox,
  FormNumberInput,
  FormPasswordField,
  FormSelect,
  FormTextarea,
} from '@vincent/react-native-core-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const [checked, setChecked] = useState(false);
  const { control } = useForm();
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

      <FormField name="name" control={control} label="Name" />
      <FormCheckbox name="isAdmin" control={control} label="Is Admin" />
      <FormNumberInput name="age" control={control} label="Age" />
      <FormPasswordField name="password" control={control} label="Password" />
      <FormSelect
        name="role"
        control={control}
        label="Role"
        onPress={() => {}}
      />
      <FormTextarea name="bio" control={control} label="Bio" />
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
