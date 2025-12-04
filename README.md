# Reproduction

Steps to reproduce the issue in this repository:

1. Install dependencies

```bash
bun install
```

2. Run TypeScript builds

```bash
bun run tsc   # succeeds
bun run tsgo  # errors (tsgo is failing while tsc is not)
```

That's all — the two commands above demonstrate the differing behavior between `tsc` and `tsgo` in this project.