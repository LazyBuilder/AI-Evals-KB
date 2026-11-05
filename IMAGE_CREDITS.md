# Evals Lab imagery

Twenty-one original editorial illustrations were created with the built-in OpenAI image generation tool for this website on November 5, 2026. They are conceptual illustrations, not photographs of actual infrastructure or scientific diagrams.

The website packages optimized WebP images locally in `assets/images/`, with a smaller responsive version for each image. Nothing is hotlinked from the Voice AI website. That website was used only as a design reference.

## Usage in version 3

- The overview uses one hero illustration.
- Each of the five chapters has its own chapter illustration.
- Each of the fifteen projects has a distinct, separately generated subject and composition. A project card and its own detail page share that identity; different projects do not reuse chapter artwork.
- Short practical guides use text-led headers, avoiding repeated chapter cover images.

## Prompt set and assignments

The complete generation prompts are in `IMAGE_PROMPTS.json`. `ARTWORK_MANIFEST.json` records the image assignments and descriptions.

| File | Placement | Subject |
| --- | --- | --- |
| hero.webp | overview | Evidence through five layers |
| foundation.webp | chapter | Foundation — Test data |
| definition.webp | chapter | Definition — Success criteria |
| measurement.webp | chapter | Measurement — Evals |
| protection.webp | chapter | Protection — Guardrails |
| authority.webp | chapter | Authority — Sign-off |
| project-trajectory.webp | project | Trajectory Grading Engine |
| project-shadow.webp | project | Shadow Routing Comparator |
| project-judge.webp | project | Calibrated LLM-as-a-Judge |
| project-gate.webp | project | CI/CD Regression Gate |
| project-rag.webp | project | RAG Adversarial Harness |
| project-dpo.webp | project | Automated DPO Flywheel |
| project-significance.webp | project | Statistical Significance Engine |
| project-fuzzer.webp | project | Agent Red-Team Fuzzer |
| project-drift.webp | project | Production Drift Monitor |
| project-pareto.webp | project | Cost–Quality Pareto Dashboard |
| project-replay.webp | project | Counterfactual Replay Debugger |
| project-synthetic.webp | project | Synthetic Edge-Case Generator |
| project-context.webp | project | Context Window Eviction Tester |
| project-contamination.webp | project | Dataset Contamination Checker |
| project-methodology.webp | project | Public Eval Methodology Teardown |

Every file also has a `-small.webp` version for smaller screens.
