
const swapNode = (head) => {
    //Start with the head node
    let currentNode = head;
    //Two cases have to be true, in case of an odd # of Nodes
    while((currentNode !== null) && (currentNode.next !== null)){
        //Pointer for the currentNodes data value
        let currentPlaceHolder = currentNode.data;
        //Change the data of the currentNode to it's neighbors data
        currentNode.data = currentNode.next.data;
        //Change the neighbors data to the initial Nodes data
        currentNode.next.data = currentPlaceHolder;
        //Change the pointer, so it now starts at the third Node
        currentNode = currentNode.next.next;
    }
}
