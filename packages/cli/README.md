# @react-templates/cli

Builds react based templates with CSS modules.

## Installation

```bash
npm install @react-templates/cli --save-dev
yarn add @react-templates/cli --dev
```

## Usage

Given that a project with the following content.

- `src`
  - `index.ts`
  - `templates/my-template-a.tsx`
  - `templates/my-template-a.module.css`
  - `templates/images/dog.jpeg`

Run the following command to build your project.

```bash
npx @react-templates/cli build -s src -o dist
```

This will compile sources and collect static files in the output directory.

- `dist`
  - `index.js`
  - `index.d.ts`
  - `templates/my-template-a`
  - `static/[hash].jpeg`

Upload content of `static/*` to to AWS S3, GCP Bucket, etc.

## Help

```
npx @react-templates/cli -h
```
