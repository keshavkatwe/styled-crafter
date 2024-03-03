declare module 'styled-crafter' {
  export interface DefaultCrafter {
    spacing: Record<string, string | number>;
    colors: Record<string, string | number>;
    sizes: Record<string, string | number>;
    radii: Record<string, string | number>;
    borderThickness: Record<string, string | number>;
  }
}
