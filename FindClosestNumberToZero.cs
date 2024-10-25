int nums = [-4, -2, 1, 4, 8];
//[-100000,-100000]
//[2,-1,1] should return 1


public int FindClosestNumber(int[] nums)
{
    int closest = Math.Abs(nums[0]);
    foreach (int num in nums)
    {
        if (Math.Abs(num) < closest)
        {
            closest = Math.Abs(num);
        }
    }

    if (nums.Contains(closest))
    {
        return closest;
    }
    else
    {
        return closest * (-1);
    }

}


Console.WriteLine(FindClosestNumber(nums));

