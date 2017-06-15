function subsetSum(arr, sum){

  var matrix = [];

  // fills out first column
  for(var i=0;i<arr.length;i++)
    matrix.push([1]);

  // fills out first row 
  for(var q=1;q<=sum;q++)
    matrix[0][q] = (q===arr[0]) ? 1 : 0;
 
  // fills out matrix in a bottom up format
  
  for(var j=1;j<arr.length;j++){
    for(var k=1;k<=sum;k++)
    // if the value at left is greater than the sum, that value cannot be
    // included in the subset - we will therefore only check for if we do not
    // include it in the subset
      if(k-arr[j]<0)
        matrix[j][k]=matrix[j-1][k]
      else
        matrix[j][k]=matrix[j-1][k]||matrix[j-1][k-arr[j]]
  }
  return matrix[arr.length-1][sum];
}