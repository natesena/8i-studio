const workflows = [
  {
    id: 1,
    title: "Quantum Design System",
    description:
      "A comprehensive design system with 200+ components and theme engine",
    image: "/project1.jpg", // You'll need to add these images to your public folder
    tags: ["React", "TypeScript", "Design System"],
    stars: 3245,
    forks: 587,
    contributors: 78,
    lastUpdated: "2 days ago",
    content:
      "This open-source design system provides a comprehensive set of accessible UI components built with React and TypeScript. Each component follows WCAG guidelines and includes extensive documentation. The project aims to make accessible development easier for the community with features like automatic dark mode, RTL support, and themeable design tokens.",
  },
  {
    id: 2,
    title: "Neural GraphQL Engine",
    description:
      "AI-powered GraphQL framework with predictive caching and schema inference",
    image: "/project2.jpg",
    tags: ["GraphQL", "Machine Learning", "Node.js"],
    stars: 2942,
    forks: 386,
    contributors: 52,
    lastUpdated: "5 days ago",
    content:
      "A groundbreaking GraphQL framework that simplifies API development while providing intelligent caching based on usage patterns. The engine can automatically infer schema changes from your database and includes advanced security features. This project reduces boilerplate code by 70% compared to traditional REST API implementations.",
  },
  {
    id: 3,
    title: "Nebula DevOps Platform",
    description:
      "Complete infrastructure as code toolkit with visualization and metrics",
    image: "/project3.jpg",
    tags: ["Infrastructure", "Kubernetes", "Terraform"],
    stars: 1865,
    forks: 453,
    contributors: 43,
    lastUpdated: "1 week ago",
    content:
      "A comprehensive toolkit for automating DevOps workflows. Includes custom GitHub Actions, Docker configurations, and visualization tools that streamline deployment processes and ensure consistent builds across environments. The platform offers real-time metrics and predictive scaling recommendations.",
  },
  {
    id: 4,
    title: "Prism Data Visualization",
    description:
      "GPU-accelerated data visualization library with 3D and VR support",
    image: "/project4.jpg",
    tags: ["WebGL", "Data Viz", "THREE.js"],
    stars: 2134,
    forks: 328,
    contributors: 37,
    lastUpdated: "3 days ago",
    content:
      "This library extends traditional data visualization with WebGL acceleration to handle millions of data points in real-time. It includes responsive charts, 3D visualizations, and support for VR data exploration. All visualizations are accessible and degrade gracefully in environments without GPU support.",
  },
];

const categoryColors = {
  "Computer Vision": "from-purple-600 to-blue-500",
  "Natural Language Processing": "from-emerald-600 to-teal-500",
  "NLP & Computer Vision": "from-orange-600 to-amber-500",
  "Speech Processing": "from-red-600 to-pink-500",
};

const difficultyBadges = {
  Beginner: "bg-green-900 text-green-100",
  Intermediate: "bg-yellow-900 text-yellow-100",
  Advanced: "bg-orange-900 text-orange-100",
  Expert: "bg-red-900 text-red-100",
};
export { workflows, categoryColors, difficultyBadges };
