osins-utils / [Exports](modules.md)

# osins-utils is tools lib

## install

```bash
npm install osins-utils
```

## optional

```javascript
const a = null
console.log('result:', optional(a).orElse('a'))

result: 'a'
```

```javascript
const a = null
console.log('result:', optional<string>(a).ifPresentOrElse((v: string) => {
                return v
            }, () => {
                return 'a'
            }))

result: 'a'
```
