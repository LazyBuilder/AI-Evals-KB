# Evals Lab — GitHub Pages package, version 2

The complete static website, with the Precision Workbench layout, Midnight Observatory colors, larger reading text, higher contrast, section gradients, and six original editorial illustrations.

## Publish or update the site

1. Extract this ZIP.
2. Upload ALL extracted files and folders to your repository’s root on main. Include the new `readability.css` file and the entire `assets/` folder. Do not upload only the ZIP or place the files inside an extra folder.
3. In Settings → Pages, use Deploy from a branch → main → /(root), then Save if you have not already configured it.
4. GitHub will publish the changes. If the previous appearance is cached, hard-refresh the page.

`index.html` must be directly at the repository root. No custom Actions workflow, build command, backend, or API keys are needed. Asset paths and hash navigation work in a GitHub Pages project subfolder.

## Included files

- `index.html` — entry point
- `styles.css` — base layout and styles
- `readability.css` — larger type, improved contrast, gradients, and image layouts
- `app.js` — navigation, search, filters, bookmarks, downloads, and experiments
- `content.js` — five layers, fifteen guides, fifteen blueprints, sources, and glossary
- `favicon.svg` — browser icon
- `assets/images/` — six optimized WebP illustrations and six smaller responsive versions
- `IMAGE_CREDITS.md` — image provenance and descriptions
- `IMAGE_PROMPTS.json` — full prompt set used with built-in image generation
- `.nojekyll` — direct static serving marker

Keep all files and folders together. The images are packaged locally; they are not linked from the Voice AI website or an image hosting service. The Voice AI site was used only as a visual reference.

## Reading improvements

- Desktop article paragraphs: 18px; mobile: 17px
- Card descriptions: 16px
- Larger controls, clearer labels, and brighter secondary text
- Gentle gradients highlight the hero, layer panels, section headings, and reading callouts
- Layer images appear in chapter introductions, article covers, and project cards

## Requirements and behavior

No OpenAI or Sites account is required to host this package. Google Fonts load over the internet with system font fallbacks. Personal reading lists and checklist state stay in the visitor’s browser. Teaching experiments use constructed examples and do not call a live model or production service.

## Verification

JavaScript syntax and content-reference checks passed. Image files, package integrity, and relative asset paths were verified. Desktop and mobile layouts were checked down to 320px, including article text, image sizing, project search, and navigation. No publishing was performed for this update.
