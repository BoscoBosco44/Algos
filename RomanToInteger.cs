

public int RomanToInt(string s)
{
    int count = 0;

    foreach (char letter in s)
    {
        if (letter == 'I')
        {
            count++;
        }
    }

    return count;
}
