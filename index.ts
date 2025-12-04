import type RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.js';
import type { Region } from 'wavesurfer.js/dist/plugins/regions.js';


export const getRegionWithId = (
  regions: RegionsPlugin,
  id: string
): Region | undefined => regions.getRegions().find((r) => r.id === id);
