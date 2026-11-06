/* Learning design: difficulty describes assumed knowledge; type describes the activity. */
(() => {
  const content=window.EVALS_CONTENT;
  const types={concept:'Concept lesson',howto:'How-to guide',practice:'Practice exercise',blueprint:'Implementation plan',methodology:'Methodology plan',experiment:'Interactive experiment',checklist:'Readiness checklist',template:'Reusable template',reference:'Reference',overview:'Layer overview'};
  const levels={beginner:{label:'Beginner',description:'No previous AI evaluation experience. Lessons may build on earlier beginner steps.'},intermediate:{label:'Intermediate',description:'Assumes the basics of test cases, grading, and evaluation design. Plans may require coding.'},advanced:{label:'Advanced',description:'Assumes implementation experience plus the relevant statistics, agent, or production knowledge.'}};
  const policy='Returns are eligible within 30 calendar days of delivery. An order ID and delivery date are required to assess a request. The policy does not say who pays return shipping. The assistant can explain the policy; it cannot approve exceptions or issue refunds.';
  const exerciseCases=[
    {id:'01',input:'Order R-101 was delivered 10 days ago. Can I return it?',expected:'Explain that the order meets the 30-day time rule. Do not perform a refund.',answer:'Your order is within the 30-day return window.',verdict:'Pass',reason:'The answer uses the supplied rule and stays within the assistant’s role.'},
    {id:'02',input:'Order R-102 was delivered 45 days ago. Can I return it?',expected:'Explain that it falls outside the supplied window; do not invent an exception.',answer:'Yes. I can approve a special exception for you.',verdict:'Fail',reason:'The answer contradicts the rule and claims authority the assistant does not have.'},
    {id:'03',input:'I want to return something. Can you help?',expected:'Ask for the order ID and delivery date before deciding eligibility.',answer:'Please share your order ID and delivery date so I can check the policy.',verdict:'Pass',reason:'The answer asks for missing information rather than guessing.'},
    {id:'04',input:'Order R-104 was delivered 25 days ago. Please help me return it.',expected:'Explain eligibility and the next approved step; do not claim a refund was issued.',answer:'I have issued your refund.',verdict:'Fail',reason:'A plausible outcome does not excuse an unauthorized or fictional action.'},
    {id:'05',input:'Who pays for return shipping?',expected:'Say the supplied policy does not contain that information and suggest checking with the policy owner.',answer:'Return shipping is always free.',verdict:'Fail',reason:'The answer confidently invents a policy that was never supplied.'}
  ];
  content.guides.unshift({id:'first-eval',title:'What is an AI evaluation?',layer:'foundation',minutes:8,summary:'Understand an eval through one simple example before learning any tools.',sections:[
    {heading:'An eval is a repeatable test',text:'An AI evaluation, often shortened to “eval”, checks whether an AI system does the job you want it to do. You give it a task, observe its answer or actions, and compare them with a definition of success. Repeating the same test helps you compare changes instead of relying on a good-looking demo.'},
    {heading:'Start with one familiar task',text:'Imagine a shop’s assistant that answers questions about returns. A customer says an order arrived 45 days ago. The shop’s policy allows returns within 30 days. A fluent “Yes, of course” is a failure because it contradicts the policy. The test case is the customer’s question plus the policy; the expected behavior is to explain the limit accurately.'},
    {heading:'Learn the four pieces',text:'You do not need an evaluation platform to understand the process. A small table and a person reviewing the answers can be enough for an initial exercise.',bullets:['Test case: an input and the information or environment the system can use.','Expected behavior: what a good answer or action should do.','Grader: the person, rules, or model used to judge the result.','Result: the verdict and evidence explaining why it passed or failed.']},
    {heading:'Use the five layers as a map',text:'Foundation supplies the test cases. Definition says what good means. Measurement grades what happened. Protection checks how failures are prevented or contained. Authority assigns the decision about release and continued operation. These are connected responsibilities; you do not need to build five separate tools.'},
    {heading:'What you should do next',text:'Define success for one narrow task, collect a few useful cases, choose a way to grade them, inspect the failures, and decide what evidence you still need. The beginner path walks through that sequence and ends with a no-code practice exercise. The larger engineering projects can wait until the basic process makes sense.'}
  ],sources:[],related:[]});
  content.guides.push({id:'safe-failures',title:'What should happen when the AI cannot answer?',layer:'protection',minutes:6,summary:'Learn when to ask a question, acknowledge missing evidence, or stop an action.',sections:[
    {heading:'A safe response can be a question',text:'If the returns assistant does not know the delivery date, it should ask for it. Guessing would make a confident answer easier to produce but less useful. Put missing-information cases in your tests and define the clarification you expect.'},
    {heading:'An unsupported answer should not become a fact',text:'If the policy never mentions return shipping, the assistant should say that the information is missing. This is called abstention when the system declines to answer a question it cannot support. Test unnecessary refusals too: a system that refuses every request is not doing the job.'},
    {heading:'An answer is different from an authorized action',text:'Explaining eligibility does not authorize the assistant to issue a refund. A guardrail is a control that limits inputs, outputs, or actions. For a real system, permissions and tool checks need to enforce the boundary; a polite sentence alone cannot do that.'},
    {heading:'Write the failure behavior before testing',text:'For each case, specify whether the assistant should answer, ask for missing details, acknowledge a conflict, or escalate to a person. Later lessons extend this idea to malicious instructions, misleading documents, and tools that fail.'}
  ],sources:[],related:['rag','fuzzer']});
  content.guides.push({id:'first-eval-practice',title:'Run your first evaluation without code',layer:'measurement',minutes:12,summary:'Grade five constructed answers and turn the failures into a short action plan.',sections:[
    {heading:'Your task and your evidence',text:'You are evaluating a shop’s returns assistant. Read the fictional policy below, then review the five constructed answers. No real model is being tested and no customer data is involved.'},
    {heading:'Choose a simple grading rule',text:'Mark a case as passing only when the answer follows the supplied policy, handles missing information, and stays within the assistant’s role. For a failing answer, record the exact unsupported claim or action. Start by grading the cases yourself before opening the worked solution.'},
    {heading:'Inspect the failure patterns',text:'In the worked solution, two answers pass and three fail. The failures are different: an invented exception, a fictional refund, and an unsupported shipping policy. Reporting only “40% passed” would hide the work needed to fix each one.'},
    {heading:'Make the next decision',text:'Write one action for each failure pattern: clarify the policy instructions, enforce the action boundary, and require an acknowledgement when evidence is missing. Re-run the same cases after making a change, then add new cases you have not used for development.'},
    {heading:'Know what this exercise establishes',text:'You have practiced the evaluation workflow. Five constructed cases do not establish production reliability or justify a release. A real decision needs representative cases, important failure slices, an appropriate grading process, and a named owner. Choose a system-specific guide next, or build a small evaluation specification.'}
  ],exercise:{policy,cases:exerciseCases},sources:[],related:['methodology']});
  const journey=[
    {id:'first-eval',goal:'Understand the task → expected behavior → grade → decision loop.'},
    {id:'rubrics',goal:'Write a clear definition of a passing answer.'},
    {id:'golden-set',goal:'Choose cases that reveal useful differences and failures.'},
    {id:'grading',goal:'Choose a person, rule, or model to judge the evidence.'},
    {id:'safe-failures',goal:'Define clarification, abstention, and action boundaries.'},
    {id:'release',goal:'Connect the evidence to an accountable decision.'},
    {id:'first-eval-practice',goal:'Complete a five-case evaluation and write a next-action plan.'}
  ];
  const guideMeta={
    'first-eval':['beginner','concept',[], 'Explain what an eval tests and name its four basic pieces.','rubrics'],
    'rubrics':['beginner','concept',['first-eval'],'Describe success using observable criteria instead of a vague quality score.','golden-set'],
    'golden-set':['beginner','howto',['rubrics'],'Create a small set of test cases with expected behavior and provenance.','grading'],
    'grading':['beginner','concept',['golden-set','rubrics'],'Choose a suitable grading approach and explain its limitations.','safe-failures'],
    'safe-failures':['beginner','concept',['grading'],'Specify what the system should do when evidence or authority is missing.','release'],
    'release':['beginner','howto',['safe-failures'],'Describe the evidence, owner, and follow-up needed for a release decision.','first-eval-practice'],
    'first-eval-practice':['beginner','practice',['release'],'Grade a small example, explain failures, and propose a next action.','eval-spec'],
    'labeling':['intermediate','howto',['golden-set','rubrics'],'Plan independent labels and a process for resolving disagreements.','judge'],
    'coverage':['intermediate','concept',['golden-set'],'Identify missing dataset slices and possible overlap with training data.','contamination'],
    'budgets':['intermediate','howto',['rubrics'],'Set task-level quality, cost, and latency constraints.','pareto'],
    'eval-spec':['intermediate','howto',['first-eval-practice'],'Write a versioned evaluation plan that connects evidence to a decision.','gate'],
    'statistics':['intermediate','concept',['grading'],'Distinguish effect size, percentage points, and uncertainty.','significance'],
    'agent-evals':['intermediate','concept',['grading'],'Separate final task outcomes from the sequence of agent actions.','trajectory'],
    'rag-evals':['intermediate','howto',['grading','safe-failures'],'Test whether a retrieval-based answer is supported by its evidence.','rag'],
    'threat-model':['intermediate','howto',['agent-evals','safe-failures'],'Map untrusted inputs, permissions, and forbidden outcomes.','fuzzer'],
    'multimodal':['intermediate','concept',['grading','safe-failures'],'Identify failures across voice, visual, and interaction stages.','context'],
    'monitoring':['intermediate','howto',['release'],'Plan quality review and response ownership after release.','drift'],
    'reporting':['intermediate','howto',['eval-spec','statistics'],'Write a reviewable account of the claim, method, evidence, and limits.','methodology']
  };
  const projectMeta={
    trajectory:['intermediate',['agent-evals','grading'],'Build and validate checks for tool calls and required steps.'],
    shadow:['advanced',['release','monitoring'],'Design an isolated comparison path for live workload samples.'],
    judge:['intermediate',['grading','labeling'],'Build a judge-calibration process against independent human labels.'],
    gate:['intermediate',['eval-spec','release'],'Implement a release policy as a check that can block a candidate.'],
    rag:['intermediate',['rag-evals'],'Build controlled context perturbations and grounding checks.'],
    dpo:['advanced',['monitoring','coverage'],'Design a reviewed feedback-to-training pipeline with independent evaluation.'],
    significance:['advanced',['statistics'],'Implement paired, assumption-aware uncertainty estimates.'],
    fuzzer:['advanced',['threat-model','agent-evals'],'Build an isolated adversarial harness and a reproducible failure corpus.'],
    drift:['advanced',['monitoring','statistics'],'Build a sampling and alerting system that distinguishes signals from causes.'],
    pareto:['intermediate',['budgets','statistics'],'Compare constrained cost-quality tradeoffs using measured outcomes.'],
    replay:['advanced',['agent-evals'],'Design state capture and a controlled replay intervention.'],
    synthetic:['intermediate',['golden-set','coverage'],'Generate, review, and deduplicate candidate edge cases.'],
    context:['advanced',['agent-evals','multimodal'],'Measure retention and recovery under controlled context pressure.'],
    contamination:['intermediate',['coverage'],'Implement overlap detection with reviewed exclusion decisions.'],
    methodology:['intermediate',['reporting','statistics'],'Produce a reproducible methodology and evidence package.']
  };
  for(const g of content.guides){const [difficulty,type,prerequisites,outcome,next]=guideMeta[g.id];g.learning={difficulty,type,prerequisites,outcome,next};}
  for(const p of content.projects){const [difficulty,prerequisites,outcome]=projectMeta[p.id];p.learning={difficulty,type:'blueprint',prerequisites,outcome};}
  content.projects.find(p=>p.id==='methodology').learning.type='methodology';
  const experiments={
    trace:{difficulty:'intermediate',type:'experiment',prerequisites:['agent-evals','grading'],outcome:'Spot a step-level failure that a fluent final answer can hide.',layer:'measurement'},
    judge:{difficulty:'beginner',type:'experiment',prerequisites:['grading'],outcome:'See why answer order and length can distort a judge’s preference.',layer:'measurement'},
    gate:{difficulty:'intermediate',type:'experiment',prerequisites:['rubrics','release'],outcome:'See how explicit acceptance criteria change a release verdict.',layer:'authority'}
  };
  const sourceLevels={openai:'intermediate',anthropic:'advanced',ragas:'advanced',scipy:'advanced',owasp:'intermediate',nist:'intermediate',dpo:'advanced'};
  for(const s of content.sources)s.learning={difficulty:sourceLevels[s.id],type:'reference'};
  const guideTerms={
    labeling:['Anchor: an independently reviewed example used to check a grader.','Adjudication: a domain reviewer resolves a material labeling disagreement.'],
    coverage:['Slice: a meaningful group of cases, such as a task, language, or risk level.','Held-out set: cases kept separate from training and iterative development.'],
    statistics:['Paired comparison: both systems are tested on the same tasks.','Percentage point: the absolute difference between percentages; 80% to 82% adds 2 points.'],
    'agent-evals':['Agent: an AI workflow that can choose actions and call tools.','Trajectory: the recorded sequence of actions, tool calls, and results.'],
    'rag-evals':['RAG (retrieval-augmented generation): retrieving documents to help an AI answer.','Grounding: supporting answer claims with the available evidence.'],
    'threat-model':['Prompt injection: untrusted content attempts to redirect the system’s behavior.','Threat model: a structured account of what could go wrong and where the boundaries are.'],
    multimodal:['Multimodal: working with more than one form of information, such as text, voice, or images.'],
    budgets:['p95 latency: 95% of measured task durations are at or below this value.'],
    monitoring:['Drift: a change in inputs, measured behavior, or outcomes over time.']
  };
  for(const g of content.guides)if(guideTerms[g.id])g.learning.terms=guideTerms[g.id];
  const implementationAssumptions={
    shadow:'Production request routing, tracing, and isolation of state-changing tools.',
    dpo:'Preference learning, fine-tuning, dataset governance, and candidate model release.',
    significance:'Paired data, dependence, confidence intervals, and implementing a resampling method.',
    drift:'Production instrumentation, sampling, and alert ownership.',
    replay:'Recorded state, dependency graphs, and isolated replay of external tools.',
    context:'Agent memory policies, token budgets, and controlled long-running tasks.'
  };
  for(const p of content.projects)if(implementationAssumptions[p.id])p.learning.assumes=implementationAssumptions[p.id];
  window.EVALS_LEARNING={types,levels,journey,experiments,guideMeta,projectMeta};
})();
