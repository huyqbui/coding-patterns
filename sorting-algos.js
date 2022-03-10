function merge(l, r) {
  let arr = [];

  // break out of loop if any one array is empty
  while (l.length && r.length) {
    // Pick the smaller among the smallest element
    if (l[0] < right[0]) arr.push(l.shift())
    else arr.push(r.shift())
  }
  return [...arr, ...l, ...r]
}


// Time: O(n logn) | Space: O(n)
function mergeSort(arr) {
  const half = arr.length / 2

  // Base case
  if (arr.length < 2) return arr;


  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(array))
}



// Time: average - O(n logn) | worst - O(n^2)
// Space: average - O(n) | worst - O(n)
// quickSort tends to perform faster on average than mergeSort
function quickSort(arr, left, right) {
  if (left < right) {
    let pivot = partition(arr, left, right)
  }

  if (left < pivot - 1) quickSort(arr,left, pivot - 1)
  if (right > pivot) quickSort(arr, pivot, right)

  return arr;


  function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)]

    while (left <= right) {
      while (arr[left] < pivot) left += 1;

      while (arr[right] > pivot) right -= 1;

      if (left <= right) {
        swap(arr, left, right);
        left += 1
        right -= 1
      }

      return left;
    }

  }

}

/*
Tradeoffs and Considerations:
- Overhead
  - Calls to helper functions (e.g. swap or partition)
  - Implementation details (e.g. choice of pivot)
    - leftMost, rightMost, random, middle, median-of-three

- Stability

Is relative ordering important?
- A stable sorting algo preserves original relative order of input set

- Size & kind of input
  - Combine multiple sorting algos to achieve more optimal real-world performance
  - (e.g. TimSort - mergeSort & insertionSort)

- Comparison vs non-comparison sorts
  - Comparison sorts are bounded to O(n log(n)) time complexity
  - Deciding on another sort (e.g. radix sort) might be more appropriate



- Sorting
    Ordering by inherent values ([5, 3, 7, 1, 2, 6])

- Ranking
    Ordering by external rules([Post1, Post2, Post3, Post4])

Origins of search:
- Finding local documents:
  - e.g. finding 'home' in documents
  - naive approach: filename.includes('home') 
  - Time: O(n) -> Linear
  Indexing allows us to search faster (think index at end of book)
  - better approach: index w/ keyword -> filename
  Term Frequency - Inverse Document Frequence
    Score of document = # times word appears in document / # of documents word appears in
  Index needs to store frequencies now
  homework -> (homework.doc, 1)
  tradeoff: if we precompute the work more, we can get results faster

  TF = number stored w/document location
  IDF = number of documents in row

  
  How would we do phrases?
  Index would also need to store the position of the word
  homework -> (homework.doc, 1, position)


  TF-IDF exploited
    - add keywords to website to increase ranking
    - AltaVista plagued w/ spam
    - Yahoo had webmasters submit sites

Ranking is where Google got it right!

Google's PageRank:
  Score of document = ~TF-IDF x Page Authority x Personalization

Other ways ranking is used:
  Feed | Reccomendation

Twitter:
- Documents are tweets
  - Reverse-Chronological
  - 'Home' timeline
  - 'Bring Your Own Algorithm'

Spotify Discover Weekly:
  Collection: Exploit / Explore

  How does Spotify recommend music?

  Characteristics of songs AND users AND everyone else
  - Collaborative filtering 
    (find someone similar to you & show new songs based on what they recently clicked on)
  - 30 second rule
    (how long to listen to a song to consider someone liked it)

    
challenge for AI: you need data, and huge computing resource

*/


