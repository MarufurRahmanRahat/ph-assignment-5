 
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?   
These are all DOM selection method. Here- 
getElementById selects one element with specific id. 
getElementsByClassName selects all elements with the given class name. 
querySelector selects the first matching elements using css selector. 
querySelectorAll selects all matching elements using css selector. 

  
How do you create and insert a new element into the DOM?   
creation:   
let element = document.createElement("div");    
insertion:    
document.body.appendChild(element);   

 
 What is Event Bubbling and how does it work?    
 By clicking on an element, event starts from that element then moves through it's parents throughout the document.   

 
 What is Event Delegation in JavaScript? Why is it useful?    
 A technique in Javascript to handle events from parent to child by attaching a single event listener to the parent.     

  
 What is the difference between preventDefault() and stopPropagation() methods? 
 preventDefault() prevents the default behavior of an element but does not stops bubbling.  
 On the other hand stopPropagation() stops event from bubbling further. 
  

