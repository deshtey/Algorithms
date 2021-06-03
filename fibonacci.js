/**The fibonacci sequence is a maths sequence where 
 * The next number is found by adding up the two numbers before it
 */

//Method 1 loop
function fibonacci(n){
    let [prev,current] = [0,1]
    for (let num =1; num<n; num++){
        [prev,current] = [current,prev+current];    
    }
    return (current)
}

//Method 2 Memoization