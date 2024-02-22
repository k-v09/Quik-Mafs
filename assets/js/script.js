const gsect = document.getElementById("sects");
const graphEL = gsect.children[0];
const freqEL = gsect.children[1];
const lidaa = [];

for (let i = 0; i < freqEL.children[0].children.length; i++) {
    lidaa.push(freqEL.children[0].children[i]);
}

