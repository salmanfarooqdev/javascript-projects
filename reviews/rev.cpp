#include <iostream>
using namespace std;

void fizzBuzz() {
    for (int i = 1; i <= 100; ++i) {
        if (i % 3 == 0 && i % 5 == 0)
            cout << "FizzBuzz ";
        else if (i % 3 == 0)
            cout << "Fizz ";
        else if (i % 5 == 0)
            cout << "Buzz ";
        else
            cout << i << " ";
    }
}

bool isPalindrome(string str)  //palindomre
 {
    int left = 0;
    int right = str.length() - 1;
    
    while (left < right) 
    {
        if (str[left] != str[right])
            return false;
        ++left;
        --right;
    }
    
    return true;
}

string reverseString(string str)  //reverse string
{
    int left = 0;
    int right = str.length() - 1;
    
    while (left < right) 
    {
        swap(str[left], str[right]);
        ++left;
        --right;
    }
    
    return str;
}

int factorial(int n)   //factorial
{
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}




