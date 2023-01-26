import { Theme, ThemeOptions } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
    // interface Theme {
    //   status: {
    //     danger: string
    //   }
    // }
    // interface ThemeOptions {
    //   status: {
    //     danger: React.CSSProperties['color']
    //   }
    // }
  
    interface Palette {
      muted?: PaletteColor
    }
    interface PaletteOptions {
      muted?: PaletteColorOptions
    }
  
    interface PaletteColor {
        focus?: string
    }
  
    interface SimplePaletteColorOptions {
        focus?: string
    }
  }