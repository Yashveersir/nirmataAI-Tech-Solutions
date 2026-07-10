/**
 * AI solutions promoted on the marketing site. Each entry represents a
 * distinct capability or productised offering within our AI practice.
 */
export interface AISolution {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export const aiSolutions: AISolution[] = [
  {
    id: "gen-ai-agents",
    slug: "generative-ai-agents",
    title: "Autonomous Generative Agents",
    shortDescription: "Deploy intelligent LLM-powered agents to automate complex workflows and customer interactions.",
    description: "We build custom generative AI agents that understand context, access your internal data securely via RAG (Retrieval-Augmented Generation), and take autonomous actions. Perfect for customer support, document analysis, and internal knowledge bases.",
    capabilities: ["RAG Architecture", "LangChain & LlamaIndex", "Custom System Prompts", "Secure Data Silos"],
    icon: "Brain",
  },
  {
    id: "ai-chatbot",
    slug: "ai-chatbot",
    title: "AI Chatbot Development",
    shortDescription: "Custom AI-powered chatbots for your website, app, or messaging platforms — available 24/7.",
    description: "Give your customers instant, intelligent answers at any hour. We build AI chatbots trained on your business data that can handle support queries, qualify leads, take bookings, and escalate to human agents when needed — all integrated seamlessly into your existing platforms.",
    capabilities: ["Natural Language Understanding", "Custom Training on Your Data", "Multi-Platform Integration", "Seamless Human Handoff"],
    icon: "Bot",
  },
  {
    id: "whatsapp-automation",
    slug: "whatsapp-automation",
    title: "WhatsApp Business Automation",
    shortDescription: "Automate customer communication on India's most-used messaging platform with AI-powered WhatsApp bots.",
    description: "Reach your customers where they already are — WhatsApp. We build WhatsApp Business API integrations that automate order confirmations, appointment reminders, customer support replies, and lead nurturing campaigns. Powered by AI for smart, contextual conversations.",
    capabilities: ["WhatsApp Business API", "Automated Order & Booking Updates", "AI-Powered Reply Flows", "Broadcast Campaigns"],
    icon: "MessageSquare",
  },
  {
    id: "predictive-analytics",
    slug: "predictive-analytics",
    title: "Predictive Analytics & Forecasting",
    shortDescription: "Turn your historical data into actionable foresight using advanced machine learning models.",
    description: "Our machine learning pipelines analyze your historical data to identify patterns and predict future trends. Optimize inventory, forecast sales, and predict customer churn with high-accuracy models tailored to your industry.",
    capabilities: ["Time-Series Forecasting", "Customer Churn Prediction", "Inventory Optimization", "Anomaly Detection"],
    icon: "Network",
  },
  {
    id: "computer-vision",
    slug: "computer-vision",
    title: "Computer Vision Systems",
    shortDescription: "Extract insights from images and video streams in real-time.",
    description: "Implement cutting-edge computer vision for quality control, automated auditing, or security. We build systems capable of object detection, facial recognition, and semantic segmentation, deployed on edge devices or in the cloud.",
    capabilities: ["Object Detection", "Image Classification", "OCR Integration", "Edge Deployment"],
    icon: "Eye",
  },
];
