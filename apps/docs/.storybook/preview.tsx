import React from 'react';
import type { Preview } from '@storybook/react';
import { DesignAssetsProvider } from '@petrvocelka/design-assets-react';
import {
  configureDesignAssets,
  defineDesignAssetsElements,
} from '@petrvocelka/design-assets-web-components/register';
import '../src/styles.css';

const docsAssetBaseUrl = 'design-assets';

configureDesignAssets({ baseUrl: docsAssetBaseUrl });
defineDesignAssetsElements();

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <DesignAssetsProvider baseUrl={docsAssetBaseUrl}>
        <Story />
      </DesignAssetsProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
};

export default preview;
