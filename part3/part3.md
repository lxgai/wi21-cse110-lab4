# Part 3

## Debugging
The bug was that num1 and num2 were strings, so putting the '+' sign between them only concatenated the strings. It did not add the numbers they were supposed to represent.

I fixed the bug by changing the line **let result = num1 + num2** to **let result = +num1 + +num2**. The unary plus converts non-number types to numbers, which allows the numbers to be added rather than concatenated.


## Network Tab
1) citylots.json
2) part2.js
3) 11.7 MB
4) 74 ms
5) User Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36
6) Apache
7) Last-Modified: Tue, 26 Jan 2021 22:14:13 GMT
8) Content-Type: application/json
9) fetchData()