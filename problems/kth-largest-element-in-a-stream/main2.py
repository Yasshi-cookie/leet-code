# ヒープを使った解法
# 参考：https://medium.com/@yasufumy/data-structure-heap-ecfd0989e5be
class KthLargest:
    def __init__(self, k: int, nums: list[int]):
        self.k = k
        self.heap = []  # ヒープを初期化
        for num in nums:
            self.add(num)  # 全部の数字をヒープに追加

    def add(self, val: int) -> int:
        self.heappush(val)  # valをヒープに追加

        while len(self.heap) > self.k:
            self.heappop()  # ヒープのトップを削除

        return self.heap[0]  # k番目に大きい要素を返す

    def heappush(self, val: int) -> None:
        self.heap.append(val)
        self._sift_up(len(self.heap) - 1)

    def heappop(self) -> int: # 値は返さなくても良い
        last = self.heap.pop()  # 最後の要素を取得
        if self.heap:
            top = self.heap[0]
            self.heap[0] = last
            self._sift_down(0)
            return top
        return last

    def _sift_up(self, idx: int) -> None:
        if idx <= 0:
            # ルートノードに到達したら終了
            return

        parent_idx = (idx - 1) // 2
        if self.heap[idx] >= self.heap[parent_idx]:
            # 最小ヒープの条件を満たしていたら終了
            return

        self.heap[idx], self.heap[parent_idx] = self.heap[parent_idx], self.heap[idx]
        self._sift_up(parent_idx)

    def _sift_down(self, idx: int) -> None:
        left_child = 2 * idx + 1
        right_child = 2 * idx + 2
        smallest = idx

        if left_child < len(self.heap) and self.heap[left_child] < self.heap[smallest]:
            smallest = left_child
        if right_child < len(self.heap) and self.heap[right_child] < self.heap[smallest]:
            smallest = right_child

        if smallest != idx:
            self.heap[idx], self.heap[smallest] = self.heap[smallest], self.heap[idx]
            self._sift_down(smallest)

# # 解説
# ## heap配列の中身がどのように更新されているかについて、具体例を用いて追っていく
# kthLargest = KthLargest(3, [4, 5, 8, 2])
# self.heap = []
# ループの中でself.add(num)を実行
# ループ1
# self.heap = 4
# ループ2
#     4
#    /
#   5
# self.heap = [4, 5]
# ループ3
#     4
#    / \
#   5   8
# self.heap = [4, 5, 8]
# ループ4
# add > heappush > self.heap.append(val)実行
#     4
#    / \
#   5   8
#  /
# 2
# self.heap = [4, 5, 8, 2]
# add > heappush > self._sift_up(len(self.heap) - 1)実行
# _sift_upの1回目のループ
#     4
#    / \
#   2   8
#  /
# 5
# self.heap = [4, 2, 8, 5]
# _sift_upの2回目のループ
#     2
#    / \
#   4   8
#  /
# 5
# self.heap = [2, 4, 8, 5]
# add > heappush終了
# ※heapのサイズがkを超えた
# add > while len(self.heap) > self.kのループに入る
# add > heappop > self.heap.pop()実行
#     2
#    / \
#   4   8
# self.heap = [2, 4, 8]
# last = 5 # self.heap.pop()
# add > heappop > if self.heap:の中の処理を実行
# 1. heapの先頭の要素とlastを入れ替えて、
#     5
#    / \
#   4   8
# self.heap = [5, 4, 8]
# 2. self._sift_down(0)を実行（ルートノード以下のを全てのノードが、（つまりヒープ全体が）最小ヒープの構造になるように並び替える）
#     4
#    / \
#   5   8
# self.heap = [4, 5, 8]

# addメソッドの実行の流れも先ほどと同様である
# print(kthLargest.add(3)) # return 4
#     4
#    / \
#   5   8
#  /
# 3
# self.heap = [4, 5, 8, 3]

# ↓

#     3
#    / \
#   4   8
#  /
# 5
# self.heap = [3, 4, 8, 5]

# ↓

#     3
#    / \
#   4   8
#  /
# 5
# self.heap = [3, 4, 8, 5]

# ↓

#     5
#    / \
#   4   8
# self.heap = [5, 4, 8]

# ↓

#     4
#    / \
#   5   8
# self.heap = [4, 5, 8]

# ↓

# return 4 # self.heap[0]
