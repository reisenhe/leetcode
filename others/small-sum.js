// 在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和，求一个数组的小和

// 例子：输入 [1, 3, 4, 2, 5]
// 输出 1+1+3+1+1+3+4+2=16

/** 暴力遍历 */
function smallSum(arr) {
  if (arr == null || arr.length < 2) {
    return 0;
  }
  return process(arr, 0, arr.length - 1);
}

function processRaw(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) sum += arr[j]
    }
  }
  return sum
}

function process(arr, l, r) {
  console.log(arr, l, r)
  if (l === r) {
    return 0;
  }
  let mid = l + Math.floor((r - l) / 2);
  return process(arr, l, mid) + process(arr, mid + 1, r) + merge(arr, l, mid, r);
}

function merge(arr, l, m, r) {
  let help = [];
  let i = 0;
  let p1 = l;
  let p2 = m + 1;
  let res = 0;
  while (p1 <= m && p2 <= r) {
    res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0;
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= m) {
    help[i++] = arr[p1++];
  }
  while (p2 <= r) {
    help[i++] = arr[p2++];
  }
  for (let i = 0; i < help.length; i++) {
    arr[l + i] = help[i];
  }
  return res;
}

console.log(smallSum([1, 3, 4, 2, 5]))