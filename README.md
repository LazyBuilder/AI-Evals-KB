# Evals Lab — GitHub Pages package, version 3

A complete static field guide with a distinct illustration for every project.

## Publish or update

1. Extract the ZIP and upload ALL files and folders to the repository root on main.
2. Include `readability.css`, `assets/`, and all other website files. Do not upload only the ZIP or nest the website inside an extra folder.
3. In Settings → Pages, keep Deploy from a branch → main → /(root).
4. Wait for GitHub to publish the update. Hard-refresh if your browser still shows the old version.

`index.html` belongs directly at the repository root. There is no installation, build command, backend, API key, or custom Actions workflow.

## What changed in version 3

- Fifteen new, individually generated project illustrations, each with a distinct subject and composition.
- The five chapter illustrations are now reserved for their chapter introductions.
- Each project card and its own detail page share that project's visual identity; different projects no longer reuse a chapter image.
- Short practical guides use text-led headers instead of repeating chapter cover images.
- The overview retains its original hero image; related and featured cards use the corresponding project's unique thumbnail.
- The larger fonts, brighter text, and section gradients from version 2 are retained.

## Contents

- `index.html`, `styles.css`, `readability.css`, `app.js`, `content.js`, `favicon.svg`
- `assets/images/`: 21 original illustrations plus 21 smaller responsive versions
- `ARTWORK_MANIFEST.json`: the hero, chapter, and project artwork assignments
- `IMAGE_CREDITS.md`: image provenance and usage notes
- `IMAGE_PROMPTS.json`: the complete built-in image-generation prompt set
- `.nojekyll`: static serving marker

All images are packaged locally. Google Fonts load over the internet with system-font fallbacks. Bookmarks and checklist state stay in each visitor's browser. Experiments use constructed teaching examples and do not operate a production service.

Edit `content.js` for knowledge content and `readability.css` for the visual refinements. Keep all website files and asset folders together.

## Verification

JavaScript syntax, content links, image formats, and unique project-image assignments were checked. The catalog was reviewed for visual repetition and desktop/mobile layouts were checked. Packaged files were verified against the checked source. No publishing was performed for this update.
