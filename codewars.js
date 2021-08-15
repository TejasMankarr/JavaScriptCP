//Cp1
/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples: */

/*Example 
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"*/

//Solution1.Cp1
// function likes(names) {
//         if(names == "")
//             return `no one likes this`;
//         else{
//           for(let i=0;i<=names.length;i++){
//                 if(names.length == 1)
//                 {  return `${names[i]} likes this`;
//                 }else if(names.length == 2){
//                    return `${names[i]} and ${names[i+1]} like this`;
//                 }else names.length == 3
//                    ?`${names[i]}, ${names[i+1]} and ${names[i+2]} like this`
//                    :`${names[i]}, ${names[i+1]} and ${names.length-2} others like this`;
//             }
//           }
//         }

//Cp2
/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?*/
/*Example
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12*/
// function makeNegative(num) {
//  return num > 0 ? -num : num
// }

//Cp3
/*Check if a key is present in every segment of size k in an array*/
/*Example
arr[] = { 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3} 
x = 3 
k = 3 
Output : Yes */
function findxinkindowSize( arr, x, k, n)
{
	let i;
	for (i = 0; i < n; i = i + k) {

		// Search x in segment starting
		// from index i.
		let j;
		for (j = 0; j < k; j++)
			if (arr[i + j] == x)
				break;

		// If loop didn't break
		if (j == k)
		return false;
	}

	// If n is a multiple of k
	if (i == n)
	return true;

	// Check in last segment if n
	// is not multiple of k.
	let j;
	for (j=i-k; j<n; j++)
	if (arr[j] == x)
		break;
	if (j == n)
	return false;
	
	return true;
}
// Test 1
// let arr = [ 21, 23, 56, 65, 34, 54, 76, 32, 23, 45, 21, 23, 25 ];
// Test 2
let arr = [ 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3];
	let x = 3, k = 3;
	let n = arr.length;
    let ans = findxinkindowSize(arr, x, k, n) ? "Yes":"No";
    console.log(ans);