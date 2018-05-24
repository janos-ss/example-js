// file in example-js

arr = [1, 2, 3]

// in SonarWay recommended: javascript:S2424 Built-in objects should not be overridden
Boolean = "ouch";

for (var i in arr) {
    console.log(i, arr[i])
}

alert("hello");

// TODO

// TODO

alert("foo");