export default function  importj() {
    var toProvide='anant';
    fetch('/files/question0.json')
	.then(response => response.json())
	.then(data => {toProvide= data})
	.catch(err => console.error(err));

    setTimeout(() => {
        return toProvide
    }, 1000);
}