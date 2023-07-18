# Instructions

🧩

1. Using the "let" keyword, create three variables: <bodyPartIndex>, <adjectiveIndex>, and <wordIndex>
2. After the equal sign, call Math.floor(Math.random() \* array.length) for each of the three arrays.

#### EXAMPLE

```js
let bodyPartIndex = Math.floor(Math.random() * randomBodyParts.length);
```

3. Create a variable called <bodyPart> and save a random bodyPart from your "randomBodyParts" array to it using bracket syntax and the <bodyPartIndex> you created in steps 1 & 2.

```js
let bodyPart = randomBodyParts[bodyPartIndex];
```

4. Repeat step 3 for variables called <adjective> and <word>

5. Then, concatenate the three variables into one string that will say "Your <bodyPart> is like a <adjective> <word>!" and save into a variable called <insult>

```js
let insult = "Your " + bodyPart + " is like a " + adjective + word + "!";
```

6. Replace the string "Unwritten insult" with your <insult> variable

```js
document.getElementById("insult-spot").innerText = insult;
```

7. Refresh the page to generate a random insult!
