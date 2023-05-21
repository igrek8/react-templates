# @react-templates/jest-serializer

Serializes React elements into an HTML snapshot.

## Usage

```jsonc
// package.json
{
  "jest": {
    "snapshotSerializers": ["@react-templates/jest-serializer"]
  }
}
```

```jsx
import React from 'react';

test('serializes to html', async () => {
  expect(
    <html>
      <head>
        <title>Snapshot</title>
      </head>
      <body>
        <p>Hello, John!</p>
      </body>
    </html>
  ).toMatchSnapshot();
});
```

```js
exports[`serializes to html`] = `
  <html>
    <head>
      <title>Snapshot</title>
    </head>
    <body>
      <p>Hello, John!</p>
    </body>
  </html>
`;
```
