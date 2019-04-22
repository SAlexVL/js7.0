  let arr = ["12345", "23456", "34567", "45678", "56789", "67890", "789098"];
  for (let i = 0; i < 7; i++) {
    if ((arr[i][0].indexOf('2') !== -1) || (arr[i][0].indexOf('7') !== -1)) {
      console.log(arr[i]);
  }
  }