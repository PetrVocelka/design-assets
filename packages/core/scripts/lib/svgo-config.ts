import type { PluginConfig } from 'svgo';

const basePlugins: PluginConfig[] = [
  {
    name: 'preset-default',
    params: {
      overrides: {
        removeViewBox: false,
        collapseGroups: false,
      },
    },
  },
  'removeTitle',
  'removeDesc',
  'removeMetadata',
  'removeComments',
  'removeEditorsNSData',
];

export function getSvgoConfig(category: string): PluginConfig[] {
  if (category === 'icons') {
    return [
      ...basePlugins,
      {
        name: 'convertColors',
        params: {
          currentColor: true,
        },
      },
    ];
  }

  return basePlugins;
}
