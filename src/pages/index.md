Regexp can only be overridden when Expressive Code is disabled (syntax highlighting changes depending on whether custom grammars are loaded when EC is disabled, but not when EC is enabled)

```regexp
((document\.getElementById)|(document\.querySelector))
```

Shellsession can be overridden with or without Expressive Code enabled (syntax highlighting changes depending on whether shellsession custom grammars are loaded)

```shellsession
$ npx astro add astro-expressive-code | grep -v 'added'
```
