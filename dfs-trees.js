

/*

types of trees:

general tree
  - node w/ any number of children

binary tree
  - each node has at most 2 child nodes (eg. left, right)

binary search tree
  - binary tree where left node is laways LESS than parent
  - right node is always GREATER than parent
  - values from parent to child are effectively sorted
  - as a result, can be quicker to traverse when searching for target value

can be abstracted to any combination of node numbers/arrangements


what is Depth-first search(DFS)?
  - Recursive or iterative algo that involves...
  - 1. searching nodes down to max depth
  - 2. 


How can we traverse Tree nodes?
  - Pre Order Traversal:
    - execute functions before traversing child nodes
    Recusion:
      - push root value to array first
      - if root.left exists, recall left node(pass array as param)
      - if root.right exists, recall right node(pass array as param)


  - In Order Traversal:
    - execute functions in between child nodes
  - Post Order Traversal:
    - visit parent node last


*/