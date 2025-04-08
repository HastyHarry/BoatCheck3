# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm start` or `expo start`: Start Expo development server
- `npm run android`: Start on Android
- `npm run ios`: Start on iOS
- `npm run web`: Start on web browser

## Code Style Guidelines
- Components: PascalCase, function components with hooks
- Files: camelCase, self-descriptive names
- Indentation: 2 spaces, semicolons, single quotes
- Imports order: React, React Native, third-party, local components, utilities
- Styling: React Native StyleSheet API, styles at bottom of files
- State: Context API (GlobalContext) for app-wide state
- Navigation: React Navigation
- Error Handling: Try/catch for async operations, console.error for logging
- Exports: Default exports for components, named exports for utilities

When modifying this repo, maintain consistent style with existing code. Use Context API for state management. Keep screen components in the screens/ directory and reusable components in components/.