# 015 – No SQL functions

## Status

Accepted

## Decision

This React Native app does not own database schema. Do not add migrations or SQL functions here. Schema lives on the companion Express or Python server (see those templates ADR 010/015).

## Related

- [011 – Domain models](./011-domain-models.md)
