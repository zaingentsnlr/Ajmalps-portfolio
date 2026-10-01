# Ajmal P S — Personal portfolio

A responsive, dependency-free static portfolio. Source files are in `dist/`.

## Run locally

```sh
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. No build step is needed. Deploy `dist/` to any static host.

## Edit content

- `dist/index.html`: biography, experience, contact information, project cards.
- `dist/app.js`: project case studies and interactions.
- `dist/style.css`: responsive design and reduced-motion-aware animation.
- `dist/assets/`: supplied portrait, résumé, favicon.

Project illustrations are conceptual, not screenshots. Project status follows the supplied résumé. Email and LinkedIn link directly to the supplied contact details; there is no message collection backend. The site uses Google Fonts with system fallbacks.
