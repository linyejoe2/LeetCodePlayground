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

/**
 * 1207. Unique Number of Occurrences
 * @param arr 
 * @url https://leetcode.com/problems/unique-number-of-occurrences
 */
function uniqueOccurrences(arr: number[]): boolean {
  let map = new Map<number, number>()

  for (let ele of arr) {
    if (!map.has(ele)) {
      map.set(ele, 1)
    } else {
      map.set(ele, map.get(ele) as number + 1)
    }
  }

  let a = Array.from(map.values())

  for (let i = 0; i < a.length; i++) {
    if (i != a.indexOf(a[i])) return false
  }
  return true
};

/**
 * 1657. Determine if Two Strings Are Close
 * @param word1 
 * @param word2 
 * @url https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75
 */
function closeStrings(word1: string, word2: string): boolean {
  let map1 = new Map<string, number>()
  let map2 = new Map<string, number>()

  for (let ele of word1.split("")) {
    map1.set(ele, (map1.get(ele) ?? 0) + 1)
  }

  for (let ele of word2.split("")) {
    map2.set(ele, (map2.get(ele) ? map2.get(ele) as number : 0) + 1)
  }

  let a1 = Array.from(map1.values()).sort().join()
  let a2 = Array.from(map2.values()).sort().join()

  let s1 = Array.from(map1.keys()).sort().join()
  let s2 = Array.from(map2.keys()).sort().join()

  return(a1 == a2 && s1 == s2)
};