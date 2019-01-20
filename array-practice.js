const people = ['Greg', 'Mary', 'Devon', 'James'];

// 1. Using a loop, iterate through this array and console.log all of the people.
// Solution 1
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// Solution 2 (better)
people.forEach((e) => {
    console.log(e);
});

// 2. Write the command to remove "Greg" from the array.
// Solution 1
let index = people.indexOf('Greg');
if (index > -1) {
    people.splice(index, 1);
}
console.log(people);

// Solution 2 (better)
console.log(people.filter(e => e !== 'Greg'));

// 3. Write the command to remove "James" from the array.
console.log(people.filter(e => e !== 'James'));

// 4. Write the command to add "Matt" to the front of the array.
people.unshift('Matt');
console.log(people);

// 5. Write the command to add your name to the end of the array.
people.push('謙');
console.log(people);

// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Mary') {
        break;
    }
    console.log(people[i]);
}

// Note: There's no way to use 'break' in forEach, but there're another ways to do this by using command 'every' or 'some'.
// Using command 'every' (use 'return' to break a loop)
people.every((e) => {
    if (e === 'Mary') {
        return;
    }
    console.log(e);
});

// Using command 'some' (use 'return true' to break a loop)
people.some((e) => {
    if (e === 'Mary') {
        return true;
    }
    console.log(e);
});

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let people_copy = people.slice().filter(e =>
    e !== 'Mary' &&
    e !== 'Matt'
);
console.log(people_copy);

// 8. Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf('Mary'));

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(people.indexOf('Foo'));

// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
const redefined_people = ['Greg', 'Mary', 'Devon', 'James'];
redefined_people.splice(redefined_people.indexOf('Devon'), 1, 'Elizabeth', 'Artie');
console.log(redefined_people);
