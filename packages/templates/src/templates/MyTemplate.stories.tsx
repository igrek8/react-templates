import type { Meta, StoryObj } from '@storybook/react';
import { MyTemplate } from './MyTemplate';

const meta: Meta<typeof MyTemplate> = {
  title: 'MyTemplate',
  component: MyTemplate,
};

export const Primary: StoryObj<typeof MyTemplate> = {
  args: { user: 'John' },
};

export default meta;
