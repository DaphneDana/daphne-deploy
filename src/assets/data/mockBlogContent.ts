// src/assets/data/mockBlogContent.ts
export const mockBlogContent: Record<string, string> = {
  'team-culture-1': `
    <h2>The Foundation of Our Research Culture</h2>
    <p>At the heart of our AI research lab lies a culture built on curiosity, collaboration, and relentless pursuit of innovation. Our team culture isn't just about the work we do—it's about how we approach problems, support each other, and push the boundaries of what's possible in artificial intelligence.</p>
    
    <h3>Fostering Innovation Through Collaboration</h3>
    <p>Innovation doesn't happen in isolation. Our open-door policy ensures that ideas flow freely across all levels of our organization. Whether you're a senior researcher or a recent graduate, your insights are valued and can shape the direction of our projects.</p>
    
    <blockquote style="border-left: 4px solid #4096ff; padding-left: 20px; margin: 20px 0; font-style: italic; color: #94a3b8;">
      "The best breakthroughs come when diverse minds collaborate on complex problems. We've built our culture around this principle." - Dr. Sarah Chen, CTO
    </blockquote>
    
    <h3>Research Excellence Standards</h3>
    <p>Our commitment to excellence is reflected in our rigorous peer review process, where every research output undergoes multiple rounds of evaluation. This ensures that our work meets the highest standards before reaching the broader scientific community.</p>
    
    <ul>
      <li><strong>Peer Review Process:</strong> Multi-stage evaluation with cross-functional teams</li>
      <li><strong>Open Science:</strong> Commitment to reproducible research and open datasets</li>
      <li><strong>Ethical AI:</strong> Every project evaluated through our ethics review board</li>
      <li><strong>Continuous Learning:</strong> Regular seminars and knowledge sharing sessions</li>
    </ul>
    
    <h3>Building the Future Together</h3>
    <p>Our team culture extends beyond research. We believe in mentoring the next generation of AI researchers and maintaining strong connections with the academic community. Through internship programs, visiting researcher positions, and conference presentations, we ensure our culture of innovation spreads throughout the field.</p>
    
    <p>Looking ahead, we're excited to continue building a culture that not only produces groundbreaking research but also serves as a model for ethical, collaborative AI development.</p>
  `,
  
  'neural-networks-deep-dive': `
    <h2>Introduction to Neural Architecture Search</h2>
    <p>Neural Architecture Search (NAS) represents one of the most significant advances in automated machine learning. By automating the design of neural network architectures, NAS has the potential to discover novel structures that surpass human-designed networks.</p>
    
    <h3>The Evolution of Architecture Design</h3>
    <p>Traditionally, neural network architectures were hand-crafted by experts through trial and error. This process was time-consuming and required deep domain knowledge. NAS changes this paradigm by using algorithms to search through the space of possible architectures automatically.</p>
    
    <pre style="background: rgba(51, 65, 85, 0.8); padding: 20px; border-radius: 8px; overflow-x: auto; color: #e2e8f0;">
<code># Example: Simple NAS search space definition
search_space = {
    'conv_layers': [1, 2, 3, 4],
    'filters': [32, 64, 128, 256],
    'kernel_sizes': [3, 5, 7],
    'activation': ['relu', 'swish', 'gelu']
}
    </code></pre>
    
    <h3>Current Approaches and Techniques</h3>
    <p>Modern NAS techniques can be broadly categorized into three main approaches:</p>
    
    <h4>1. Reinforcement Learning-Based NAS</h4>
    <p>Uses RL agents to generate architectures and receive rewards based on validation accuracy. This approach has shown remarkable success in discovering architectures like EfficientNet.</p>
    
    <h4>2. Evolutionary Algorithms</h4>
    <p>Applies principles of natural selection to evolve neural architectures over generations. This method is particularly effective for exploring diverse architectural patterns.</p>
    
    <h4>3. Differentiable Architecture Search</h4>
    <p>Makes the search process differentiable, allowing gradient-based optimization. This approach significantly reduces computational costs compared to traditional NAS methods.</p>
    
    <h3>Challenges and Future Directions</h3>
    <p>Despite significant progress, several challenges remain in NAS research:</p>
    
    <ul>
      <li><strong>Computational Cost:</strong> Traditional NAS requires enormous computational resources</li>
      <li><strong>Search Space Design:</strong> Defining appropriate search spaces remains an art</li>
      <li><strong>Transfer Learning:</strong> Architectures found for one task may not generalize well</li>
      <li><strong>Hardware Awareness:</strong> Architectures must be optimized for specific hardware constraints</li>
    </ul>
    
    <h3>Real-World Applications</h3>
    <p>Our research has led to practical applications in computer vision, natural language processing, and edge computing. We've successfully deployed NAS-discovered architectures in production systems, achieving both improved accuracy and reduced latency.</p>
    
    <p>The future of NAS lies in making these techniques more accessible, efficient, and applicable to a broader range of domains. We're excited to continue pushing the boundaries of what's possible with automated architecture design.</p>
  `,
  
  'office-expansion-update': `
    <h2>Welcome to Our New Silicon Valley Lab</h2>
    <p>We're thrilled to announce the opening of our state-of-the-art research facility in the heart of Silicon Valley. This expansion marks a significant milestone in our company's growth and our commitment to advancing AI research.</p>
    
    <h3>Facility Highlights</h3>
    <p>Our new 50,000 square foot facility is designed with collaboration and innovation in mind. Every aspect of the space has been carefully planned to foster creativity and support our team's research endeavors.</p>
    
    <h4>Research Labs and Equipment</h4>
    <ul>
      <li><strong>High-Performance Computing Center:</strong> 500+ GPU cluster for large-scale model training</li>
      <li><strong>Robotics Lab:</strong> Dedicated space for embodied AI research</li>
      <li><strong>Collaboration Spaces:</strong> Open areas designed for cross-team interaction</li>
      <li><strong>Quiet Zones:</strong> Focused work areas for deep thinking and writing</li>
    </ul>
    
    <h3>Sustainable Design</h3>
    <p>Environmental responsibility is core to our values. The new facility features:</p>
    
    <ul>
      <li>LEED Platinum certification</li>
      <li>100% renewable energy sources</li>
      <li>Advanced cooling systems for our compute infrastructure</li>
      <li>Green roof and urban garden spaces</li>
    </ul>
    
    <h3>Meet Our Growing Team</h3>
    <p>With this expansion, we're welcoming 150 new team members across various disciplines. Our hiring focus includes:</p>
    
    <blockquote style="border-left: 4px solid #52c4ff; padding-left: 20px; margin: 20px 0; font-style: italic; color: #94a3b8;">
      "This new facility represents our commitment to building the future of AI in an environment that celebrates both human creativity and technological innovation." - Emily Watson, Head of Operations
    </blockquote>
    
    <h3>Community Engagement</h3>
    <p>We believe in giving back to the local community. Our Silicon Valley lab will host:</p>
    
    <ul>
      <li>Monthly public lectures on AI research</li>
      <li>Student mentorship programs with local universities</li>
      <li>Open house events for the broader tech community</li>
      <li>Collaborative research projects with academic institutions</li>
    </ul>
    
    <p>We're excited about the opportunities this new space will create for our team and the broader AI research community. Stay tuned for upcoming events and opportunities to visit our new facility!</p>
  `,
  
  'explainable-ai-ethics': `
    <h2>The Imperative for Transparent AI</h2>
    <p>As artificial intelligence systems become increasingly sophisticated and ubiquitous, the need for transparency and explainability has never been more critical. Our approach to building ethical AI systems centers on the principle that users should understand how and why AI systems make decisions.</p>
    
    <h3>Understanding Explainable AI</h3>
    <p>Explainable AI (XAI) refers to methods and techniques that make the outputs of AI systems comprehensible to humans. This involves creating AI systems that can provide clear, interpretable explanations for their decisions and recommendations.</p>
    
    <h4>Key Components of Our XAI Framework:</h4>
    <ul>
      <li><strong>Interpretability:</strong> Making model behavior understandable to humans</li>
      <li><strong>Transparency:</strong> Open communication about system capabilities and limitations</li>
      <li><strong>Accountability:</strong> Clear responsibility chains for AI decisions</li>
      <li><strong>Fairness:</strong> Ensuring equitable treatment across all user groups</li>
    </ul>
    
    <h3>Technical Approaches to Explainability</h3>
    <p>We employ multiple techniques to achieve explainability in our AI systems:</p>
    
    <h4>Model-Agnostic Methods</h4>
    <p>These techniques work with any machine learning model, providing explanations regardless of the underlying architecture:</p>
    
    <pre style="background: rgba(51, 65, 85, 0.8); padding: 20px; border-radius: 8px; overflow-x: auto; color: #e2e8f0;">
<code># Example: LIME explanation for image classification
import lime
from lime import lime_image

explainer = lime_image.LimeImageExplainer()
explanation = explainer.explain_instance(
    image, model.predict, top_labels=5, num_samples=1000
)
    </code></pre>
    
    <h4>Intrinsically Interpretable Models</h4>
    <p>Some models are designed to be interpretable by nature, such as decision trees, linear models, and rule-based systems. We carefully consider when to use these approaches versus more complex but potentially more accurate models.</p>
    
    <h3>Ethical Considerations in AI Development</h3>
    <p>Our ethics framework guides every aspect of our AI development process:</p>
    
    <blockquote style="border-left: 4px solid #10b981; padding-left: 20px; margin: 20px 0; font-style: italic; color: #94a3b8;">
      "Ethics in AI isn't just about avoiding harm—it's about actively designing systems that promote human flourishing and social good." - Dr. Aisha Patel, Ethics in AI Lead
    </blockquote>
    
    <h4>Bias Detection and Mitigation</h4>
    <p>We implement comprehensive bias testing throughout our development pipeline:</p>
    
    <ul>
      <li>Regular audits of training data for representation gaps</li>
      <li>Fairness metrics evaluation across demographic groups</li>
      <li>Adversarial testing to identify potential discrimination</li>
      <li>Continuous monitoring of deployed systems</li>
    </ul>
    
    <h3>Real-World Impact</h3>
    <p>Our commitment to explainable AI has led to tangible improvements in user trust and system adoption. In healthcare applications, our explainable diagnostic aids help doctors understand AI recommendations, leading to better patient outcomes. In financial services, our transparent credit scoring models have improved regulatory compliance and customer satisfaction.</p>
    
    <h3>The Road Ahead</h3>
    <p>As AI systems become more complex, the challenge of maintaining explainability grows. We're actively researching new techniques that can provide meaningful explanations for large language models, multimodal systems, and other advanced AI architectures.</p>
    
    <p>Our goal is to ensure that as AI becomes more powerful, it also becomes more understandable and trustworthy. This isn't just a technical challenge—it's a fundamental requirement for the responsible development of AI systems that serve humanity's best interests.</p>
  `,
  
  default: `
    <h2>Welcome to Our Blog</h2>
    <p>Thank you for reading our latest insights and updates from the world of AI research. Our team is passionate about sharing knowledge and fostering innovation in the field of artificial intelligence.</p>
    
    <h3>Our Mission</h3>
    <p>We believe that transparency and open communication are essential for advancing AI research. Through our blog, we share:</p>
    
    <ul>
      <li>Technical insights from our research projects</li>
      <li>Behind-the-scenes looks at our team and culture</li>
      <li>Industry analysis and future predictions</li>
      <li>Ethical considerations in AI development</li>
    </ul>
    
    <p>Stay tuned for more updates and don't hesitate to reach out with questions or feedback. We're always excited to engage with the broader AI community!</p>
  `
};