# 2635. Apply Transform Over Each Element in Array

### Easy

---

Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.

Please solve it without the built-in `Array.map` method.

---

### Example 1:

```javascript
arr = [1,2,3], 
fn = function plusone(n) { 
    return n + 1; 
}
// Output: [2,3,4]
```

**Explanation:**  <br>
const newArray = map(arr, plusone); // [2,3,4] <br>
The function increases each value in the array by one.

---

### Example 2:

```javascript
arr = [1,2,3], 
fn = function plusI(n, i) {
    return n + i; 
}
// Output: [1,3,5]
```

**Explanation:**  <br> 
The function increases each value by the index it resides in.

---

### Example 3:

```javascript
arr = [10,20,30], 
fn = function constant() {
    return 42; 
}
// Output: [42,42,42]
```

**Explanation:**  <br> 
The function always returns 42.

### Constraints:
- `0 <= arr.length <= 1000`
- `109 <= arr[i] <= 109`
- `fn` returns an integer.
---