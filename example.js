const str = "misjisjdsidisdisiuiudisidhhsdhisdishdishi";
let count =0;
for(let i=0; i<str.length; i++){
    if(str[i] === 's'){
        count++;
    }
    // console.log();
}
// console.log(count);


// shortcut
console.log(str.split("s").length - 1);