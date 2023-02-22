React Native Picturebook is just an alternative to Storybook for React Native. It helps developer build react native components in isolation.

Why bother use it?

- Fucking small. It is less than 30kb.
- Small learning curve. Can master it under 10 minutes.
- No magic. It is just a react native component.
- Support Typescript

## Examples

### Hello World

```typescript
import {
  PictureBook,
  PictureBookPreview
} from "react-native-picturebook";

const book = new PictureBook([
  {
    name: "Button",
    body: () => (<Button>Submit</Button>)
  }
]),

function App() {
  return  (
    <SafeAreaView style={{ flex: 1 }}>
      <PictureBookPreview book={book} />
    </SafeAreaView>
  )
}
``` 

### Multiple page and sub page

```typescript
import {
  PictureBook,
  PictureBookPreview
} from "react-native-picturebook";

function ButtonPageBody() {
  return <Button>Submit</Button>;
}

function ButtonWithDropdownPageBody() {
  return <Button>Submit</Button>;
}

function TogglePageBody() {
  return <Toggle />
}

const book = new PictureBook([
  {
    name: "Button",
    body: ButtonPageBody
    // This is sub-page
    pages: [
      {
        name: "Button with dropdown",
        body: ButtonWithDropdownPageBody
      }
    ]
  },
  {
    name: "Toggle",
    body: TogglePageBody
  }
]),

function App() {
  return  (
    <SafeAreaView style={{ flex: 1 }}>
      <PictureBookPreview book={book} />
    </SafeAreaView>
  )
}
``` 

### Add some controls

```typescript
import {
  PictureBook,
  PictureBookPreview,
  textControl,
  choiceControl,
} from "react-native-picturebook";

function ButtonBodyPage({ text, mode }) {
  return <Button mode={mode}>{text}</Button>
}

const book = new PictureBook([
  {
    name: "Button",
    body: ButtonBodyPage,
    controls: [
      textControl({
        name: "text",
        defaultValue: "Submit"
      }),
      choiceControl({
        name: "mode",
        defaultValue: "outline",
        options: [ "outline", "solid"],
      }),
    ]
  }
]),

function App() {
  return  (
    <SafeAreaView style={{ flex: 1 }}>
      <PictureBookPreview book={book} />
    </SafeAreaView>
  )
}
```