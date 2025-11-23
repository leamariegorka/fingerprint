function gruss() {
  const startTime = performance.now();

  console.log("start");

  if(self.crossOriginIsolated){
    console.log("ja");
  }

  let array;
  array = new Uint32Array(100);
  
  for (let j = 0; j < 1000; j++) {
  
    crypto.getRandomValues(array);

    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += array[i];
    }
    
  }

  const endTime = performance.now();
  alert("Zeit: " + (endTime - startTime).toFixed(3));

} 
