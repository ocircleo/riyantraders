let is = false;
for (let i = 0; i < 10000; i++) {
  if(is) break;
  console.log(i,is);
}
setTimeout(()=>{
  is = true;
},200)
console.log("finished",is);