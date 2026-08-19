# Design

This document defines the visual and interaction rules of the application.

The goal is to keep the UI consistent, predictable and accessible across all screens and features.

Feature-specific UI may extend these rules, but should not introduce a separate visual language.

## Principles

* Prefer clarity over decoration.
* Keep layouts simple and predictable.
* Use consistent spacing, typography and component patterns.
* Reuse shared UI primitives instead of recreating styles inside features.
* Design for both small and large mobile screens.
* Support system accessibility settings where possible.
* Every interactive state should have clear visual feedback.
* Avoid introducing one-off design values.

## Design Tokens

Visual values should be defined as reusable design tokens.

Do not use arbitrary colors, spacing values, font sizes or radii directly inside feature components.

Tokens should be the source of truth for the visual system.

Examples:

```text
colors
spacing
typography
radius
shadows
```

Feature components should consume these tokens instead of defining their own visual constants.

## Colors

Colors should be referenced by semantic purpose rather than by their literal value.

Prefer:

```text
background
surface
surfaceSecondary
text
textSecondary
border
primary
success
warning
danger
```

Instead of:

```text
gray100
gray500
blue500
red500
```

Primitive color scales may exist internally, but application components should primarily consume semantic tokens.

### Color rules

* Text must maintain sufficient contrast against its background.
* Do not communicate state using color alone.
* Destructive actions use the `danger` semantic color.
* Success states use the `success` semantic color.
* Warning states use the `warning` semantic color.
* Interactive elements use the appropriate primary or interactive color tokens.
* Disabled elements should remain readable while clearly appearing inactive.

## Themes

The design system should support light and dark themes.

Components must not depend directly on light-theme or dark-theme colors.

Use semantic tokens so that the theme can provide the correct value.

Example:

```text
Light:
background -> light neutral
text -> dark neutral

Dark:
background -> dark neutral
text -> light neutral
```

Screens and feature components should not contain theme-specific branching unless absolutely necessary.

## Spacing

Use a consistent spacing scale.

Recommended base unit:

```text
4
```

Recommended scale:

```text
4
8
12
16
24
32
48
64
```

Prefer values from the spacing scale instead of arbitrary values.

Example:

```text
4   - very small gaps
8   - small gaps
12  - compact component spacing
16  - default spacing
24  - section spacing
32  - large section spacing
48+ - major layout separation
```

### Layout spacing

Default screen horizontal padding should remain consistent across the application.

Recommended default:

```text
16
```

Larger layouts may increase the content margin while keeping the content itself constrained.

## Typography

Typography should use a small and predictable hierarchy.

Recommended semantic styles:

```text
display
heading
title
body
bodySecondary
label
caption
```

Do not select font sizes based on individual screens.

Use semantic typography styles based on the role of the text.

Example hierarchy:

```text
display       - major page or onboarding statement
heading       - screen heading
title         - section or card title
body          - primary content
bodySecondary - supporting content
label         - controls and form labels
caption       - metadata and secondary information
```

### Typography rules

* Prefer system-readable font sizes.
* Avoid very small text.
* Support dynamic font scaling where practical.
* Do not use font weight as the only indication of hierarchy.
* Long text should wrap naturally.
* Avoid fixed-height containers around dynamic text.

## Screen Layout

Every screen should follow the same high-level structure where applicable:

```text
Safe Area
└── Screen
    ├── Header
    └── Content
        ├── Primary section
        ├── Secondary sections
        └── Actions
```

Screen components are responsible for composing feature components.

Reusable layout primitives should live in `shared/ui`.

Feature-specific layouts remain inside the corresponding feature.

## Safe Areas

Screens must respect device safe areas.

Content should not overlap:

* status bars
* camera cutouts
* home indicators
* system navigation areas

Safe-area handling should preferably happen at the screen or application layout level rather than inside individual feature components.

## Content Width

Mobile layouts should normally fill the available width while respecting screen padding.

On larger displays, content should not grow indefinitely.

Where appropriate, use a maximum content width and center the content.

This keeps forms, text and cards readable on tablets and large devices.

## Responsive Layout

Do not design against a single device size.

Layouts should adapt to available space.

Prefer:

* flex layouts
* intrinsic component sizing
* wrapping content
* maximum widths

Avoid:

* fixed screen dimensions
* absolute positioning for primary layout
* assumptions about a specific phone size

Use breakpoints only when the layout meaningfully changes.

## Shared UI

Generic visual primitives belong in:

```text
src/shared/ui
```

Examples:

```text
Button
Card
Input
Text
IconButton
Divider
Badge
Screen
Stack
```

Shared components must not contain feature or domain knowledge.

For example:

```text
Card       -> shared
DeviceCard -> feature
```

Shared UI components define the common visual language of the application.

Feature components compose them into domain-specific interfaces.

## Component Variants

Prefer explicit component variants over ad-hoc style overrides.

Example:

```tsx
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="destructive" />
```

Instead of:

```tsx
<Button style={{ backgroundColor: "red" }} />
```

Variants should represent meaningful design-system concepts.

Avoid creating variants for one-off visual differences.

## Buttons

Buttons should have a clear hierarchy.

Recommended variants:

```text
primary
secondary
ghost
destructive
```

### Button rules

* A screen should normally have one obvious primary action.
* Destructive actions must be visually distinguishable.
* Disabled buttons must visibly appear disabled.
* Loading buttons should prevent duplicate actions.
* Interactive targets must be large enough for touch interaction.
* Icon-only buttons require an accessibility label.

## Forms

Forms should use consistent field layouts.

Recommended structure:

```text
Label
Input
Supporting text / Error
```

### Form rules

* Labels should remain visible independently of placeholders.
* Placeholders are hints, not labels.
* Validation errors should appear close to the affected field.
* Error messages should explain how to resolve the problem where possible.
* Required fields should be communicated consistently.
* Keyboard type and autofill metadata should match the expected value.
* Inputs should expose visible focused, disabled and error states.

## Cards

Cards should represent grouped information or actions.

Do not wrap every piece of content in a card.

Cards should normally use shared:

```text
padding
radius
background
border
```

Feature-specific cards should compose the generic `Card` primitive.

Example:

```text
Card
└── DeviceCard
```

`DeviceCard` owns device-specific content.

`Card` owns generic card appearance.

## Navigation

Navigation should remain visually and behaviorally consistent.

Navigation UI is part of the application shell, not a domain feature unless it contains domain-specific behavior.

Navigation should:

* clearly indicate the current destination
* use predictable back behavior
* avoid changing navigation patterns between features
* keep destination names concise
* provide accessible labels for icon-only actions

Routing remains the responsibility of `src/app`.

Reusable navigation presentation may use shared UI components.

## Icons

Use one consistent icon system wherever possible.

Icons should:

* use consistent visual weight
* use standard meanings
* not replace text where the meaning would become ambiguous
* include accessibility labels when they represent interactive actions without visible text

Decorative icons should not be exposed to accessibility APIs.

## Empty States

Collections and data-driven screens should define an explicit empty state.

A useful empty state should explain:

```text
what is empty
why it may be empty
what the user can do next
```

Do not display an empty container or blank screen when data is absent.

## Loading States

Loading states should minimize layout shifts.

Prefer:

* progress indicators for short blocking operations
* skeletons for content-oriented screens when useful
* inline loading indicators for local operations

Avoid replacing the entire screen with a loading indicator when only a small part of the interface is updating.

## Error States

Errors should be actionable where possible.

Prefer:

```text
What happened
What the user can do
Retry action when appropriate
```

Do not expose raw backend errors, stack traces or implementation details directly to users.

## Disabled States

Disabled controls should only be used when the reason for being disabled is understandable.

When possible, explain why an unavailable action cannot currently be performed.

Disabled controls should remain visible enough to be recognized.

## Feedback

User actions should provide immediate feedback.

Examples:

```text
button pressed state
loading state
success state
error message
navigation transition
```

Operations that take noticeable time should never appear to do nothing.

## Destructive Actions

Destructive actions require special treatment.

Examples:

```text
delete
remove
revoke
disconnect
reset
```

Use destructive styling consistently.

Actions with significant or irreversible consequences should require explicit confirmation.

Confirmation dialogs should clearly describe the consequence rather than using generic wording.

Prefer:

```text
Remove this device?
```

Instead of:

```text
Are you sure?
```

## Modals

Use modals only when the interaction should temporarily interrupt the current context.

Do not use modals as a replacement for normal navigation.

Modal content should have:

* clear purpose
* clear dismissal behavior
* obvious primary action
* appropriate destructive treatment when necessary

## Lists

Lists displaying repeated domain entities should maintain consistent row structure and spacing.

Interactive rows should make their interaction clear.

Large lists should use appropriate React Native virtualization rather than rendering all items eagerly.

## Motion

Animations should communicate state or spatial relationships.

Animations should not exist only for decoration when they negatively affect interaction speed.

Prefer short and subtle transitions.

Respect reduced-motion accessibility settings where possible.

## Accessibility

Accessibility is part of the design system, not an optional feature.

Interactive elements should:

* have accessible names
* expose their role correctly
* provide sufficient touch target size
* maintain sufficient color contrast
* remain usable with increased text size
* not rely exclusively on color
* preserve logical focus order

Icon-only controls must have explicit accessibility labels.

Decorative elements should not create noise for screen readers.

## Touch Targets

Interactive controls should provide comfortable touch targets.

A visually small icon may remain small, but its interactive area should be sufficiently large.

Avoid placing multiple small touch targets immediately next to each other without adequate spacing.

## Text Content

UI copy should be:

* concise
* specific
* actionable
* consistent

Prefer verbs for actions.

Examples:

```text
Save
Continue
Remove device
Try again
```

Avoid vague labels such as:

```text
OK
Yes
Submit
```

when a more specific action can be used.

## Platform Conventions

Respect native iOS and Android conventions when they improve familiarity and usability.

The application does not need to look identical on every platform if following a platform convention produces a better experience.

Platform-specific behavior should remain intentional and minimal.

## Styling Rules

Avoid large inline style objects inside feature components.

Prefer reusable styles, design tokens and shared primitives.

Do not duplicate design-system values across components.

Avoid:

```tsx
<View
  style={{
    padding: 17,
    borderRadius: 11,
    backgroundColor: "#123456",
  }}
/>
```

Prefer design-system values:

```tsx
<View
  style={{
    padding: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
  }}
/>
```

Exact implementation depends on the styling solution used by the project.

## Consistency Rule

Before introducing a new visual pattern, check whether an existing shared component or design token already solves the problem.

Prefer:

```text
existing component
-> existing variant
-> extending the design system
-> new component
```

in that order.

Do not introduce a new visual pattern for a single feature unless there is a clear UX reason.

## Ownership

The design system defines generic visual rules.

`shared/ui` owns generic UI primitives.

Features own domain-specific composition.

Example:

```text
shared/ui/Card
shared/ui/Button
shared/ui/Badge

features/devices/components/DeviceCard
features/auth/components/LoginForm
```

A shared component should not know that devices, authentication or another domain concept exists.

## Source of Truth

When implementation and this document disagree, either:

1. update the implementation to follow the design system, or
2. intentionally change the design system and update this document.

Do not allow undocumented visual conventions to become de facto standards.

