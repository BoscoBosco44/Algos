int nums = [-4, -2, 1, 4, 8];


public int FindClosestNumber(int[] nums)
{
    int closest = nums[0];
    foreach (int num in nums)
    {
        if (Math.Abs(num) < closest)
        {
            closest = Math.Abs(num);
        }
    }
    return closest;
}


Console.WriteLine(FindClosestNumber(nums));

