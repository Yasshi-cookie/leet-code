class Solution:
    def intersection(self, nums1: list[int], nums2: list[int]) -> list[int]:
        if (len(nums1) == 0 or len(nums2) == 0):
            return []

        top_of_nums1 = nums1[0]
        if (top_of_nums1 in nums2):
            return self.append_keeping_order_if_not_exist(
                top_of_nums1,
                self.intersection(self.get_next_elements(nums1), nums2)
            )
        else:
            return self.intersection(self.get_next_elements(nums1), nums2)

    def get_next_elements(self, elements: list) -> list:
        """elementsの2番目以降の要素たちをリストで返す。
        2番目以降の要素が無ければから配列を返す。

        Args:
            elements (list): _description_

        Returns:
            list: _description_
        """
        return elements[1:] if (elements[1:] != None) else []

    def append_keeping_order_if_not_exist(self, element: int, ordered_nums: list[int]) -> list[int]:
        """与えられたリストordered_numsにelementが存在しなければ、そのリストにelementを付け加えたリストを返す。
       ただし戻り値のリストは与えられたリストの順序を保つ。

        Args:
            element (int): 要素
            ordered_nums (list[int]): 昇順に並び替えられたリスト

        Returns:
            list[int]: _description_
        """
        if (ordered_nums == None or len(ordered_nums) == 0):
            return [element]
        if (element < ordered_nums[0]):
            # 先頭に要素をつける
            return [element] + ordered_nums
        if (element == ordered_nums[0]):
            return ordered_nums

        # 後ろに要素を追加
        return [ordered_nums[0]] + self.append_keeping_order_if_not_exist(element, self.get_next_elements(ordered_nums))

nums1 = [2,1]
nums2 = [1,2]
print(Solution().intersection(nums1, nums2))
