function f(nums) {
    if ( !Array.isArray(nums) ) {
        throw new Error('first parameter must be array.');
    }
    else if (nums.length === 0) {
        throw new Error ('parameter cannot be empty');
    }

    console.log(nums[0]);
    nums.splice(0,1);

    if (nums.length > 0) {
        return f(nums);
    }
    else {
        return ('There isnot left any item in array');
    }

}

console.log(f([1,2,3]));
