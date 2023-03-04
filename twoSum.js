// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j]
           if(sum == target) {
               return [i,j]
           }
        }
    }
};

// come up with an algorithm that is less than O(n2) time complexity


var twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0; i <nums.length; i++) {
        const compliment = target - nums[i]
        if(map.has(compliment)) {
            return [map.get(compliment), i]
        }
        map.set(nums[i], i)
    }
};
