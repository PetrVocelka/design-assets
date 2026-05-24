import React from 'react';
import type { Preview } from '@storybook/react';
import { DesignAssetsProvider } from '@design-assets/react';
import { defineDesignAssetsElements } from '@design-assets/web-components/register';
import '../src/styles.css';

defineDesignAssetsElements();

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <DesignAssetsProvider baseUrl="/design-assets">
        <Story />
      </DesignAssetsProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
};

export default preview;
