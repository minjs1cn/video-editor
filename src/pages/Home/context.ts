import { createContext, useContext, useState } from 'react';
import { v4 } from 'uuid';

export enum TrackType {
  Video = 'video',
  Audio = 'audio',
  Text = 'text'
}

export type TimeRange = {
  start: number;
  duration: number;
};

export type Segment = {
  id: string;
  targetTimeRange: TimeRange;
};

export type Track = {
  type: TrackType;
  segments: Segment[];
};

export function useHomeContextValue() {
  const [duration, setDuration] = useState(30);
  const [ratio, setRatio] = useState(10);
  const [tracks, setTracks] = useState<Track[]>([
    {
      type: TrackType.Video,
      segments: [
        {
          id: v4(),
          targetTimeRange: {
            start: 0,
            duration: 10
          }
        }
      ]
    }
  ]);


  return {
    state: {
      tracks,
      duration,
      ratio
    },
    actions: {
      setTracks,
      setDuration,
      setRatio
    }
  };
}

export type HomeContextValue = ReturnType<typeof useHomeContextValue>;

export const HomeContext = createContext<HomeContextValue | null>(null);

export function useHomeContext() {
  return useContext(HomeContext) as HomeContextValue;
}
