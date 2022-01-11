const climbStairs = function(n) {
    // 处理递归边界
    if(n === 1) {
        return 1
    }
    if(n === 2){
        return 2
    }
    // 递归计算
    return climbStairs(n-1) + climbStairs(n-2)
};

const climbStairs2 = function(n) {
    // 初始化状态数组
    const f = [];
    // 初始化已知值
    f[1] = 1;
    f[2] = 2;
    // 动态更新每一层楼梯对应的结果
    for(let i = 3;i <= n;i++){
        f[i] = f[i-2] + f[i-1];
    }
    // 返回目标值
    return f[n];
};
// console.log(climbStairs2(5))
const coinChange = function(coins, amount) {
    // 用于保存每个目标总额对应的最小硬币个数
    const f = []
    // 提前定义已知情况
    f[0] = 0
    // 遍历 [1, amount] 这个区间的硬币总额
    for(let i=1;i<=amount;i++) {
        // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
        f[i] = Infinity
        // 循环遍历每个可用硬币的面额
        for(let j=0;j<coins.length;j++) {
            // 若硬币面额小于目标总额，则问题成立
            if(i-coins[j]>=0) {
                // 状态转移方程
                f[i] = Math.min(f[i],f[i-coins[j]]+1)
            }
        }
    }
    // 若目标总额对应的解为无穷大，则意味着没有一个符合条件的硬币总数来更新它，本题无解，返回-1
    if(f[amount]===Infinity) {
        return -1
    }
    // 若有解，直接返回解的内容
    return f[amount]
};
console.log(coinChange([1,2,5],11))