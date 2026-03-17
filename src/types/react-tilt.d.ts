declare module 'react-tilt' {
  import { ReactNode, ComponentType } from 'react';

  export interface TiltProps {
    options?: {
      max?: number;
      perspective?: number;
      scale?: number;
      speed?: number;
      transition?: boolean;
      axis?: 'x' | 'y' | null;
      reset?: boolean;
      easing?: string;
    };
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
  }

  export const Tilt: ComponentType<TiltProps>;
}
