// MOODY — Tailwind Config Compartilhado
// Usado em todas as páginas via <script src="src/js/tailwind.config.js">

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "inverse-primary": "#b1d400",
        "secondary-fixed": "#ffd8e9",
        "surface-variant": "#e3e4d1",
        "on-primary": "#ffffff",
        "surface-container": "#eeefdc",
        "surface-bright": "#fafbe7",
        "surface-container-low": "#f4f5e1",
        "primary-fixed": "#ccf230",
        "on-tertiary-fixed-variant": "#6f3900",
        "surface-container-high": "#e9ead6",
        "on-error-container": "#93000a",
        "tertiary-fixed-dim": "#ffb77f",
        "on-tertiary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "on-secondary-container": "#5e0042",
        "on-secondary-fixed-variant": "#890062",
        "secondary-fixed-dim": "#ffafd8",
        "on-primary-fixed-variant": "#3e4c00",
        "on-error": "#ffffff",
        "primary-container": "#d9ff3f",
        "surface-tint": "#536500",
        "inverse-on-surface": "#f1f2de",
        "error": "#ba1a1a",
        "inverse-surface": "#2f3225",
        "on-tertiary-fixed": "#2f1500",
        "on-tertiary-container": "#a65800",
        "secondary": "#b40082",
        "primary-fixed-dim": "#b1d400",
        "tertiary-container": "#ffece0",
        "background": "#fafbe7",
        "on-secondary": "#ffffff",
        "outline": "#757962",
        "on-primary-fixed": "#171e00",
        "on-secondary-fixed": "#3c0029",
        "secondary-container": "#fe4ebe",
        "surface-container-highest": "#e3e4d1",
        "on-surface-variant": "#454934",
        "on-background": "#1a1d11",
        "outline-variant": "#c5c9ae",
        "on-surface": "#1a1d11",
        "tertiary": "#914c00",
        "error-container": "#ffdad6",
        "surface": "#fafbe7",
        "on-primary-container": "#607400",
        "primary": "#536500",
        "surface-dim": "#dadbc8",
        "tertiary-fixed": "#ffdcc4"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "section-gap": "120px",
        "gutter": "24px",
        "margin-safe": "32px",
        "unit": "8px"
      },
      fontFamily: {
        "headline-lg": ["Bricolage Grotesque"],
        "body-lg": ["Hanken Grotesk"],
        "headline-md": ["Bricolage Grotesque"],
        "headline-lg-mobile": ["Bricolage Grotesque"],
        "body-md": ["Hanken Grotesk"],
        "headline-xl": ["Bricolage Grotesque"],
        "label-caps": ["Hanken Grotesk"]
      },
      fontSize: {
        "headline-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-md": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
        "headline-lg-mobile": ["36px", {"lineHeight": "1.1", "fontWeight": "800"}],
        "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
        "headline-xl": ["80px", {"lineHeight": "1.0", "letterSpacing": "-0.04em", "fontWeight": "800"}],
        "label-caps": ["14px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "700"}]
      }
    }
  }
};
