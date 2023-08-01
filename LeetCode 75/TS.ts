/**
 * # 1456.
 * @param s 
 * @param k 
 * @returns 
 */
function maxVowels(s: string, k: number): number {
  let re = /a|e|i|o|u/
  let ans = 0
  for (let i = 0; i < k; i++) {
    if (re.test(s[i])) ans++
  }
  let windows = ans

  for (let i = k; i < s.length; i++) {
    if (ans == k) return k

    if (re.test(s[i - k])) windows--
    if (re.test(s[i])) windows++

    ans = Math.max(ans, windows)
  }
  return ans
};

/**
 * # 1004.
 * @param nums 
 * @param k 
 */
function longestOnes(nums: number[], k: number): number {
  let i = 0, j = 0

  while (i < nums.length) {
    if (nums[i] == 0) k--

    if (k < 0) {
      if (nums[j] == 0) k++
      j++
    }
    i++

  }

  return i - j
};

/**
 * # 1493.
 * @param nums 
 * @description
 * flag = 2: j can move
 * flag = 1: j can move
 * flag = 0: i can move
 * 自己解的
 */
function longestSubarray(nums: number[]): number {
  let flag = 2;
  let i = 0, j = 0;
  let max = 0;

  while (j < nums.length) {
    if (nums[j] == 0 && flag == 2) {
      flag = 1;
      j++
    } else if (nums[j] == 0 && flag == 1) {
      flag = 0;
      max = Math.max(max, j - i - 1);
    } else if (flag == 0) {
      if (nums[i] == 0) {
        i++
        j++
        flag = 1;
      } else {
        i++
      }
    }
    else {
      j++
    }
  }

  return Math.max(max - 1, j - i - 1);
};

/**
 * # 1732.
 * @param gain 
 */
function largestAltitude(gain: number[]): number {
  let highest = Math.max(gain[0], 0);

  for (let i = 0; i < gain.length; i++) {
    if (gain[i - 1]) {
      gain[i] += gain[i - 1];
      highest = Math.max(highest, gain[i]);
    }
  }
  return highest
};

/**
 * # 2215.
 * @param nums1 
 * @param nums2 
 */
function findDifference(nums1: number[], nums2: number[]): number[][] {
  let map1: number[] = [], map2: number[] = [];

  for (let ele of nums1) {
    if (map1.indexOf(ele) == -1 && nums2.indexOf(ele) == -1) map1.push(ele)
  }

  for (let ele of nums2) {
    if (map2.indexOf(ele) == -1 && nums1.indexOf(ele) == -1) map2.push(ele)
  }

  return [map1, map2]
};