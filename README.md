# Evals Lab — GitHub Pages package

This folder is the complete, editable website. It contains the Precision Workbench layout with the Midnight Observatory palette.

## Publish on GitHub Pages

1. Extract this ZIP on your computer.
2. Create or open the GitHub repository you want to use for Evals Lab.
3. Upload the extracted files to the root of the repository on its main branch. Upload the files, not the ZIP. `index.html` must be directly at the repository root, not inside an extra folder.
4. Open the repository’s Settings → Pages.
5. Under Build and deployment, select Deploy from a branch.
6. Select main and /(root), then Save.
7. Wait for GitHub’s Pages deployment to finish and use the website address shown there.

No custom domain or GitHub Actions workflow is required. The included `.nojekyll` file tells GitHub to serve the files directly; include it when committing the folder with Git. The site’s asset paths and hash-based navigation support a GitHub Pages project subfolder.

## Files

- `index.html` — website entry point
- `styles.css` — layout, colors, typography, and responsive styles
- `content.js` — five layers, fifteen guides, fifteen blueprints, references, and glossary
- `app.js` — navigation, search, filters, bookmarks, downloads, and experiments
- `favicon.svg` — browser icon
- `.nojekyll` — static serving marker

## Requirements

No installation, build step, backend, database, API keys, or OpenAI/Sites account is required to host this package. Google Fonts are loaded over the internet; local system fonts are used as fallbacks.

Saved reading, checklist state, and reading progress are stored only in the visitor’s browser. The three experiments are illustrative simulations, not production model integrations.

## Editing

Edit `content.js` to revise the knowledge collection and `styles.css` to change the appearance. Keep the five website files together. Publish updated files to the same repository branch to update the site.

## Verification

The source passed JavaScript syntax and content-reference checks. Desktop and mobile interactions were checked, including search, filtering, bookmarks, checklists, downloads, and the three experiments. Packaged website files were verified byte-for-byte against the checked source.
