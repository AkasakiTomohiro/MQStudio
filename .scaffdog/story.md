---
name: 'MQStudio'
root: './src/stories'
output: '/'
ignore: ['src/__snapshots__', 'src/assets']
questions:
  storyName: 'Story name. (e.g. Button, Header)'
  layer:
    message: 'Generate Layer'
    choices: ['L1', 'L2', 'L3', 'L4', 'L5']
---

# `{{- inputs.storyName | pascal | define "Component" -}}{{ inputs.layer }}/{{ Component }}.stories.tsx`

```typescript
import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { {{ Component }}, I{{ Component }}Props } from './{{ Component }}';

export default {
  title    : 'MQStudio/{{ inputs.layer }}/{{ Component }}',
  component: {{ Component }}
} as Meta;

const Template: Story<I{{ Component }}Props> = (args: any) => <{{ Component }} {...args} />;

export const Primary = Template.bind({});

```

# `{{ inputs.layer }}/{{ Component }}.tsx`

```typescript

export interface I{{ Component }}Props {

}

/**
 * Primary UI component for user interaction
 */
export const {{ Component }} = (props: I{{ Component }}Props): JSX.Element => {

  return (
    <div>

    </div>
  );
};

```
