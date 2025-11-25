function FP() {
  //const startTime = performance.now();

  const m = 5;
  const n = 10;//ich heisse emil der tolle bumser

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
      array = new Uint32Array(1000);
      crypto.getRandomValues(array);
      const endTime = performance.now();
      const logTime = endTime - startTime;
      values.push(logTime);
    }
    fp.push(values);
  }

  console.log(fp);
      

    //let sum = 0;
    //for (let i = 0; i < 100; i++) {
      //sum += array[i];
    //}
    
  //}

  //const endTime = performance.now();
  //alert("Zeit: " + (endTime - startTime).toFixed(3));

} 

function computeMode(fp){
  let mode = [];
  for (let i = 0; i < n; i++) {
    let values = [];
    //stattdessen dict
    for (let j = 0; j < m; j++) {
      let check = false;
      let max = 0;
      for (let k = 0; k < values.length; k++) {
        if(fp[m][n] == values[k][0]) {
          //stattdessen dict
          check = true;
          values[k][0] = values[k][0]++;
          //stattdessen dict
          break;
        }
        max = k;
      }
      if (check == false){
        max++;
        // dict values
      }
    }
    let mostValue = 0;
    
    // durch das ganze dict gehen
    // wert mit meisten nums in mostValue

    mode.push(mostValue);
  }
  return mode;
}

function getNumCoincidences(fp1, fp2, n, m) {
  let numCoincedences = 0;
  let fp1Mode = [];
  for (let i = 0; i < n; i++) {
    fp1Mode.push(computeMode(fp1[i])
  }
  for (let j = 0; j < n; j++) {
    let check = false;
    let k = 0;
    while ((k<m) && (check == false)){
      if (fp1Mode[j] == fp2[j][k]){
        numCoincedences++;
        check = true;
      }
      else {
        k++;
      }
    }
  }
  return numCoincedences;
}

function FPCheck(fp1, fp2, m, n, t){
  let num = getNumCoincedences(fp1, fp2, n, m);
  num = num + getNumCoincedences(fp2, fp1, n, m);
  th = num / (n*2);
  if (th >= t) {
    return true;
  }
  else {
    return false;
  }
}


