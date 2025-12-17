# @vincent-hyu-uit/react-native-core-components

A collection of customizable, pure React Native UI components for building beautiful mobile applications.

## Installation

```sh
npm install @vincent-hyu-uit/react-native-core-components
# or
yarn add @vincent-hyu-uit/react-native-core-components
```

## Components

### Button

A customizable button with multiple variants and sizes.

```tsx
import { Button } from '@vincent-hyu-uit/react-native-core-components';

<Button
  text="Click me"
  variant="primary"
  size="md"
  onPress={() => console.log('Pressed!')}
/>

<Button
  text="Loading..."
  variant="secondary"
  loading
/>

<Button
  text="Delete"
  variant="danger"
  leftIcon={<TrashIcon />}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | required | Button text |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'text' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable the button |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `leftIcon` | `ReactNode` | - | Icon on the left |
| `rightIcon` | `ReactNode` | - | Icon on the right |

---

### TextInput

A styled text input with support for icons, clear button, and error states.

```tsx
import { TextInput } from '@vincent-hyu-uit/react-native-core-components';

const [value, setValue] = useState('');

<TextInput
  value={value}
  onChangeText={setValue}
  placeholder="Enter your email"
  onClear={() => setValue('')}
/>

<TextInput
  value={value}
  onChangeText={setValue}
  placeholder="Search..."
  leftIcon={<SearchIcon />}
  error={!isValid}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Input value |
| `onChangeText` | `(text: string) => void` | - | Text change callback |
| `placeholder` | `string` | - | Placeholder text |
| `leftIcon` | `ReactNode` | - | Left icon component |
| `rightIcon` | `ReactNode` | - | Right icon (or clear button) |
| `onClear` | `() => void` | - | Clear button callback |
| `showClearButton` | `boolean` | `true` | Show clear button when has value |
| `error` | `boolean` | `false` | Show error state |
| `disabled` | `boolean` | `false` | Disable the input |

---

### PasswordInput

A password input with show/hide toggle.

```tsx
import { PasswordInput } from '@vincent-hyu-uit/react-native-core-components';

const [password, setPassword] = useState('');

<PasswordInput
  value={password}
  onChangeText={setPassword}
  placeholder="Enter password"
/>
```

---

### NumberInput

A numeric input with formatted display.

```tsx
import { NumberInput } from '@vincent-hyu-uit/react-native-core-components';

const [amount, setAmount] = useState(0);

<NumberInput
  value={amount}
  onChangeValue={setAmount}
  prefix="$"
  placeholder="0.00"
/>
```

---

### SearchInput

A search input with debounced search callback.

```tsx
import { SearchInput } from '@vincent-hyu-uit/react-native-core-components';

<SearchInput
  placeholder="Search products..."
  onSearch={(text) => fetchResults(text)}
  debounceTime={300}
/>
```

---

### Checkbox

A customizable checkbox component.

```tsx
import { Checkbox } from '@vincent-hyu-uit/react-native-core-components';

const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onPress={() => setChecked(!checked)}
  label="I agree to the terms"
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | required | Whether checked |
| `onPress` | `() => void` | required | Press callback |
| `label` | `string \| ReactNode` | - | Label text |
| `disabled` | `boolean` | `false` | Disable checkbox |
| `error` | `boolean` | `false` | Show error state |
| `size` | `number` | `24` | Checkbox size |

---

### Avatar

Display user avatars with initials fallback.

```tsx
import { Avatar } from '@vincent-hyu-uit/react-native-core-components';

<Avatar name="John Doe" size={50} />

<Avatar
  name="Jane"
  source={{ uri: 'https://example.com/avatar.jpg' }}
  size={40}
/>
```

---

### CTabs

A tab selector component.

```tsx
import { CTabs } from '@vincent-hyu-uit/react-native-core-components';

const [activeTab, setActiveTab] = useState('tab1');

<CTabs
  tabs={[
    { label: 'Overview', value: 'tab1' },
    { label: 'Details', value: 'tab2' },
    { label: 'Reviews', value: 'tab3' },
  ]}
  value={activeTab}
  onChange={setActiveTab}
/>
```

---

### Divider

A simple horizontal divider.

```tsx
import { Divider } from '@vincent-hyu-uit/react-native-core-components';

<Divider />
<Divider color="#ccc" thickness={2} />
```

---

### Loading

A loading indicator.

```tsx
import { Loading } from '@vincent-hyu-uit/react-native-core-components';

<Loading />
<Loading size="large" color="#3b82f6" />
```

---

### RefreshControl

A styled refresh control for ScrollView/FlatList.

```tsx
import { RefreshControl } from '@vincent-hyu-uit/react-native-core-components';

<ScrollView
  refreshControl={
    <RefreshControl
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  }
>
  {/* content */}
</ScrollView>
```

---

## Utilities

### debounce & useDebounce

```tsx
import { debounce, useDebounce } from '@vincent-hyu-uit/react-native-core-components';

// Function debounce
const debouncedSearch = debounce((text) => {
  fetchResults(text);
}, 300);

// Hook
const debouncedValue = useDebounce(searchText, 300);

useEffect(() => {
  if (debouncedValue) {
    fetchResults(debouncedValue);
  }
}, [debouncedValue]);
```

---

## License

MIT

---

Made with ❤️ by [vincent](https://github.com/hyu-uit)
