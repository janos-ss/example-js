// file in example-js

// arr = [1, 2, 3]

var arr2 = new Array();

// in SonarWay recommended: javascript:S2424 Built-in objects should not be overridden
Boolean = "ouch";

// TODO
for (var i in arr) {
    console.log(i, arr[i])
}
