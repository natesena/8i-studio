const projects = [
  {
    id: 1,
    title: "Quantum Design System",
    description:
      "A comprehensive design system with 200+ components and theme engine",
    image: "/project1.jpg",
    tags: ["React", "TypeScript", "Design System"],
    stars: 3245,
    forks: 587,
    contributors: 78,
    lastUpdated: "2 days ago",
    content:
      "This open-source design system provides a comprehensive set of accessible UI components built with React and TypeScript. Each component follows WCAG guidelines and includes extensive documentation. The project aims to make accessible development easier for the community with features like automatic dark mode, RTL support, and themeable design tokens.",
    longDescription: `
        ## Overview
        
        The Quantum Design System is a comprehensive collection of reusable UI components built with React and TypeScript. It's designed to streamline development while ensuring accessibility and consistent user experiences.
        
        ## Key Features
        
        - **200+ Accessible Components**: Every component follows WCAG 2.1 AA standards
        - **Theme Engine**: Dynamic theming with support for custom brand colors
        - **Dark Mode**: Automatic and manual dark mode switching
        - **RTL Support**: Full bidirectional text support for global applications
        - **Design Tokens**: Customizable design system fundamentals
        
        ## Implementation Details
        
        The system uses a compound component pattern to maximize flexibility while maintaining semantic structure. Components communicate via React Context, allowing for deep customization without prop drilling.
        
        ## Usage Statistics
        
        Currently used by 120+ organizations including 3 Fortune 500 companies. The system powers over 300 production applications serving millions of users daily.
      `,
    screenshots: ["/quantum1.jpg", "/quantum2.jpg", "/quantum3.jpg"],
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
    longDescription: `
        ## Overview
        
        Neural GraphQL Engine reimagines API development by combining GraphQL with machine learning to create an intelligent, adaptive framework that evolves with your application.
        
        ## Key Features
        
        - **Predictive Caching**: ML-powered cache that anticipates user queries
        - **Schema Inference**: Automatic schema generation from database structure
        - **Security Analysis**: Identifies potential security vulnerabilities in queries
        - **Query Optimization**: Rewrites queries for optimal performance
        
        ## Implementation Details
        
        Built on Node.js with a pluggable architecture supporting PostgreSQL, MySQL, MongoDB, and custom data sources. The predictive engine utilizes TensorFlow.js to analyze query patterns and optimize performance.
        
        ## Performance Metrics
        
        - 70% reduction in boilerplate compared to REST
        - 45% faster query resolution with predictive caching
        - 90% accuracy in predicting user query patterns after 1 week of operation
      `,
    screenshots: ["/neural1.jpg", "/neural2.jpg", "/neural3.jpg"],
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
    longDescription: `
        ## Overview
        
        Nebula DevOps Platform unifies infrastructure management, deployment automation, and operational monitoring into a single cohesive system designed for modern cloud-native applications.
        
        ## Key Features
        
        - **Infrastructure as Code**: Templates for AWS, GCP, and Azure
        - **Kubernetes Integration**: Custom controllers and operators
        - **CI/CD Automation**: GitHub Actions and GitLab CI templates
        - **Observability**: Real-time metrics and alerting
        
        ## Implementation Details
        
        Built with Go and TypeScript, the platform leverages Terraform, Kubernetes operators, and custom controllers to orchestrate infrastructure. The visualization layer uses WebGL for rendering complex infrastructure graphs.
        
        ## Use Cases
        
        Currently powering the infrastructure of several tech startups and mid-sized companies, helping them reduce deployment time by 85% and infrastructure costs by 30%.
      `,
    screenshots: ["/nebula1.jpg", "/nebula2.jpg", "/nebula3.jpg"],
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
    longDescription: `
        ## Overview
        
        Prism pushes the boundaries of browser-based data visualization by leveraging WebGL and modern GPU capabilities to render complex datasets with millions of points in real-time.
        
        ## Key Features
        
        - **GPU Acceleration**: Render millions of data points with smooth interactions
        - **3D Visualizations**: Go beyond traditional 2D charts
        - **VR Integration**: Explore data in immersive virtual reality
        - **Accessibility**: WCAG-compliant with fallbacks for non-GPU environments
        
        ## Technical Architecture
        
        Built on THREE.js with custom WebGL shaders optimized for data visualization workloads. The architecture separates data management, visual mapping, and rendering to create a flexible yet powerful system.
        
        ## Performance Benchmarks
        
        - Renders up to 10 million data points at 60fps on mid-range hardware
        - VR mode runs at 90fps with up to 2 million points on standard VR-ready systems
        - Gracefully degrades to render up to 100k points without WebGL
      `,
    screenshots: ["/prism1.jpg", "/prism2.jpg", "/prism3.jpg"],
  },
];

export { projects };
