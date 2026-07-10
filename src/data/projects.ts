export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live?: string;
  challenge: string;
  solution: string;
  architecture: {
    nodes: { id: string; label: string; type: "client" | "api" | "service" | "db" | "security" }[];
    edges: { from: string; to: string; label?: string }[];
  };
}

export const projectsData: Project[] = [
  {
    id: "jamii-money",
    title: "Jamii Money",
    subtitle: "Financial Management Platform & Wallet API",
    description: "Engineered a robust financial backend supporting multi-currency wallet management, real-time transaction processing, and automated savings goals.",
    longDescription: "Jamii Money is a high-throughput financial management API designed to support ledger accounts, transaction queuing, wallet state updates, and goal-based savings. The application was architected using NestJS with strict modular boundaries to separate auth, wallets, transactions, and notification domains. It integrates Swagger for interactive documentation and uses JWT for session integrity.",
    tech: ["NestJS", "MongoDB", "Mongoose", "Swagger", "JWT", "REST API", "Jest"],
    github: "https://github.com/shem958/jamii-money",
    challenge: "Ensuring transaction consistency, preventing double-spending in concurrency scenarios, and maintaining highly accurate financial histories.",
    solution: "Implemented optimistic concurrency control (OCC) using version keys on wallets, backed by MongoDB session transactions. Designed a secure ledger schema where every wallet change is recorded as a immutable transaction log before the balance state is mutated.",
    architecture: {
      nodes: [
        { id: "client", label: "Client App (HTTP/JSON)", type: "client" },
        { id: "auth", label: "JWT Guard / Auth Gateway", type: "security" },
        { id: "wallet", label: "Wallet Service (OCC Balance)", type: "service" },
        { id: "ledger", label: "Ledger Service (Immutable Logs)", type: "service" },
        { id: "db", label: "MongoDB (Session Transactions)", type: "db" }
      ],
      edges: [
        { from: "client", to: "auth", label: "API Requests" },
        { from: "auth", to: "wallet", label: "Validated Route" },
        { from: "wallet", to: "ledger", label: "Log Debit/Credit" },
        { from: "ledger", to: "db", label: "Write Logs (Tx)" },
        { from: "wallet", to: "db", label: "Update Balance (Tx)" }
      ]
    }
  },
  {
    id: "cyclesync",
    title: "CycleSync",
    subtitle: "Secure & Private Menstrual Cycle Tracker",
    description: "Developed predictive menstrual cycle tracking algorithms with client-side AES-256 encryption to protect sensitive user health data.",
    longDescription: "CycleSync is a privacy-first web application designed to track and predict menstrual cycles while keeping user data entirely confidential. Built using Golang, it utilizes cryptographically secure key derivation and AES-256-GCM encryption. User data is encrypted/decrypted transparently, ensuring no unencrypted health markers are exposed to the server database.",
    tech: ["Golang", "AES-256-GCM", "PBKDF2", "JWT", "SQLite", "Gin Gonic"],
    github: "https://github.com/shem958/cyclesync",
    challenge: "Securing highly sensitive health information against database leaks or administrator interception without sacrificing user-friendly predictions.",
    solution: "Designed a zero-knowledge data architecture. The user's password is run through PBKDF2 to derive a master key on the client (or via secure memory buffer in transit), which encrypts the health payload using AES-256-GCM. The database only stores base64-encoded ciphertext and nonces.",
    architecture: {
      nodes: [
        { id: "client", label: "User UI (Local Decryption)", type: "client" },
        { id: "crypto", label: "AES-256-GCM / PBKDF2 Layer", type: "security" },
        { id: "go-api", label: "Golang Gin API Server", type: "api" },
        { id: "db", label: "SQLite / PostgreSQL (Ciphertext Only)", type: "db" }
      ],
      edges: [
        { from: "client", to: "crypto", label: "Raw Input" },
        { from: "crypto", to: "go-api", label: "Ciphertext + Nonce" },
        { from: "go-api", to: "db", label: "Store Encrypted Payload" }
      ]
    }
  },
  {
    id: "magenta",
    title: "Magenta",
    subtitle: "Enterprise Wholesale & Inventory Management",
    description: "Built a full-stack, enterprise-grade system for wholesale operations with real-time inventory levels, sales ledgers, and delivery dispatches.",
    longDescription: "Magenta is a comprehensive wholesale management system. It coordinates inventory tracking across multiple distribution points, automates billing and invoice generation, tracks pending deliveries, and provides analytical insights into sales trends. Built on an Express.js and Node.js backend with MongoDB storage.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Mongoose", "React.js", "Chart.js"],
    github: "https://github.com/shem958/magenta",
    challenge: "Handling concurrent stock adjustments during flash orders and preventing race conditions in delivery schedules and invoicing totals.",
    solution: "Structured atomic MongoDB operations (using `$inc` and conditional updates) to lock inventory items during order processing. Utilized a decimal arithmetic library for invoice pricing calculations to bypass floating-point rounding issues.",
    architecture: {
      nodes: [
        { id: "client", label: "Web Portal / Admin Dashboard", type: "client" },
        { id: "gateway", label: "Express API Gateway / Role Auth", type: "api" },
        { id: "inventory", label: "Inventory Sync Service", type: "service" },
        { id: "billing", label: "Billing & Decimal Logic", type: "service" },
        { id: "db", label: "MongoDB (Replica Set / Indexes)", type: "db" }
      ],
      edges: [
        { from: "client", to: "gateway", label: "Operations" },
        { from: "gateway", to: "inventory", label: "Reserve Stock" },
        { from: "gateway", to: "billing", label: "Calculate Total" },
        { from: "inventory", to: "db", label: "Atomic Decrement" },
        { from: "billing", to: "db", label: "Record Invoice" }
      ]
    }
  }
];
