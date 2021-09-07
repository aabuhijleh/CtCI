const isOneAway = (s1, s2) => {
    if (s1 === s2) {
        return true;
    }

    if (s1.length === s2.length) {
        for (let i = 0; i < s1.length; i++) {
            const element1 = s1[i];
            const element2 = s2[i];
            if (element1 !== element2) {
                s1 = s1.slice(0, i) + element2 + s1.slice(i + 1);
                if (s1 !== s2) return false;
            }
        }
    } else {
        let longest = s1.length > s2.length ? s1 : s2;
        const shortest = s1.length > s2.length ? s2 : s1;
        for (let i = 0; i < longest.length; i++) {
            const element1 = longest[i];
            const element2 = shortest[i];
            if (element1 !== element2) {
                longest = longest.slice(0, i) + s1.slice(i + 1);
                if (longest !== shortest) return false;
            }
        }
    }
    return true;
};

// Tests
console.log(isOneAway("pale", "ple"), true);
console.log(isOneAway("pales", "pale"), true);
console.log(isOneAway("pale", "bale"), true);
console.log(isOneAway("pale", "bake"), false);

// Time: O(S) where S is the length of the shortest string

// Other solutions: https://github.com/careercup/CtCI-6th-Edition-JavaScript/blob/master/chapter01/1.5%20-%20OneAway/oneAway.js