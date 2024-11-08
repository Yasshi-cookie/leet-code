import java.util.HashMap;
import java.util.Map;

public class SubarraySum {
    public int subarraySum(int[] nums, int k) {
        // Mapで累積和を記録する (初期値として累積和が0のときに1回存在することを記録)
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);

        int count = 0;
        int sum = 0;

        for (int num : nums) {
            // 累積和を計算
            sum += num;

            // 累積和からkを引いた値がmapに存在する場合、その値をcountに加算する
            if (map.containsKey(sum - k)) {
                count += map.get(sum - k);
            }

            // 現在の累積和をmapに追加する
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }

        return count;
    }

    public static void main(String[] args) {
        SubarraySum solution = new SubarraySum();
        int[] nums = {1, 1, 1};
        int k = 2;
        System.out.println(solution.subarraySum(nums, k));  // 出力: 2
    }
}
