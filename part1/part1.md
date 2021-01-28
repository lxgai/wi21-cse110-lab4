# Part 1

1. At line 11, the value of *prices.length* will be printed, because *i* was declared with *var i*, so *i* is a global variable with no block scope. So *i* exists outside the for-loop. When *i* = *prices.length*, we exit the for-loop and this value of *i* gets printed. If we call **discountPrices([100, 200, 300], .5)**, we print **3**. 

2. At line 12, we print the *discountedPrice* of the last element in the *prices* array. This is because *discountedPrice* was declared with *var*, so it is a global variable with no block scope. Also, *var* tolerates redeclarations, so it's okay that it happens at line 6. The variable exists outside the for-loop and is last updated with the discounted price of the last price in the *prices* array. So that is the value it holds when it gets printed outside the for-loop. If we call **discountPrices([100, 200, 300], .5)**, we print **150**.

3. At line 13, we print the *finalPrice* of the last element in the *prices* array. *finalPrice* was declared with *var*, so it's a global variable with no block scope.  *finalPrice* is last updated when we are at the last element in the *prices* array. After that we exit the for-loop. So *finalPrice* holds the final price of the last element. If we call **discountPrices([100, 200, 300], .5)**, we print **150**.

4. The function returns *discounted*: [50, 100, 150]. The *discounted* array is empty at first. Then we go through the for-loop, and for each price in *prices* array, we apply the discount and add the discounted price to the *discounted* array. A 50% discount on 100, 200, and 300 is 50, 100, and 150 respectively. **This works** because all the variables (*discounted*, in particular), declared with *var*, have their visibility scoped to the entire current function (no block scope). 

5. At line 11, you will get an error that *i* is not defined. Because we declared *i* with *let*, *i* is only visible inside the for-loop, and thus we get an error for trying to access it outside the for-loop.

6. At line 12, we will get an error that *discountedPrice* is not defined. Becase we declared *discountedPrice* with *let*, the variable is only visible within the for-loop, thus we get an error for trying to access it outside the for-loop.

7. At line 13, we will print the final price of the last element in the *prices* array. This is because *finalPrice* was declared with *let* outside of any code blocks/loops, but still within the function. That makes it visible throughout the whole function. So, we can print the value it contains, which is the value it receives in the last iteration of the for-loop (the final price of the last element in *prices*). If we call **discountPrices([100, 200, 300], .5)**, we print **150**.

8. If we ignore the function's undefined variable errors, the function returns *discounted*: [50, 100, 150]. The for-loop puts the discounted price of each element in *prices* into *discounted*. We are able to access *discounted* in the last line of the function because we declared *let discounted* at the beginning of the function, outside any code/loop blocks. So *discounted* is visible throughout the entire function.

9. At line 11, you will get an error that *i* is not defined. Because we declared *i* with *let*, *i* is only visible inside the for-loop, and thus we get an error for trying to access it outside the for-loop.

10. At line 12, we will get an error that *discountedPrice* is not defined. Becase we declared *discountedPrice* with *const*, similar to *let*, the variable is only visible within the for-loop, thus we get an error for trying to access it outside the for-loop.

11. At line 13, we will print the final price of the last element in the *prices* array. (This is assuming we have no errors in previous lines, which we would, because *finalPrice* can't be updated if declared with *const*). Declared with *const* at the beginning of the function, before any code blocks, *finalPrice* is visible to the entire function and thus can be printed. If our code is functional and we call **discountPrices([100, 200, 300], .5)**, we print **150**.

12. If we ignore the function's errors, the function returns *discounted*: [50, 100, 150]. Because *discounted* was declared with *const* at the beginning of the function (outside any code blocks/loops), similar to *let*, it is visible to the entire function. We never attempt to reassign the const *discounted* to something else.

13-A. student.name

13-B. student['Grad Year']

13-C. student.greeting()

13-D. student['Favorite Teacher'].name

13-E. student.courseLoad[0]

14-A.  **'32'** -> We get this answer because '3' is a string, so the binary + will convert the 2 into a string and concatenate them. 

14-B. **1** -> We get 1 because numeric conversions happen in mathematical expressions automatically, so the '3' is converted to a number.

14-C. **3** - >We get 3 because numeric conversions happen in mathematical expressions automatically, and, numeric conversion rules state that null becomes 0. So 3+null becomes 3+0. 

14-D. **'3null'** -> We get this answer because '3' is a string, so the binary + will convert the null into a string 'null' and concatenate them. 

14-E. **4** -> We get 4 because numeric conversions happen in mathematical expressions automatically, and, numeric conversion rules state that true becomes 1. So true+3 becomes 1+3. 

14-F. **0** -> We get 0 because numeric conversions happen in mathematical expressions automatically, and, numeric conversion rules state that null and false both become 0. So false+null becomes 0+0.

14-G. **'3undefined'** -> We get this answer because '3' is a string, so the binary + will convert the undefined into a string 'undefined' and concatenate them. 

14-H. **NaN** -> We get this answer because numeric conversions happen in mathematical expressions automatically. However, by numeric conversion rules, undefined turns into NaN, meaning there is no valid numerical answer.

15-A. **true** -> We get true because when comparing values of different types, JS converts the values to numbers. '2' turns into number 2. 

15-B. **false** -> We get false because '2' and '12' are strings and JS compares strings in lexicographical order. In this order, '2' is greater than '1'. 

15-C. **true** -> We get true because when comparing values of different types, JS converts the values to numbers. '2' turns into number 2.

15-D. **false** -> We get false because the strict equality operator === checks the equality without type conversion. Since 2 and '2' are different types, the statement is automatically false.

15-E. **false** -> We get false because when comparing values of different types, JS converts the values to numbers. By the rules, true turns into number 1. 

15-F. **true** -> We get true because Boolean(2) returns true and the strict equality operator sees that true===true is true. They are the same type of the same value.

16. == is a regular equality check that cannot differentiate **0** and the empty string from **false**. === is a strict equality check that checks for equality without type conversation, so it will differentiate **0** from **false**, as well as the empty string from **false**. 

17. **How are you?** gets printed.  When comparing values of different types, JS converts the values to numbers. By the rules, true turns into number 1 and that does not equal the number 2, so the boolean value that this statement gets converted to is *false*. So we fail the first if statement and move onto the else-if statement. Here we have just a 2, and by JS' boolean conversion rules, 2 is not intuitively "empty" so it gets converted to true. Therefore, we enter this code block and print **How are you?**. 

18. part1-question18.js

19. **[6, 8, 10]** -> We get this result because in the first iteration of the for loop, we go to our callback function, *doSomething*, with the arguments *1*, *function(x)* (the first element in *array* is 1 and function(x) is given). When we go into *doSomething*, that calls its callback function, *function(x)*, with the argument *num + 2*, where *num* is the 1. So basically we call *function(3)*, which returns *3 * 2 = 6*. So 6 gets pushed into *newArr*. In the 2nd iteration of the for loop, we go to our callback function, *doSomething*, with the arguments *2*, *function(x)* (the second element in *array* is 2 and function(x) is given). When we go into *doSomething*, that calls its callback function, *function(x)*, with the argument *num + 2*, where *num* is the 2. So basically we call *function(4)*, which returns *4 * 2 = 8*. So 8 gets pushed into *newArr*. In the 3nd iteration of the for loop, we go to our callback function, *doSomething*, with the arguments *3*, *function(x)* (the third element in *array* is 3 and function(x) is given). When we go into *doSomething*, that calls its callback function, *function(x)*, with the argument *num + 2*, where *num* is the 3. So basically we call *function(5)*, which returns *5 * 2 = 10*. So 10 gets pushed into *newArr*. Then we finish the loop and return *newArr*, which holds [6,8,10].

20. part1-question20.js

21. The output of the code is:

     **1**
     
     **4**
     
     **3**
     
     **2**
     

