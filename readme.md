# Binary Search Tree Fun
Because nothing says fun like the word fun

## Intro
This repo contains some files I wrote for playing about with Binary Search Trees (BSTs), and is mostly aimed at making it an interactive and intuitive experience with minimal software dependencies. Oh, and so far *the tree is only tested with integers (whole numbers)*, so... you're on your own if you try and add `"Kittens"` for example.

## A Binary Search Whatnow?
A BST is a data stucture (code capable of storing data in particular ways). The way of a BST is as follows:

- It uses a tree structure made up of nodes
- Nodes in this case are objects with `value`, `left`, and `right` properties.
- All nodes should have a value set, the left and right properties can be null, or point to other nodes.
- The tree is an object with a root property, this root is either null, or points to our first node

### Growing our tree...
...or to be more technical, adding nodes to it, works as follows:

- When we add a value, we put it in a new node, and walk through the tree to find the right spot for it.
- If we find an empty spot (an empty spot is known as a leaf), we put it there. So in a new BST, we'd just put the node at the root.
- If the spot (or branch, as it's called in Algo land), is not empty, we check its value
    - If the value of the current branch we're checking is greater than our new value, we look up the current branch's left node. So, if our new value is smaller, we go left. 
    - If the value of the current branch is less than (or equal to) or new value, we go right
    - As mentioned before, when we find a leaf, we add our new node there, thus growing the tree

### Why bother with a BST? 
Well it's *very very fast to add and retrive data*. Unlike a array or list stucture, where you have to go through the whole damn thing to find the right place, the longest search you could possibly perform is equal to the depth of the tree (how many consecutive nodes there are on the longest branch). 

*This means most of your functions run in Log(n) time*, which means that you can double the ammount of stuff in your tree, and only fractionally increace the time it takes to acess anything. For me, that's the big one, read up on the rest.

## Requirements
- Node.js 9
    - Note that Node 9 is not widely used, and as of writing, seems kinda buggy
    - I highly reommend using NVM to manage your node installations
    - If any of these terms are confusing, youtube is your friend

That's it, just node. I'm using Node 9's REPL module to run the code in an interactive shell, and that's a part of Node 9's core.

*ALSO NOTE* - Node.js has nothing to do with the notion of a node I was writing about in the introduction. Node.js is a piece of software with a cool name. Nodes are, well, a word for refering to a point which can link to other points, a term not specific to computing.

## Getting Started
Firstly, download this repo and open your shell. Navigate to the download's directory inside your shell. Then:

- Switch to Node.js 9
- Run `$ node repl_classBst.js` - you don't need to include the dollar sign.
    -  Your prompt should have changed from `$` or whatever, to `>`
- A dummy BST will have been created, try typing `> myBst` to see it.

Waaay, you're good to go. Read the code to see the methods available to you. Note that you have to pass in your tree (or the dummy one) as an argument most of the time. This is because I'm attaching the methods to the protoype like a good little dev (it saves memory), and the prototype can't access an instance's values (see 'prototype oriented programming in JS').