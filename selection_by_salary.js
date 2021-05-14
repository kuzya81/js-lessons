
const workers = [ 
{"name": "john","salary":"500"},
{"name": "alex","salary":"1500"},
{"name": "ivan","salary":"1300"}
];

function getWorthyWorkers(workers){
    return workers.filter(function(arr){
        return arr.namre.salary>1000;
    })
};
console.log(getWorthyWorkers(workers))