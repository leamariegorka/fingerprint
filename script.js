function FP() {
  //const startTime = performance.now();

  const m = 10;
  const n = 5;

  //if(self.crossOriginIsolated){
    //console.log("ja");
  //}
  let fp = [];
  let values = [];
  for (let i = 0; i < m; i++){
    values = [];
    for (let j= 0; j < n; j++){
      const startTime = performance.now();
      let array;
      array = new Uint32Array(n);
      crypto.getRandomValues(array);
      const endTime = performance.now();
      const logTime = endTime - startTime;
      values.push(logTime);
    }
    fp.push(values);
  }

  console.log(fp);

  alert("geschafft");
      

    //let sum = 0;
    //for (let i = 0; i < 100; i++) {
      //sum += array[i];
    //}
    
  //}

  //const endTime = performance.now();
  //alert("Zeit: " + (endTime - startTime).toFixed(3));

} 


