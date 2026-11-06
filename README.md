# Evals Lab — GitHub Pages package, version 4

A beginner-oriented static field guide with a seven-step learning path, explicit content types and levels, and distinct project artwork.

## Publish or update

1. Extract the ZIP and upload ALL files and folders to the repository root on main.
2. Include `learning.js`, `learning.css`, `readability.css`, `assets/`, and all other website files. Do not upload only the ZIP or nest the website inside an extra folder.
3. In Settings → Pages, keep Deploy from a branch → main → /(root).
4. Wait for GitHub to publish the update. Hard-refresh if your browser still shows the old version.

`index.html` belongs directly at the repository root. There is no installation, build command, backend, API key, or custom Actions workflow.

## What changed in version 4

- The homepage explains what an AI eval is and gives a single primary Start here action.
- A seven-step beginner path assumes no previous evaluation knowledge and needs no coding.
- Eighteen lessons and guides include three new resources: an introduction, safe failure behavior, and a no-code practice exercise.
- Every lesson and project plan has a difficulty level and content type.
- Orientation panels explain where a page fits, its outcome, and prerequisites.
- Beginner lessons include previous/next navigation and optional completion tracking.
- A five-case fictional example includes a blank CSV worksheet and an expandable worked solution.
- The Library filters by level and content type; project plans filter by level.
- Experiments, templates, references, and operational checklists are distinguished from concept lessons.
- Existing typography, gradients, twenty-one illustrations, and fifteen project plans are retained.

## Contents

- `index.html`, `styles.css`, `readability.css`, `app.js`, `content.js`, `learning.js`, `learning.css`, `favicon.svg`
- `assets/images/`: 21 original illustrations plus 21 smaller responsive versions
- `ARTWORK_MANIFEST.json`: the hero, chapter, and project artwork assignments
- `IMAGE_CREDITS.md`: image provenance and usage notes
- `IMAGE_PROMPTS.json`: the complete built-in image-generation prompt set
- `LEARNING_MAP.json`: resource levels, types, prerequisites, and beginner-path order
- `BEGINNER_EXPERIENCE_REVIEW.md`: assessment and rationale for the changes
- `.nojekyll`: static serving marker

All images are packaged locally. Google Fonts load over the internet with system-font fallbacks. Bookmarks and checklist state stay in each visitor's browser. Experiments use constructed teaching examples and do not operate a production service.

Edit `content.js` for the original collection, `learning.js` for the learning path and classification, and the CSS files for the visual design. Keep all website files and asset folders together.

## Verification

JavaScript syntax, content links, prerequisite references, an acyclic prerequisite graph, valid classifications, beginner-path order, and image assignments were checked. Learning navigation, filtering, progress, the worksheet, and desktop/mobile layouts were reviewed. Packaged files were verified against the checked source. No publishing was performed for this update.
