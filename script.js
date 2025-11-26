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

  //let mode =computeMode([[1, 2, 3],[1, 3, 1],[1, 2, 1]], 3, 3);

  //console.log(mode);

  let constFP = [[
    4.850000001490116, 0.07000000029802322,
    0.05000000074505806,
    0.05000000074505806, 0.04999999701976776,
    0.03999999910593033,
    0.04500000178813934,
    0.05000000074505806, 0.04999999701976776, 0.04500000178813934],
    [0.044999998062849045, 0.04999999701976776, 0.04500000178813934,
      0.05000000074505806, 0.05999999865889549, 0.044999998062849045,
      0.07000000029802322, 0.04500000178813934, 0.044999998062849045,
      0.044999998062849045],
    [0.04999999701976776, 0.044999998062849045, 0.05000000074505806,
      0.04500000178813934, 0.04500000178813934, 0.044999998062849045,
      0.04500000178813934, 0.044999998062849045, 0.04500000178813934,
      0.04500000178813934],
    [0.044999998062849045, 0.04500000178813934, 0.04500000178813934,
      0.044999998062849045, 0.04500000178813934, 0.044999998062849045,
      0.044999998062849045, 0.04500000178813934, 0.044999998062849045,
      0.054999999701976776],
    [0.05000000074505806, 0.04500000178813934, 0.044999998062849045,
      0.04500000178813934, 0.044999998062849045, 0.055000003427267075,
      0.04999999701976776, 0.029999997466802597, 0.04500000178813934,
      0.030000001192092896]];
      
    let check = FPCheck(fp, constFP, m, n, 0.9);
    //let sum = 0;
    //for (let i = 0; i < 100; i++) {
      //sum += array[i];
    //}
    
  //}

  //const endTime = performance.now();
  //alert("Zeit: " + (endTime - startTime).toFixed(3));

} 

function computeMode(fp, m, n){
  let mode = [];
  for (let i = 0; i < n; i++) {
    const values = new Map();
    //stattdessen dict
    for (let j = 0; j < m; j++) {
      let check = false;
      for (const [key, value] of values) {
        if(fp[j][i] == key) {
          //stattdessen dict
          check = true;
          let num = value + 1;
          values.set(key, num);
          //stattdessen dict
          break;
        }
      }
      if (check == false){
        values.set(fp[j][i], 1);
        // dict values
      }
    }
    let mostValue = [];

    mostValue = [null, -1]

    for (const [key, value] of values) {
      if (value > mostValue[1]){
        mostValue = [key, value];
      }
    }
    // durch das ganze dict gehen
    // wert mit meisten nums in mostValue

    mode.push(mostValue[0]);
  }
  return mode;
}

function getNumCoincidences(fp1, fp2, n, m) {
  let numCoincedences = 0;
  let fp1Mode = [];
  for (let i = 0; i < n; i++) {
    fp1Mode.push(computeMode(fp1, m, n));
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
  let th = num / (n*2);
  if (th >= t) {
    return true;
  }
  else {
    return false;
  }
}


