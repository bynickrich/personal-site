# Contact Page Layout

## Goal

Make Contact behave like a concise **routing slip**. The page should communicate
why to get in touch, identify one primary route, set expectations, and keep
secondary channels easy to scan.

This should be the quietest primary page in the site.

## Recommended desktop layout

```text
+--------------------------------------------------------------------------+
| 05 //// CONTACT                                      CHANNEL / OPEN       |
|                                                                          |
| LET'S BUILD SOMETHING USEFUL.                                             |
| For design-engineering roles, systems work, and product collaborations.  |
+--------------------------------------------------------------------------+
| PRIMARY CHANNEL                                                          |
|                                                                          |
| nick@example.com                                              COPY / ->  |
| Typical response / 2-3 working days                                     |
+--------------------------------------+-----------------------------------+
| ROUTING                              | AVAILABILITY                      |
|                                      |                                   |
| DESIGN-ENGINEERING ROLE              | STATUS / OPEN                     |
| Include the product, team, and need. | TIMEZONE / EASTERN                |
|                                      | WORK MODE / REMOTE                |
| COLLABORATION                        |                                   |
| Include scope and desired timing.    |                                   |
+--------------------------------------+-----------------------------------+
| LINKEDIN       Professional inquiries and work history                   |
| GITHUB         Code and implementation examples                          |
| BLUESKY / X    Public notes and conversation                             |
+--------------------------------------------------------------------------+
```

The email address and response expectation are examples. Only publish details
that are accurate and sustainable.

## Information hierarchy

1. Reason to make contact
2. Primary channel
3. What context to include
4. Availability and response expectation
5. Secondary channels

The current content appropriately asks visitors to include the product, team, and
problem. Preserve that instruction and make it visually adjacent to the primary
channel.

## Primary action

Prefer one of these options:

### Direct email

Use a large `mailto:` link with a copy-address action. This is the most direct
route if publishing an address is acceptable.

### LinkedIn

If LinkedIn must remain the primary route, label it explicitly as the preferred
professional-inquiry channel. Do not make visitors infer that preference from a
generic social list.

Avoid presenting email and LinkedIn as two equally dominant buttons unless both
are monitored equally.

## Routing information

Use two or three actual inquiry categories, for example:

```text
DESIGN-ENGINEERING ROLES
Include the product area, team structure, and expected scope.

PRODUCT OR SYSTEM COLLABORATION
Include the problem, project stage, desired involvement, and timing.

QUESTIONS ABOUT THE WORK
Reference the project or article so the response can include useful context.
```

This adds utility without requiring a form.

## Contact form decision

A form is unnecessary unless it provides one of these benefits:

- Protecting a public email address.
- Collecting qualification fields needed to respond.
- Routing different inquiry types to different destinations.

If a form is added, keep it short and explain why each field is required. The
[GOV.UK contact pattern](https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/)
also recommends ordering channels by user need and telling people how long a
response normally takes.

## Mobile layout

```text
+----------------------------------+
| 05 //// CONTACT     STATUS / OPEN|
| LET'S BUILD SOMETHING USEFUL.    |
| Short purpose statement...       |
+----------------------------------+
| PRIMARY CHANNEL                  |
| nick@example.com              -> |
| Response / 2-3 working days      |
+----------------------------------+
| ROUTING                          |
| DESIGN-ENGINEERING ROLE          |
| Context to include...            |
+----------------------------------+
| LINKEDIN                       ->|
| GITHUB                         ->|
| BLUESKY                        ->|
+----------------------------------+
```

- Put the primary action before availability metadata.
- Stack routing categories.
- Keep every secondary channel as a comfortably sized link row.

## Ornament

Use:

- One section index.
- One status string.
- One emphasized primary-action band.
- Thin rules between secondary channels.

Avoid:

- Simulated command prompts or terminal input.
- Fake transmission, encryption, clearance, or secure-channel language.
- A map or coordinates unless an in-person location is relevant.
- Social icons without visible text labels.

## Alternative layout

A minimal version can consist of the opening statement, one large email link, and
the secondary-channel directory. This is preferable if availability and inquiry
categories would be difficult to keep current.

## Review questions

- Is there one unmistakable preferred contact route?
- Does the page tell a visitor what information will produce a useful response?
- Is the response expectation accurate?
- Are social networks clearly secondary to the professional contact path?
- Could any metadata become stale without being noticed?

