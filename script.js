// 1
let task1 = document.getElementById('task1');
task1.innerHTML = task1.textContent.replace(/функци(я|и|ю)/g, match => `<strong>${match}</strong>`);

// 2
let task2 = document.getElementById('task2');
task2.innerHTML = task2.textContent.replace( /\b\d\d:\d\d\b/g , match => `<b>${match}</b>`);

// 3
document.body.innerHTML = document.body.textContent.replace( /("|«)[^("|»)]+("|»)/g, match => `<mark>${match}</mark>`);

//4 
document.body.innerHTML = document.body.textContent.replace(/(\w+\.)+\w+/g, match => `<a href="${match}">${match}</a>`)
 

//5
let color = document.body.textContent.match( /#[a-f0-9]{6}/gi);




