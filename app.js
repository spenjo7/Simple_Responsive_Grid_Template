const getGridCells = () => {
	return [].slice.call(document.querySelectorAll('.grid > div'))
}

const addGridCell = ( ihtml = null, clist = null ) => {
	const div = document.createElement('div')
	div.innerHTML = ihtml?? '';
	div.classList = clist?? null;
	document.querySelector ('.grid').appendChild(div)
	return div
}

/*Example of Adding a Cell with an event Listener (that uses the cell's index in the Grid Cells List ) */
let t = addGridCell( `Click<br>Me<br>Please!`, 'greyBox' )
t.addEventListener('click', ()=>{
	let index = null
	getGridCells().forEach( (el, ind ) => {
		index = ( el == t )? ind : index
	})

	alert(index)
})