type Question = {
  question: string;
  answers: string[];
  correctAnswerIdx: number;
};

export const QUESTIONS: Question[] = [
  {
    question:
      "Which architecture is characterized by a single, self-contained deployment unit?",
    answers: ["Microservices", "Monolith", "Serverless", "SOA"],
    correctAnswerIdx: 1,
  },
  {
    question:
      "Which architecture promotes independent deployability and scalability of individual components?",
    answers: ["Monolith", "SOA", "Microservices", "Client-Server"],
    correctAnswerIdx: 2,
  },
  {
    question:
      "In a monolithic application, how are different modules typically deployed?",
    answers: [
      "As separate containers",
      "As independent services",
      "As a single unit",
      "Via a message queue",
    ],
    correctAnswerIdx: 2,
  },
  {
    question:
      "Which architecture often leads to tighter coupling between components?",
    answers: [
      "Microservices",
      "Monolith",
      "Serverless",
      "Event-Driven Architecture",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "What is a common challenge in microservices architecture related to data consistency?",
    answers: [
      "Easier data management",
      "Guaranteed ACID transactions",
      "Eventual consistency",
      "Strongly consistent databases only",
    ],
    correctAnswerIdx: 2,
  },
  {
    question:
      "Which architecture is generally easier to develop and debug initially?",
    answers: ["Microservices", "Monolith", "Serverless", "SOA"],
    correctAnswerIdx: 1,
  },
  {
    question:
      "Which technology is commonly used for inter-service communication in microservices?",
    answers: [
      "Shared Database",
      "Direct Function Calls",
      "REST APIs (HTTP)",
      "Monolithic Kernel Calls",
    ],
    correctAnswerIdx: 2,
  },
  {
    question:
      "What does 'bounded context' refer to in the context of microservices?",
    answers: [
      "The physical size of a service",
      "A specific responsibility with clear boundaries",
      "The maximum number of services",
      "The database schema",
    ],
    correctAnswerIdx: 1,
  },
  {
    question: "Which architecture is more prone to a single point of failure?",
    answers: [
      "Microservices",
      "Monolith",
      "Distributed Systems",
      "Event-Driven Architecture",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "Which deployment strategy is commonly associated with monoliths?",
    answers: [
      "Blue/Green Deployment",
      "Canary Releases",
      "Rolling Updates",
      "Single Deployment Unit",
    ],
    correctAnswerIdx: 3,
  },
  {
    question:
      "Which architecture typically requires more sophisticated monitoring and logging?",
    answers: [
      "Monolith",
      "Microservices",
      "Single-Page Applications",
      "Static Websites",
    ],
    correctAnswerIdx: 1,
  },
  {
    question: "What is a 'strangler fig' pattern used for?",
    answers: [
      "Creating new microservices from scratch",
      "Incrementally migrating from monolith to microservices",
      "Building monolithic applications",
      "Orchestrating container deployments",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "Which type of architecture often involves the use of API Gateways?",
    answers: ["Monolith", "Microservices", "Client-Server", "Peer-to-Peer"],
    correctAnswerIdx: 1,
  },
  {
    question:
      "Which architecture allows better technology diversity for different services/modules?",
    answers: [
      "Microservices",
      "Monolith",
      "Both are equal",
      "Neither, technology must be uniform",
    ],
    correctAnswerIdx: 0,
  },
  {
    question:
      "In a monolith, a change to a small part of the application usually requires...",
    answers: [
      "Redeployment of only the changed module.",
      "No redeployment.",
      "Redeployment of the entire application.",
      "Restarting only the affected database.",
    ],
    correctAnswerIdx: 2,
  },
  {
    question:
      "Which of these is a primary challenge in managing state in complex reactive frontends?",
    answers: [
      "Data fetching simplicity",
      "Predictable state mutations",
      "Component isolation leading to prop drilling",
      "Overly simplified component trees",
    ],
    correctAnswerIdx: 2,
  },
  {
    question:
      "What problem does 'Observable Composition' commonly address in reactive frontends?",
    answers: [
      "Styling components consistently",
      "Managing asynchronous data streams and their transformations",
      "Creating static layouts",
      "Reducing bundle size",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "What is a common pitfall when dealing with event handling in reactive programming?",
    answers: [
      "Efficient memory management",
      "Creating memory leaks through unmanaged subscriptions",
      "Automatic disposal of event listeners",
      "Synchronous event processing",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "What challenge arises from frequent UI updates triggered by reactive data changes?",
    answers: [
      "Improved performance due to fewer DOM manipulations",
      "Potential performance bottlenecks due to excessive re-renders",
      "Simplified debugging",
      "Decreased application complexity",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "Which issue often complicates debugging in reactive applications?",
    answers: [
      "Clear and linear execution paths",
      "Asynchronous nature of data flows and transformations",
      "Simplified error messages",
      "Deterministic state changes",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "What is a common strategy to mitigate performance issues caused by frequent updates in a reactive frontend?",
    answers: [
      "Rendering all components simultaneously",
      "Using techniques like memoization and virtualized lists",
      "Ignoring performance considerations",
      "Increasing the frequency of updates",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "What does 'backpressure' refer to in the context of reactive streams?",
    answers: [
      "The pressure to write code quickly",
      "The ability of a consumer to signal the producer to slow down data emission",
      "The automatic scaling of data sources",
      "The force exerted by UI elements on the user",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "Which of the following is NOT a typical benefit of using a reactive approach in frontend development?",
    answers: [
      "Improved handling of asynchronous operations",
      "Enhanced code maintainability for complex interactions",
      "Guaranteed elimination of all UI-related bugs",
      "More declarative UI updates",
    ],
    correctAnswerIdx: 2,
  },
  {
    question: "Why can error handling be more complex in reactive systems?",
    answers: [
      "Errors always occur synchronously",
      "Errors can propagate through multiple asynchronous stages",
      "Errors are automatically handled by the framework",
      "Reactive systems are inherently error-free",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "What is the purpose of 'time-based operators' (like debounce, throttle) in reactive programming?",
    answers: [
      "To precisely schedule events at specific times",
      "To control the rate of data emission or event handling",
      "To create animations",
      "To measure the execution time of functions",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "What challenge does the concept of 'hot' vs. 'cold' observables introduce?",
    answers: [
      "No challenge, they are interchangeable",
      "Understanding when data streams begin emitting values and how subscriptions behave",
      "Choosing the right color scheme for the UI",
      "Managing server-side data efficiently",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "What problem can arise when combining multiple reactive data sources?",
    answers: [
      "Simplified data synchronization",
      "Potential race conditions and unexpected data combinations",
      "Automatic resolution of data conflicts",
      "Guaranteed data consistency",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "Which of these can make testing reactive frontends more difficult?",
    answers: [
      "Deterministic and predictable state changes.",
      "The asynchronous and event-driven nature of reactive code.",
      "The use of simple, synchronous functions.",
      "The absence of side effects.",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "What's a common approach to prevent excessive re-renders of components when using a reactive data source?",
    answers: [
      "Always re-rendering the entire component tree.",
      "Using change detection strategies like `OnPush` (in Angular) or memoization.",
      "Ignoring render cycles.",
      "Triggering more frequent updates.",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "When working with large datasets and reactive streams, what technique helps manage memory usage efficiently?",
    answers: [
      "Loading the entire dataset into memory at once.",
      "Using pagination, virtualization, or data windowing.",
      "Ignoring memory constraints.",
      "Duplicating the dataset for faster access.",
    ],
    correctAnswerIdx: 1,
  },
  {
    question: "What is eventual consistency?",
    answers: [
      "A guarantee that data will be consistent immediately after a write.",
      "A guarantee that data will eventually be consistent across all nodes, but with a potential delay.",
      "A system where data is never guaranteed to be consistent.",
      "A type of database that only allows read operations.",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "Which of the following is a common cause of eventual consistency challenges?",
    answers: [
      "Network latency and partitions.",
      "Using a single, centralized database server.",
      "Strongly consistent transactions.",
      "Using synchronous replication exclusively.",
    ],
    correctAnswerIdx: 0,
  },
  {
    question: "What is a 'stale read' in the context of eventual consistency?",
    answers: [
      "Reading data that is encrypted.",
      "Reading data that has been deleted.",
      "Reading data that is not yet the most up-to-date version.",
      "Reading data from a backup.",
    ],
    correctAnswerIdx: 2,
  },
  {
    question:
      "Which data structure can be used to help resolve conflicts in eventually consistent systems?",
    answers: [
      "Linked List",
      "Conflict-free Replicated Data Type (CRDT)",
      "Binary Search Tree",
      "Hash Table",
    ],
    correctAnswerIdx: 1,
  },
  {
    question: "What is 'read-your-writes' consistency?",
    answers: [
      "A guarantee that a process will always read the most recent data, even from other processes.",
      "A guarantee that after a process writes data, subsequent reads by *that process* will reflect the write.",
      "A guarantee that data will be consistent across all replicas within a specific timeframe.",
      "A guarantee that data written cannot be read later on.",
    ],
    correctAnswerIdx: 1,
  },
  {
    question:
      "What is a common strategy to mitigate the effects of stale reads?",
    answers: [
      "Using read-your-writes consistency.",
      "Implementing version vectors or timestamps.",
      "Using caching mechanisms with short Time-To-Live (TTL).",
      "All of the above.",
    ],
    correctAnswerIdx: 3,
  },
  {
    question:
      "What problem can arise if multiple clients update the same data concurrently in an eventually consistent system?",
    answers: [
      "Data loss or overwrites.",
      "Increased data integrity.",
      "Guaranteed data consistency.",
      "Faster read performance.",
    ],
    correctAnswerIdx: 0,
  },
  {
    question: "What is a 'monotonic reads' guarantee?",
    answers: [
      "Once a process reads a value, it will never read an older value.",
      "Ensures operations are executed one at a time.",
      "Ensures immediate consistency of all nodes.",
      "Once you read, you can not write.",
    ],
    correctAnswerIdx: 0,
  },
  {
    question:
      "Which database model is *most commonly* associated with eventual consistency?",
    answers: [
      "Relational databases (e.g., MySQL, PostgreSQL).",
      "NoSQL databases (e.g., Cassandra, DynamoDB).",
      "Graph databases (e.g., Neo4j).",
      "Object-oriented databases.",
    ],
    correctAnswerIdx: 1,
  },
  {
    question: "What is a 'causal consistency' guarantee?",
    answers: [
      "All causally related operations are seen by all processes in the same order.",
      "Data changes are propagated instantly.",
      "Data is always consistent after one second.",
      "Operations are always rolled back.",
    ],
    correctAnswerIdx: 0,
  },
  {
    question:
      "What is the CAP theorem, and how does it relate to eventual consistency?",
    answers: [
      "It states a system can have Consistency, Availability, and Partition tolerance; Eventual consistency prioritizes Availability and Partition tolerance.",
      "It states a system can only have two of Consistency, Availability, and Partition tolerance; Eventual consistency chooses Consistency and Partition tolerance.",
      "It states a system can only have two of Consistency, Availability, and Partition tolerance; Eventual consistency chooses Availability and Partition tolerance.",
      "It is unrelated to distributed systems and eventual consistency.",
    ],
    correctAnswerIdx: 2,
  },
  {
    question:
      "Which of the following is NOT a typical characteristic of a system designed for eventual consistency?",
    answers: [
      "High availability.",
      "Low latency for reads.",
      "Strong consistency guarantees.",
      "Scalability.",
    ],
    correctAnswerIdx: 2,
  },
  {
    question: "What is the advantage of eventual consistency?",
    answers: [
      "Guaranteed data consistency",
      "Simplified development",
      "Better fault tolerance and higher availability",
      "No need of replication",
    ],
    correctAnswerIdx: 2,
  },
  {
    question:
      "What technique can help ensure operations are eventually applied in the correct order, even with network delays?",
    answers: [
      "Using only synchronous communication.",
      "Using vector clocks or version vectors.",
      "Ignoring timestamps.",
      "Disabling replication",
    ],
    correctAnswerIdx: 1,
  },
  {
    question: "What is a 'last-writer-wins' conflict resolution strategy?",
    answers: [
      "The update which happened first is the one that will persist.",
      "The update that comes from the user with highest privileges will prevail.",
      "The update with the most recent timestamp is the one that is kept.",
      "The updates are merged automatically.",
    ],
    correctAnswerIdx: 2,
  },
];
