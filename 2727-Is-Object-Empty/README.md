# 2727. Is Object Empty

### Easy

---

Given an object or an array, return if it is empty.

- An empty object contains no key-value pairs.
- An empty array contains no elements.  

You may assume the object or array is the output of `JSON.parse`.

---

### Example 1:

```javascript
obj = {"x": 5, "y": 42}
// Output: false
```

**Explanation :**

The object has 2 key-value pairs so it is not empty.

### Example 2:

```javascript
obj = {}
// Output: true
```

**Explanation :**

The object doesn't have any key-value pairs so it is empty.

### Example 3:

```javascript
obj = [null, false, 0]
// Output: false
```

**Explanation :**

The array has 3 elements so it is not empty.

### Constraints :

- `obj` is a valid JSON object or array
- `2 <= JSON.stringify(obj).length <= 105`

---