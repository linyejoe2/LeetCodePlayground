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