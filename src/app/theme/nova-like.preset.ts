import { definePreset } from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';

// Closer to legacy PrimeNG/Nova visual style:
// - Nora base preset (enterprise/classic flavor)
// - blue primary palette
// - neutral light surfaces
const NovaLikePreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    },
    colorScheme: {
      light: {
        content: {
          borderColor: '{gray.300}'
        },
        formField: {
          borderColor: '{gray.400}',
          hoverBorderColor: '{gray.500}'
        },
        surface: {
          0: '#ffffff',
          50: '{gray.50}',
          100: '{gray.100}',
          200: '{gray.200}',
          300: '{gray.300}',
          400: '{gray.400}',
          500: '{gray.500}',
          600: '{gray.600}',
          700: '{gray.700}',
          800: '{gray.800}',
          900: '{gray.900}',
          950: '{gray.950}'
        }
      }
    }
  },
  components: {
    accordion: {
      panel: {
        borderColor: '{gray.300}'
      },
      header: {
        borderColor: '{gray.300}',
        borderWidth: '1px',
        padding: '0.875rem 1rem',
        fontWeight: '700'
      },
      content: {
        borderWidth: '0 1px 1px 1px',
        borderColor: '{gray.300}',
        padding: '1rem'
      },
      colorScheme: {
        light: {
          header: {
            background: '{gray.100}',
            hoverBackground: '{gray.200}',
            activeBackground: '{gray.100}',
            activeHoverBackground: '{gray.200}'
          }
        }
      }
    },
    datatable: {
      header: {
        borderColor: '{gray.300}',
        borderWidth: '1px 0 1px 0',
        padding: '0.625rem 0.875rem'
      },
      headerCell: {
        borderColor: '{gray.300}',
        padding: '0.625rem 0.875rem'
      },
      bodyCell: {
        borderColor: '{gray.300}',
        padding: '0.625rem 0.875rem'
      },
      footerCell: {
        borderColor: '{gray.300}',
        padding: '0.625rem 0.875rem'
      },
      colorScheme: {
        light: {
          root: {
            borderColor: '{gray.300}'
          },
          header: {
            background: '{gray.100}',
            color: '{text.color}'
          },
          headerCell: {
            background: '{gray.100}',
            hoverBackground: '{gray.200}',
            color: '{text.color}'
          },
          row: {
            hoverBackground: '{gray.100}',
            stripedBackground: '{gray.50}'
          },
          footer: {
            background: '{gray.100}',
            color: '{text.color}'
          },
          footerCell: {
            background: '{gray.100}',
            color: '{text.color}'
          },
          bodyCell: {
            selectedBorderColor: '{blue.200}'
          }
        }
      }
    }
  }
});

export default NovaLikePreset;
