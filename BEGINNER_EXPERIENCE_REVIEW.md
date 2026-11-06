# Evals Lab — beginner knowledge-layout review

Reviewed November 6, 2026. This is a structured first-time-reader walkthrough of version 3 and a record of the changes in version 4. It identifies likely friction; it is not a usability study with recruited learners.

## Assessment

Version 3 worked as a topic reference for someone who already understood evaluation. It was harder to use as a first learning experience. The visual framework was strong, but the site assumed that a visitor knew what an eval was, could choose between learning and implementation, and understood the prerequisites behind project names.

| A new visitor’s question | Friction in version 3 | Change in version 4 |
| --- | --- | --- |
| What am I looking at? | The hero led with evidence and shipping, without a plain definition of an eval. | The homepage defines an eval as a repeatable test of whether an AI system does the intended job. |
| Do I need to know AI or coding first? | The project vocabulary and technical starters made that unclear. | The beginner path explicitly assumes no evaluation experience and needs no coding. Implementation plans state their assumptions separately. |
| Where should I start? | Understand, Build, and Explore competed as equally prominent choices. The map initially selected Measurement. | Start here is the primary homepage action and a persistent navigation entry. The framework initially selects Foundation. |
| How do I go about learning this? | There was no recommended sequence or first task to complete. | Seven linked lessons progress from the idea to success criteria, cases, grading, failure behavior, a decision, and a practice exercise. |
| Where does this page belong? | A layer breadcrumb showed a topic category but not a learning stage. | A visible orientation panel names the layer, learning phase, and beginner-path step where applicable. |
| Is this beginner, intermediate, or advanced? | Labels such as Core system described a project category, not the knowledge it assumed. | Lessons, plans, experiments, templates, and references have explicit knowledge-level labels. |
| Am I learning an idea or building something? | The same broad guide language was used across different activities. | Separate content-type labels distinguish concepts, how-to guides, implementation plans, exercises, experiments, templates, checklists, references, and overviews. |
| What should I know before reading? | Prerequisites were implicit in terms such as calibration, trajectory, and DPO. | Pages link to prerequisite lessons. Advanced plans also state implementation assumptions, and selected guides explain key terms in context. |
| What should I be able to do afterward? | Pages described a topic but did not consistently state an observable outcome. | Each lesson and plan states what the reader will learn or build. |
| What should I do next? | Related projects were available, but a novice could jump into a complex implementation too early. | Lessons offer a recommended next step; beginner lessons have previous/next navigation, completion controls, and a link back to the full path. |
| How do I apply this without infrastructure? | The practical examples were mostly engineering blueprints. | A fictional returns assistant provides five constructed answers to grade, a blank CSV worksheet, and a worked solution. |

## The beginner route

1. What is an AI evaluation? — Beginner / Concept lesson
2. Define success before scoring — Beginner / Concept lesson
3. Build a useful golden set — Beginner / How-to guide
4. Choose the right kind of grader — Beginner / Concept lesson
5. What should happen when the AI cannot answer? — Beginner / Concept lesson
6. Connect evidence to a release decision — Beginner / How-to guide
7. Run your first evaluation without code — Beginner / Practice exercise

Allow approximately an hour, including the constructed exercise. The learner’s output is a small set of graded cases and an action plan, not a production evaluation platform.

The lesson sequence follows the design of a first evaluation. The five nested layers remain the framework for organizing responsibilities. Layer order and lesson order are explicitly distinguished so a learner can see both where a topic belongs and when to study it.

## Classification rules

Difficulty describes prerequisites, not the topic’s importance, reading time, or implementation effort.

- **Beginner:** no prior evaluation experience; a lesson can depend on earlier beginner lessons. The core path requires no coding.
- **Intermediate:** assumes an understanding of test cases, grading, and evaluation design. Implementation work may require coding.
- **Advanced:** assumes implementation experience and relevant statistical, agent, training, or production knowledge.

Content type describes the reader’s activity:

- **Concept lesson:** understand an idea and explain its implications.
- **How-to guide:** follow a method and produce a defined artifact.
- **Practice exercise:** apply a method to a small example.
- **Implementation plan:** design and build an engineering system.
- **Methodology plan:** produce a reproducible account of grading, evidence, and comparison methods.
- **Interactive experiment:** explore a controlled teaching mechanism in the browser.
- **Reusable template:** adapt a document, schema, prompt, or checklist.
- **Readiness checklist:** review an actual implementation or evidence package.
- **Reference:** look up a definition, original document, or research source.
- **Layer overview:** locate a topic within the overall framework; the resources inside it can have different levels.

## Guarding against false progress

Reading completion is stored as personal progress, not proof of competence. The five-case exercise is explicitly constructed, and its result does not establish production reliability. Operational readiness checklists are separated from lesson completion.

## Validation

The content checks verify that every lesson and project has a valid level and type, every prerequisite and next link resolves, the prerequisite graph has no cycles, and beginner-path prerequisites refer to earlier lessons. The browser review checks orientation, filtering, next-step navigation, the worksheet, and mobile layout.

A useful next validation step is a short session with a new reader: ask them to identify what the site teaches, open the first lesson without assistance, explain one test case, identify an advanced page’s prerequisites, and choose the next lesson. That would test the assumptions behind this review with observed behavior.
