# Field Case Study Writer for Codex

A repo-scoped Codex skill for drafting, rewriting, structuring, and reviewing Nick Richardson's Design Engineer portfolio content.

## Install in the portfolio repository

Copy this entire folder to:

```text
<portfolio-repo>/.agents/skills/field-case-study-writer/
```

The required manifest should then exist at:

```text
<portfolio-repo>/.agents/skills/field-case-study-writer/SKILL.md
```

Codex detects skill changes automatically. Restart Codex if it does not appear.

## Use in the VS Code Codex extension

Open the portfolio repository, start a Codex thread, then invoke the skill explicitly:

```text
$field-case-study-writer
```

Example prompts:

```text
Use $field-case-study-writer to review the PMI case study for hiring clarity, ownership, implementation proof, and military-theme restraint. Do not edit files yet.
```

```text
Use $field-case-study-writer to turn the notes in content/notes/pmi.md into a complete case study. Preserve the repository's existing MDX schema and mark unsupported claims with evidence placeholders.
```

```text
Use $field-case-study-writer to rewrite this project summary in place. Keep it under 90 words and make the customer problem, my role, and the production implementation clear.
```

```text
Use $field-case-study-writer to audit every project page. Create a report that identifies missing ownership, decision rationale, implementation proof, outcome evidence, and excessive themed vocabulary.
```

## Optional user-wide installation

To make the skill available in every repository, copy it to:

```text
$HOME/.agents/skills/field-case-study-writer/
```

Repo-scoped installation is recommended because the bundled references are specific to this portfolio.
