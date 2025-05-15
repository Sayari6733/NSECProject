import React from 'react';
import './practiceDSA.css';

const dataStructures = [
  { name: "Design Dynamic Array (Resizable Array)", difficulty: "Easy", link:"https://neetcode.io/problems/dynamicArray"  },
  { name: "Design Singly Linked List", difficulty: "Easy", link:"https://neetcode.io/problems/singlyLinkedList" },
  { name: "Design Double-ended Queue", difficulty: "Easy", link:"https://leetcode.com/problems/design-circular-deque/description/" },
  { name: "Design Binary Search Tree", difficulty: "Medium", link:"https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/description/" },
  { name: "Design Hash Table", difficulty: "Medium", link:"https://leetcode.com/problems/design-hashmap/description/" },
  { name: "Design Heap", difficulty: "Medium", link:"https://leetcode.com/problems/merge-k-sorted-lists/description/?envType=problem-list-v2&envId=heap-priority-queue" },
  { name: "Design Graph", difficulty: "Medium", link:"https://leetcode.com/problems/design-graph-with-shortest-path-calculator/description/" },
  { name: "Design Disjoint Set (Union-Find)", difficulty: "Medium", link:"https://www.hackerearth.com/practice/notes/disjoint-set-union-union-find/" },
  { name: "Design Segment Tree", difficulty: "Hard", link:"https://leetcode.com/problems/the-skyline-problem/description/?envType=problem-list-v2&envId=segment-tree" },
];

const sortingAlgorithms = [
  { name: "Insertion Sort", difficulty: "Easy", link:"https://leetcode.com/problems/insertion-sort-list/description/" },
  { name: "Merge Sort", difficulty: "Medium", link:"https://leetcode.com/problems/merge-k-sorted-lists/description/?envType=problem-list-v2&envId=merge-sort" },
  { name: "Quick Sort", difficulty: "Medium", link:"https://leetcode.com/problems/sort-colors/description/?envType=problem-list-v2&envId=sorting" },

];

const graphs = [
  { name: "Matrix Depth-First Search", difficulty: "Medium", link:"https://leetcode.com/problems/word-search/description/?envType=problem-list-v2&envId=depth-first-search" },
  { name: "Matrix Breadth-First Search", difficulty: "Medium", link:"https://leetcode.com/problems/same-tree/description/?envType=problem-list-v2&envId=breadth-first-search" },
  { name: "Dijkstra's Algorithm", difficulty: "Hard", link:"https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/1328953/C++-Solution-or-Dijkstra's-Algorithm/" },
  { name: "Prim's Algorithm", difficulty: "Hard", link:"https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/description/?envType=problem-list-v2&envId=minimum-spanning-tree" },
  { name: "Kruskal's Algorithm", difficulty: "Hard", link:"https://leetcode.com/problem-list/minimum-spanning-tree/" },
  { name: "Topological Sort", difficulty: "Medium", link:"https://leetcode.com/problems/course-schedule/description/?envType=problem-list-v2&envId=topological-sort" },
];

const DynamicProgramming = [
  { name: "0 / 1 Knapsack", difficulty: "Medium", link:"https://leetcode.com/problems/painting-the-walls/solutions/3650465/0-1-knapsack/" },
  { name: "Unbounded Knapsack", difficulty: "Medium", link:"https://leetcode.com/problems/coin-change/description/" },
];

const DesignPatterns = [
  { name: "Factory Method Pattern", difficulty: "Easy", link:"https://leetcode.com/discuss/post/2167613/data-ingestion-framework-factory-pattern-py79/" },
  { name: "Singleton Pattern", difficulty: "Easy", link:"https://leetcode.com/discuss/post/2167613/data-ingestion-framework-factory-pattern-py79/" },
  { name: "Builder Pattern", difficulty: "Easy", link:"https://refactoring.guru/design-patterns/builder" },
  { name: "Prototype Pattern", difficulty: "Easy", link:"https://refactoring.guru/design-patterns/singleton" },
  { name: "Adapter Pattern", difficulty: "Easy", link:"https://refactoring.guru/design-patterns/adapter" },
  { name: "Decorator Pattern", difficulty: "Medium", link:"https://refactoring.guru/design-patterns/decorator" },
  { name: "Facade Pattern", difficulty: "Easy", link:"https://refactoring.guru/design-patterns/facade" },
  { name: "Strategy Pattern", difficulty: "Medium", link:"https://refactoring.guru/design-patterns/strategy" },
  { name: "Observer Pattern", difficulty: "Medium", link:"https://refactoring.guru/design-patterns/observer" },
  { name: "State Pattern", difficulty: "Medium", link:"https://refactoring.guru/design-patterns/state" },
];

const MachineLearningPatterns = [
  { name: "Gradient Descent", difficulty: "Medium", link:"https://scikit-learn.org/stable/modules/sgd.html" },
  { name: "Linear Regression (Forward)", difficulty: "Medium", link:"https://spssanalysis.com/forward-regression-in-spss/" },
  { name: "Linear Regression (Training)", difficulty: "Medium", link:"https://mlu-explain.github.io/linear-regression/" },
  { name: "Neural Networks", difficulty: "Hard", link:"https://news.mit.edu/2017/explained-neural-networks-deep-learning-0414" },
  { name: "Pytorch Basics", difficulty: "Easy", link:"https://pytorch.org/tutorials/beginner/basics/intro.html" },
  { name: "Digit Classifier", difficulty: "Medium", link:"https://www.kaggle.com/c/digit-recognizer" },
  { name: "Intro to Natural Language Processing", difficulty: "Medium", link:"https://www.deeplearning.ai/resources/natural-language-processing/" },
  { name: "Sentiment Analysis", difficulty: "Medium", link:"https://en.wikipedia.org/wiki/Sentiment_analysis" },
  { name: "GPT Dataset", difficulty: "Medium", link:"https://www.kaggle.com/datasets/abhishek/gpt2-output-data" },
  { name: "Self Attention", difficulty: "Hard", link:"https://www.ibm.com/think/topics/self-attention#:~:text=Self%2Dattention%20is%20a%20type,understand%20the%20relations%20between%20them." },
  { name: "Multi Headed Self Attention", difficulty: "Hard", link:"https://paperswithcode.com/method/multi-head-attention" },
  { name: "Transformer Block", difficulty: "Hard", link:"https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)" },
  { name: "Code GPT", difficulty: "Hard", link:"https://codegpt.co/" },
  { name: "Make GPT Talk Back", difficulty: "Hard", link:"https://neetcode.io/problems/make-gpt-talk-back" }
];



const PracticeDSA = () => {
  const renderRows = (data) =>
    data.map((item, index) => (
      <div className="table-row" key={index}>
        <div className="table-cell status">
          <input type="checkbox" />
        </div>
        <div className="table-cell problem">
          <a href={item.link} style={{ color: "inherit", textDecoration: "none", }} >
          {item.name}
          </a>
        </div>
        <div className={`table-cell difficulty ${item.difficulty.toLowerCase()}`}>
          {item.difficulty}
        </div>
      </div>
    ));

  return (
    <div className="practicedsa-container">
      <div className="section">
        <div className="table-title">Data Structures</div>
        <div className="table">
          <div className="table-header">
            <div className="table-cell">Status</div>
            <div className="table-cell">Problem</div>
            <div className="table-cell">Difficulty</div>
          </div>
          {renderRows(dataStructures)}
        </div>
      </div>

      <div className="section">
        <div className="table-title">Sorting</div>
        <div className="table">
          <div className="table-header">
            <div className="table-cell">Status</div>
            <div className="table-cell">Problem</div>
            <div className="table-cell">Difficulty</div>
          </div>
          {renderRows(sortingAlgorithms)}
        </div>
      </div>

      <div className="section">
        <div className="table-title">Graphs</div>
        <div className="table">
          <div className="table-header">
            <div className="table-cell">Status</div>
            <div className="table-cell">Problem</div>
            <div className="table-cell">Difficulty</div>
          </div>
          {renderRows(graphs)}
        </div>
      </div>

      <div className="section">
        <div className="table-title">Dynamic Programming</div>
        <div className="table">
          <div className="table-header">
            <div className="table-cell">Status</div>
            <div className="table-cell">Problem</div>
            <div className="table-cell">Difficulty</div>
          </div>
          {renderRows(DynamicProgramming)}
        </div>
      </div>

      <div className="section">
        <div className="table-title">Design Patterns</div>
        <div className="table">
          <div className="table-header">
            <div className="table-cell">Status</div>
            <div className="table-cell">Problem</div>
            <div className="table-cell">Difficulty</div>
          </div>
          {renderRows(DesignPatterns)}
        </div>
      </div>

      <div className="section">
        <div className="table-title">Machine Learning</div>
        <div className="table">
          <div className="table-header">
            <div className="table-cell">Status</div>
            <div className="table-cell">Problem</div>
            <div className="table-cell">Difficulty</div>
          </div>
          {renderRows(MachineLearningPatterns)}
        </div>
      </div>
    </div>
  );
};

export default PracticeDSA;
