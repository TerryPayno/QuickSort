function QuickSort(A , start, end){

	if (start < end-1) {
		var Pindex = Partition(A, start, end);
		
		QuickSort(A , start , Pindex );
		QuickSort(A , Pindex+1 , end);
	}
	return A;
}
function Partition(A, start, end){

	pivot = A[end-1];
	console.log(pivot);
	Pindex = start;
	console.log("new call to partition");
	for(i = start; i < end-1; i++){
		
		if (A[i] <= pivot){
			//swap
			var temp = A[i];
			A[i] = A[Pindex];
			A[Pindex] = temp;

			Pindex++;
			
		}
	}
	var temp2 = A[end-1];
	A[end-1] = A[Pindex];
	A[Pindex] = temp2;
	console.log(A);
	return Pindex;

}

var myList = [8,1,4,7,2,6,9,3];

console.log(QuickSort(myList, 0, myList.length ));