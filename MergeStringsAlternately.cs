public class Solution
{
    public string MergeAlternately(string word1, string word2)
    {
        string merged = "";

        int len1 = word1.Length;
        int len2 = word2.Length;


        int i = 0;
        while (i < len1 || i < len2)
        {
            if (i < len1)
            { merged += word1[i]; }
            if (i < len2)
            { merged += word2[i]; }
            i++;
        }


        return merged;
    }
}