class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if s == "":
            return 0

        lettersTaken = [s[0]]
        highestCount = 1
        count = 1
        for current in range(1, len(s)):
            if not s[current] == s[current - 1] and s[current] not in lettersTaken:
                count += 1
                lettersTaken.append(s[current])
            else:
                if count > highestCount:
                    highestCount = count
                #reset count
                count = 1
                lettersTaken = [s[current]]
        
        if count > highestCount:
            highestCount = count

        #Check through all substrings using recursion
        if len(s) > 1:
            nextSubstring = self.lengthOfLongestSubstring(s[1:])
            if nextSubstring > highestCount:
                return nextSubstring

        return highestCount

class SolutionV2(object):
    def lengthOfLongestSubstring(self, s):
        """
        A recursive implementation
        :type s: str
        :rtype: int
        """
        #Check for size 0 string
        if s == "":
            return 0

        lettersTaken = [s[0]]
        highestCount = 1
        count = 1
        for current in range(1, len(s)):
            if not s[current] == s[current - 1] and s[current] not in lettersTaken:
                count += 1
                lettersTaken.append(s[current])
            else:
                if count > highestCount:
                    highestCount = count
                count = 1
                lettersTaken = [s[current]]
                continue
        
        if count > highestCount:
            highestCount = count

        #Check through all substrings using recursion
        if len(s) > 1:
            nextSubstring = self.lengthOfLongestSubstring(s[1:])
            if nextSubstring > highestCount:
                return nextSubstring

        return highestCount

class SolutionV3(object):
    def lengthOfLongestSubstring(self, s):

        if s == "":
            return 0

        NO_OF_CHARS = 256
        n = len(s)
        curLen = 1
        maxLen = 1
        prevIndex = 0
        i = 0

        visited = [-1] * NO_OF_CHARS

        visited[ord(s[0])] = 0

        for i in range(1, n):
            prevIndex = visited[ord(s[i])]

            if prevIndex == -1 or (i - curLen > prevIndex):
                curLen += 1

            else:
                #Check if we have a new maximum substring length
                if curLen > maxLen:
                    maxLen = curLen

                curLen = i - prevIndex

            visited[ord(s[i])] = i

        if curLen > maxLen:
            maxLen = curLen

        return maxLen


def solutionTest(s, testString, length):
    result = s.lengthOfLongestSubstring(testString)
    assert result == length, "length should be " + str(length) + " result is: " + str(result)
    print("Longest substring is ", result, " : ", testString)
    
def solutionV2Test(testString):
    result = s.lengthOfLongestSubstring(testString)
    assert result == length, "length should be " + str(length) + " result is: " + str(result)
    print("Longest substring is ", result, " : ", testString)

solution = Solution()
solutionTest(solution, "abcfatztabcbb", 6)
solutionTest(solution, "b", 1)
solutionTest(solution, "ccccccccc", 1)
solutionTest(solution, "abababab", 2)
solutionTest(solution, "abcabcdefgab", 7)

print("\n")
solution = SolutionV2()
solutionTest(solution, "abcfatztabcbb", 6)
solutionTest(solution, "b", 1)
solutionTest(solution, "ccccccccc", 1)
solutionTest(solution, "abababab", 2)
solutionTest(solution, "abcabcdefgab", 7)
solutionTest(solution, "ababcabcdabcde", 5)
solutionTest(solution, "abcdefghijklmnopqrstuvwxyz", 26)
solutionTest(solution, "abacadaeafaghijkabc", 8)
solutionTest(solution, "racecar", 4)
solutionTest(solution, "hannah", 3)
solutionTest(solution, "abaabaaabaaaabaaaaab", 2)
solutionTest(solution, "hannah", 3)
solutionTest(solution, "123,35,25,90123", 7)
solutionTest(solution, ".'#r8.\8.sdf9asd0923", 8)
solutionTest(solution, "", 0)

solution = SolutionV3()
solutionTest(solution, "abcfatztabcbb", 6)
solutionTest(solution, "b", 1)
solutionTest(solution, "ccccccccc", 1)
solutionTest(solution, "abababab", 2)
solutionTest(solution, "abcabcdefgab", 7)
solutionTest(solution, "ababcabcdabcde", 5)
solutionTest(solution, "abcdefghijklmnopqrstuvwxyz", 26)
solutionTest(solution, "abacadaeafaghijkabc", 8)
solutionTest(solution, "racecar", 4)
solutionTest(solution, "hannah", 3)
solutionTest(solution, "abaabaaabaaaabaaaaab", 2)
solutionTest(solution, "hannah", 3)
solutionTest(solution, "123,35,25,90123", 7)
solutionTest(solution, ".'#r8.\8.sdf9asd0923", 8)
solutionTest(solution, "", 0)

with open("nums.txt") as f:
    testStr = f.read()

solutionTest(solution, testStr, 95)


