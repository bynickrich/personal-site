# Transformation Examples

## Generic process language

### Before

> We embarked on a journey to rethink the design system and create a more scalable and cohesive experience for our users and internal teams.

### After

> PMI maintained three disconnected component systems. Differences in tokens, component behavior, and documentation increased implementation ambiguity. I helped define a shared architecture that brought design and production code closer together.

Why it works:

- Starts with the condition
- Names the systems problem
- States ownership without claiming sole credit
- Connects the intervention to implementation quality

## Passive ownership

### Before

> A new token architecture was created to support multiple brands.

### After

> I defined a semantic token architecture with the design-system team so three brands could share component behavior without sharing raw visual values.

Why it works:

- Clarifies ownership and collaboration
- Explains the purpose of the architecture
- Uses concrete technical language

## Empty outcome language

### Before

> The final experience was more seamless, scalable, and intuitive.

### After

> The shared component contract removed two competing implementations from the documented path. Engineers could now compare one API against the matching Figma anatomy and states.

Why it works:

- Replaces adjectives with observable changes
- Connects system work to team behavior

## Unsupported metric

### Before

> The new system increased development speed by 40%.

### After when no reliable metric exists

> Teams used the shared component in two active workflows, and engineering feedback indicated that the documented states reduced interpretation during implementation. We did not yet have reliable cycle-time data.

Why it works:

- Uses supported evidence
- Identifies the limitation
- Avoids fabricated precision

## Excessive military language

### Before

> Following command authorization, our design systems unit deployed a tactical token framework across the product theater.

### After

> We introduced semantic tokens so the same component architecture could support multiple brands.

Why it works:

- Preserves the actual decision
- Removes parody
- Lets visual labels carry the atmosphere

## Decision record

### Decision 02 — Separate semantic meaning from raw values

**Condition**  
Three brands needed different visual values while sharing the same component behavior.

**Decision**  
I organized the token model around semantic roles instead of brand-specific color names.

**Rationale**  
Components could reference stable product meaning while each theme supplied its own values.

**Tradeoff**  
The model required more naming discipline and migration work than mapping existing colors directly.

**Evidence**  
The same component states were represented through one documented API and three theme scopes.
