function pigLatin(str) {
    storedArr = [];
    strArr = str.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        let firstIndex = strArr[i][0];
        let newWord = strArr[i].slice(1).concat(firstIndex + "ay");
        storedArr.push(newWord);
    };
    return console.log(storedArr.join(" "));
};

pigLatin("butterbean");
pigLatin("heyo what is up Foo!")
