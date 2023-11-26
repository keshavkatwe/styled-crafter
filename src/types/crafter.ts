declare module 'styled-crafter' {
  export interface DefaultCrafter {
    spacing: string;
    color: string;
    buttons: Record<
      'primary' | 'secondary',
      {
        'background-color': string;
        color: string;
      }
    >;
  }
}
