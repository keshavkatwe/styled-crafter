declare module 'styled-crafter' {
  export interface DefaultCrafter {
    spacing: string;
    colors: string;
    sizes: string;
    buttons: Record<
      'primary' | 'secondary',
      {
        'background-color': string;
        color: string;
      }
    >;
  }
}
