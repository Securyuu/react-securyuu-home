# Architecture

Use Feature-Folders architecture

- src/app -- expo router only
- src/features -- all slices
- src/features/`feature name`/api -- feature communication with backend
- src/features/`feature name`/components -- feature UI components
- src/features/`feature name`/screens -- feature screens composing components
- src/features/`feature name`/hooks
- src/features/`feature name`/model -- feature state, types, schemas and domain-specific data models
- src/features/`feature name`/lib -- feature specific utilities
- src/features/`feature name`/index.ts -- public feature API
- src/shared -- shared elements
- src/shared/ui -- shared UI elements
- src/shared/api -- API infrastructure (not endpoints)

## What can be in shared
- if it contains domain word ex. "DeviceCard" it's not shared
- if it is something generic like "Card" it's shared

## Dependencies

OK: app -> features 
OK: app -> shared 
OK: features -> shared 
NOT OK: features -> app 
NOT OK: shared -> features
NOT OK: shared -> app

