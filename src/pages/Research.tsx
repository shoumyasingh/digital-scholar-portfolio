
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, FileCode, Users, BookOpen, Calendar, MapPin, ArrowUpRight, Download, ExternalLink } from "lucide-react";

export default function Research() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('interests');
  
  useEffect(() => {
    setIsVisible(true);
    
    // Handle URL hash for direct links
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      if (id === 'publications') setActiveTab('publications');
      if (id === 'conferences') setActiveTab('conferences');
      if (id === 'research-publications') setActiveTab('research-publications');
      if (id === 'articles') setActiveTab('articles');
      if (id === 'book-chapters') setActiveTab('book-chapters');
      if (id === 'preprints') setActiveTab('preprints');
      
      // Scroll to element with delay for animation
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, []);

  const publications = [
    {
      title: "Analyzing the Impact of Machine Learning Algorithms on Risk Management and Fraud Detection in Financial Institution",
      authors: "Kumar, D., & Singh, S.",
      journal: "Research Publication",
      year: 2024,
      link: "https://www.researchgate.net/publication/380365979_Analyzing_the_Impact_of_Machine_Learning_Algorithms_on_Risk_Management_and_Fraud_Detection_in_Financial_Institution",
      pdf: "https://www.researchgate.net/publication/380365979_Analyzing_the_Impact_of_Machine_Learning_Algorithms_on_Risk_Management_and_Fraud_Detection_in_Financial_Institution"
    },
    {
      title: "An Efficient DDoS Attack Detection using Attention based Hybrid Model in Blockchain based SDN-IoT",
      authors: "Pawar, P. P., Kumar, D., Ananthan, B., & Selvi, A. S.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/381943945_An_Efficient_DDoS_Attack_Detection_using_Attention_based_Hybrid_Model_in_Blockchain_based_SDN-IoT",
      pdf: "https://www.researchgate.net/publication/381943945_An_Efficient_DDoS_Attack_Detection_using_Attention_based_Hybrid_Model_in_Blockchain_based_SDN-IoT"
    },
    {
      title: "ChOs_LSTM: Chebyshev Osprey Optimization-Based Model for Detecting Attacks",
      authors: "Kumar, D., Pawar, P. P., Ananthan, B., & Murugan, M. S.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/381952076_ChOs_LSTM_Chebyshev_Osprey_Optimization-Based_Model_for_Detecting_Attacks",
      pdf: "https://www.researchgate.net/publication/381952076_ChOs_LSTM_Chebyshev_Osprey_Optimization-Based_Model_for_Detecting_Attacks"
    },
    {
      title: "Banking Fraud Detection Using Optimized Enhanced Stacked Autoencoder Approach",
      authors: "Kumar, D., Perumalsamy, A., Murugachandravel, J., & Pawar, P. P.",
      journal: "Article",
      year: 2025,
      link: "https://www.researchgate.net/publication/392832274_Banking_Fraud_Detection_Using_Optimized_Enhanced_Stacked_Autoencoder_Approach",
      pdf: "https://www.researchgate.net/publication/392832274_Banking_Fraud_Detection_Using_Optimized_Enhanced_Stacked_Autoencoder_Approach"
    },
    {
      title: "A Blockchain-Based IoT Framework for Smart Homes: Enhancing Energy Prediction and Security with LSTM and Equilibrium Optimization",
      authors: "Pawar, P., Kumar, D., Addula, S. R., & Meesala, M. K.",
      journal: "Conference Paper",
      year: 2025,
      link: "https://www.researchgate.net/publication/393374655_A_Blockchain-Based_IoT_Framework_for_Smart_Homes_Enhancing_Energy_Prediction_and_Security_with_LSTM_and_Equilibrium_Optimization",
      pdf: "https://www.researchgate.net/publication/393374655_A_Blockchain-Based_IoT_Framework_for_Smart_Homes_Enhancing_Energy_Prediction_and_Security_with_LSTM_and_Equilibrium_Optimization"
    },
    {
      title: "Enhancing manufacturing efficiency: leveraging CRM data with Lean-based DL approach for early failure detection",
      authors: "Kalluri, V. S., Malineni, S. C., Seenivasan, M., Kumar, D., & Ananthan, B.",
      journal: "Article",
      year: 2025,
      link: "https://www.researchgate.net/publication/391399727_Enhancing_manufacturing_efficiency_leveraging_CRM_data_with_Lean-based_DL_approach_for_early_failure_detection",
      pdf: "https://www.researchgate.net/publication/391399727_Enhancing_manufacturing_efficiency_leveraging_CRM_data_with_Lean-based_DL_approach_for_early_failure_detection"
    },
    {
      title: "Hierarchical Blockchain Framework for Node Authentication in IoT Networks: A Comprehensive Analysis",
      authors: "Kumar, D., Yadulla, A. R., Bhuvanesh, A., & Keerthanadevi, R.",
      journal: "Conference Paper",
      year: 2025,
      link: "https://www.researchgate.net/publication/394006431_Hierarchical_Blockchain_Framework_for_Node_Authentication_in_IoT_Networks_A_Comprehensive_Analysis",
      pdf: "https://www.researchgate.net/publication/394006431_Hierarchical_Blockchain_Framework_for_Node_Authentication_in_IoT_Networks_A_Comprehensive_Analysis"
    },
    {
      title: "Blockchain‑enabled cybersecurity for IoT using elliptic curve cryptography and black winged kite model",
      authors: "Pawar, P. P., Kumar, D., & Bhuvanesh, A.",
      journal: "Article",
      year: 2025,
      link: "https://www.researchgate.net/publication/391807615_Blockchain-enabled_cybersecurity_for_IoT_using_elliptic_curve_cryptography_and_black_winged_kite_model",
      pdf: "https://www.researchgate.net/publication/391807615_Blockchain-enabled_cybersecurity_for_IoT_using_elliptic_curve_cryptography_and_black_winged_kite_model"
    },
    {
      title: "A walrus optimization-enhanced long short-term memory model for credit fraud detection in banking",
      authors: "Pillai, S. V. S., Nadella, G. S., Meduri, K., & Kumar, D.",
      journal: "Article",
      year: 2025,
      link: "https://www.researchgate.net/publication/391793602_A_walrus_optimization-enhanced_long_short-term_memory_model_for_credit_fraud_detection_in_banking",
      pdf: "https://www.researchgate.net/publication/391793602_A_walrus_optimization-enhanced_long_short-term_memory_model_for_credit_fraud_detection_in_banking"
    },
    {
      title: "Forecasting the Unseen: Enhancing Tsunami Occurrence Predictions with Machine-Learning-Driven Analytics",
      authors: "Satish, S., Gonaygunta, H., Yadulla, A. R., Kumar, D., & Sajja, G. S.",
      journal: "Article",
      year: 2025,
      link: "https://www.researchgate.net/publication/391320298_Forecasting_the_Unseen_Enhancing_Tsunami_Occurrence_Predictions_with_Machine-Learning-Driven_Analytics",
      pdf: "https://www.researchgate.net/publication/391320298_Forecasting_the_Unseen_Enhancing_Tsunami_Occurrence_Predictions_with_Machine-Learning-Driven_Analytics"
    },
    {
      title: "Role of Emerging Technologies With Natural Language Processing for the Next Decade",
      authors: "Kumari, S., Tyagi, A., Kumar, D., & Sharma, A. K.",
      journal: "Book Chapter",
      year: 2025,
      link: "https://www.researchgate.net/publication/390597337_Role_of_Emerging_Technologies_With_Natural_Language_Processing_for_the_Next_Decade",
      pdf: "https://www.researchgate.net/publication/390597337_Role_of_Emerging_Technologies_With_Natural_Language_Processing_for_the_Next_Decade"
    },
    {
      title: "Natural Language Processing (NLP)-Based Intelligence for Pattern Mining Using Artificial Intelligence, Robotics, and Cloud Computing",
      authors: "Tyagi, A., Balamurugan, G., Kumar, D., & Kumari, S.",
      journal: "Book Chapter",
      year: 2025,
      link: "https://www.researchgate.net/publication/390597437_Natural_Language_Processing_NLP-Based_Intelligence_for_Pattern_Mining_Using_Artificial_Intelligence_Robotics_and_Cloud_Computing",
      pdf: "https://www.researchgate.net/publication/390597437_Natural_Language_Processing_NLP-Based_Intelligence_for_Pattern_Mining_Using_Artificial_Intelligence_Robotics_and_Cloud_Computing"
    },
    {
      title: "Enhanced Blockchain-Based Big Data Authentication for Distributed Environments: An Analytical Study",
      authors: "Pawar, P., Yadulla, A. R., Bhuvanesh, A., Kumar, D., & Keerthanadevi, R.",
      journal: "Conference Paper",
      year: 2025,
      link: "https://www.researchgate.net/publication/391611027_Enhanced_Blockchain-Based_Big_Data_Authentication_for_Distributed_Environments_An_Analytical_Study",
      pdf: "https://www.researchgate.net/publication/391611027_Enhanced_Blockchain-Based_Big_Data_Authentication_for_Distributed_Environments_An_Analytical_Study"
    },
    {
      title: "Exploring Blockchain-Enabled Secure Storage and Trusted Data Sharing Mechanisms in IoT Systems",
      authors: "Pawar, P., Kasula, V. K., Bhuvanesh, A., Kumar, D., & Keerthanadevi, R.",
      journal: "Conference Paper",
      year: 2025,
      link: "https://www.researchgate.net/publication/391616831_Exploring_Blockchain-Enabled_Secure_Storage_and_Trusted_Data_Sharing_Mechanisms_in_IoT_Systems",
      pdf: "https://www.researchgate.net/publication/391616831_Exploring_Blockchain-Enabled_Secure_Storage_and_Trusted_Data_Sharing_Mechanisms_in_IoT_Systems"
    },
    {
      title: "Smart sensors for Hospital 4.0/5.0: an introduction",
      authors: "Kumar, D., Hemamalini, V., Tyagi, A., & Singh, R.",
      journal: "Book Chapter",
      year: 2025,
      link: "https://www.researchgate.net/publication/390413439_Smart_sensors_for_Hospital_4050_an_introduction",
      pdf: "https://www.researchgate.net/publication/390413439_Smart_sensors_for_Hospital_4050_an_introduction"
    },
    {
      title: "Dragonfly-Optimized K-Means Clustering via Wireless Sensor Network for Energy Consumption",
      authors: "Appathurai, A., Rajamani, K., Kumar, D., & Pran, S. G.",
      journal: "Book Chapter",
      year: 2025,
      link: "https://www.researchgate.net/publication/395083933_Dragonfly-Optimized_K-Means_Clustering_via_Wireless_Sensor_Network_for_Energy_Consumption",
      pdf: "https://www.researchgate.net/publication/395083933_Dragonfly-Optimized_K-Means_Clustering_via_Wireless_Sensor_Network_for_Energy_Consumption"
    },
    {
      title: "Security and Privacy in AI: IoT-Enabled Banking and Finance Services",
      authors: "Ramu, S., Addula, S. R., Kumar, D., & Tyagi, A.",
      journal: "Book Chapter",
      year: 2025,
      link: "https://www.researchgate.net/publication/394416140_Security_and_Privacy_in_AI_IoT-Enabled_Banking_and_Finance_Services",
      pdf: "https://www.researchgate.net/publication/394416140_Security_and_Privacy_in_AI_IoT-Enabled_Banking_and_Finance_Services"
    },
    {
      title: "Dynamic Load Balancing in Cloud Computing using Hybrid Kookaburra-Pelican Optimization Algorithms",
      authors: "Addula, S. R., Perugu, P. P., Kumar, M. K., Kumar, D., & Sreetha, G.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/394760231_Dynamic_Load_Balancing_in_Cloud_Computing_using_Hybrid_Kookaburra-Pelican_Optimization_Algorithms",
      pdf: "https://www.researchgate.net/publication/394760231_Dynamic_Load_Balancing_in_Cloud_Computing_using_Hybrid_Kookaburra-Pelican_Optimization_Algorithms"
    },
    {
      title: "Enhanced Stock Market Trend Prediction on the Indonesia Stock Exchange Using Improved Bacterial Foraging Optimization and Elitist Whale Optimization Algorithms",
      authors: "Kumar, D., Pawar, P. P., Meesala, M. K., & Shwetha, K. S.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/388739428_Enhanced_Stock_Market_Trend_Prediction_on_the_Indonesia_Stock_Exchange_Using_Improved_Bacterial_Foraging_Optimization_and_Elitist_Whale_Optimization_Algorithms",
      pdf: "https://www.researchgate.net/publication/388739428_Enhanced_Stock_Market_Trend_Prediction_on_the_Indonesia_Stock_Exchange_Using_Improved_Bacterial_Foraging_Optimization_and_Elitist_Whale_Optimization_Algorithms"
    },
    {
      title: "A Patient-Centric Blockchain Framework for Transparent and Secure Medical Data Sharing Using Modified AES",
      authors: "Pawar, P. P., Kumar, D., Meesala, M. K., & Shwetha, K. S.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/388739854_A_Patient-Centric_Blockchain_Framework_for_Transparent_and_Secure_Medical_Data_Sharing_Using_Modified_AES",
      pdf: "https://www.researchgate.net/publication/388739854_A_Patient-Centric_Blockchain_Framework_for_Transparent_and_Secure_Medical_Data_Sharing_Using_Modified_AES"
    },
    {
      title: "Securing Digital Governance: A Deep Learning and Blockchain Framework for Malware Detection in IoT Networks",
      authors: "Pawar, P. P., Kumar, D., Meesala, M. K., & Shwetha, K. S.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/388740837_Securing_Digital_Governance_A_Deep_Learning_and_Blockchain_Framework_for_Malware_Detection_in_IoT_Networks",
      pdf: "https://www.researchgate.net/publication/388740837_Securing_Digital_Governance_A_Deep_Learning_and_Blockchain_Framework_for_Malware_Detection_in_IoT_Networks"
    },
    {
      title: "Trustworthy IoT Infrastructures: Privacy-Preserving Federated Learning with Efficient Secure Aggregation for Cybersecurity",
      authors: "Kumar, D., Pawar, P. P., Meesala, M. K., & Shwetha, K. S.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/388740840_Trustworthy_IoT_Infrastructures_Privacy-Preserving_Federated_Learning_with_Efficient_Secure_Aggregation_for_Cybersecurity",
      pdf: "https://www.researchgate.net/publication/388740840_Trustworthy_IoT_Infrastructures_Privacy-Preserving_Federated_Learning_with_Efficient_Secure_Aggregation_for_Cybersecurity"
    },
    {
      title: "Smart Agriculture in the Era of Big Data: IoT-Assisted Pest Forecasting and Resource Optimization for Sustainable Farming",
      authors: "Kumar, D., Pawar, P. P., Meesala, M. K., & Shwetha, K. S.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/388743397_Smart_Agriculture_in_the_Era_of_Big_Data_IoT-Assisted_Pest_Forecasting_and_Resource_Optimization_for_Sustainable_Farming",
      pdf: "https://www.researchgate.net/publication/388743397_Smart_Agriculture_in_the_Era_of_Big_Data_IoT-Assisted_Pest_Forecasting_and_Resource_Optimization_for_Sustainable_Farming"
    },
    {
      title: "AI-Driven Predictive Models for Earthquake Forecasting Using Big Data Analytics",
      authors: "Satish, S., Gonaygunta, H., Yadulla, A. R., Kumar, D., & Nadella, G. S.",
      journal: "Preprint",
      year: 2024,
      link: "https://www.researchgate.net/publication/384766039_AI-Driven_Predictive_Models_for_Earthquake_Forecasting_Using_Big_Data_Analytics",
      pdf: "https://www.researchgate.net/publication/384766039_AI-Driven_Predictive_Models_for_Earthquake_Forecasting_Using_Big_Data_Analytics"
    },
    {
      title: "Human-centered AI for personalized workload management: A multimodal approach to preventing employee burnout",
      authors: "Meduri, K., Nadella, G. S., Gonaygunta, H., Kumar, D., & Rehman, S. U.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/383764838_Human-centered_AI_for_personalized_workload_management_A_multimodal_approach_to_preventing_employee_burnout",
      pdf: "https://www.researchgate.net/publication/383764838_Human-centered_AI_for_personalized_workload_management_A_multimodal_approach_to_preventing_employee_burnout"
    },
    {
      title: "Enhanced affinity propagation clustering with a modified extreme learning machine for segmentation and classification of hyperspectral imaging",
      authors: "Daniel, V. A. A., Vijayalakshmi, K., Pawar, P. P., Kumar, D., & Christilda, A. J.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/383634681_Enhanced_affinity_propagation_clustering_with_a_modified_extreme_learning_machine_for_segmentation_and_classification_of_hyperspectral_imaging",
      pdf: "https://www.researchgate.net/publication/383634681_Enhanced_affinity_propagation_clustering_with_a_modified_extreme_learning_machine_for_segmentation_and_classification_of_hyperspectral_imaging"
    },
    {
      title: "Investigation on Digital Forensic Using Graph Based Neural Network With Blockchain Technology",
      authors: "Pawar, P. P., Kumar, D., Bhujang, R., & Deepika, K. S.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/384538103_Investigation_on_Digital_Forensic_Using_Graph_Based_Neural_Network_With_Blockchain_Technology",
      pdf: "https://www.researchgate.net/publication/384538103_Investigation_on_Digital_Forensic_Using_Graph_Based_Neural_Network_With_Blockchain_Technology"
    },
    {
      title: "SINN Based Federated Learning Model for Intrusion Detection with Blockchain Technology in Digital Forensic",
      authors: "Pawar, P. P., Kumar, D., Kumar, P., & Deepika, K. S.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/384543124_SINN_Based_Federated_Learning_Model_for_Intrusion_Detection_with_Blockchain_Technology_in_Digital_Forensic",
      pdf: "https://www.researchgate.net/publication/384543124_SINN_Based_Federated_Learning_Model_for_Intrusion_Detection_with_Blockchain_Technology_in_Digital_Forensic"
    },
    {
      title: "Optimizing Energy Efficiency in Edge-Computing Environments with Dynamic Resource Allocation",
      authors: "Maturi, M. H., Podicheti, S., & Kumar, D.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/381577573_Optimizing_Energy_Efficiency_in_Edge-Computing_Environments_with_Dynamic_Resource_Allocation",
      pdf: "https://www.researchgate.net/publication/381577573_Optimizing_Energy_Efficiency_in_Edge-Computing_Environments_with_Dynamic_Resource_Allocation"
    },
    {
      title: "PFCM based Segmentation and TFA based DCNN model for Skin Cancer Classification using Dermoscopic Images",
      authors: "Pawar, P. P., Kumar, D., Kumar, P., & Manoj, H. M.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/384548636_PFCM_based_Segmentation_and_TFA_based_DCNN_model_for_Skin_Cancer_Classification_using_Dermoscopic_Images",
      pdf: "https://www.researchgate.net/publication/384548636_PFCM_based_Segmentation_and_TFA_based_DCNN_model_for_Skin_Cancer_Classification_using_Dermoscopic_Images"
    },
    {
      title: "Innovative Horizons in Agricultural Technology with TSA Based StrawberrySqueezeNet Classification Model",
      authors: "Kumar, D., Pawar, P. P., Kumar, P., & Manoj, H. M.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/384548880_Innovative_Horizons_in_Agricultural_Technology_with_TSA_based_StrawberrySqueezeNet_Classification_Model",
      pdf: "https://www.researchgate.net/publication/384548880_Innovative_Horizons_in_Agricultural_Technology_with_TSA_based_StrawberrySqueezeNet_Classification_Model"
    },
    {
      title: "Data Fortress: Innovations in Big Data Analytics for Proactive Cybersecurity Defense and Asset Protection",
      authors: "Singh, S., & Kumar, D.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/381178737_Data_Fortress_Innovations_in_Big_Data_Analytics_for_Proactive_Cybersecurity_Defense_and_Asset_Protection",
      pdf: "https://www.researchgate.net/publication/381178737_Data_Fortress_Innovations_in_Big_Data_Analytics_for_Proactive_Cybersecurity_Defense_and_Asset_Protection"
    },
    {
      title: "Enhancing Cyber Security Using Quantum Computing and Artificial Intelligence: A Review",
      authors: "Singh, S., & Kumar, D.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/381519152_Enhancing_Cyber_Security_Using_Quantum_Computing_and_Artificial_Intelligence_A_Review",
      pdf: "https://www.researchgate.net/publication/381519152_Enhancing_Cyber_Security_Using_Quantum_Computing_and_Artificial_Intelligence_A_Review"
    },
    {
      title: "ADVANCEMENTS IN TRANSFORMER ARCHITECTURES FOR LARGE LANGUAGE MODEL: FROM BERT TO GPT-3 AND BEYOND",
      authors: "Kumar, D., & Singh, S.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/380530250_ADVANCEMENTS_IN_TRANSFORMER_ARCHITECTURES_FOR_LARGE_LANGUAGE_MODEL_FROM_BERT_TO_GPT-3_AND_BEYOND",
      pdf: "https://www.researchgate.net/publication/380530250_ADVANCEMENTS_IN_TRANSFORMER_ARCHITECTURES_FOR_LARGE_LANGUAGE_MODEL_FROM_BERT_TO_GPT-3_AND_BEYOND"
    },
    {
      title: "Study on Empowering Cyber Security by Using Adaptive Machine Learning Methods",
      authors: "Gonaygunta, H., Nadella, G. S., Pawar, P. P., & Kumar, D.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/380771681_Study_on_Empowering_Cyber_Security_by_Using_Adaptive_Machine_Learning_Methods",
      pdf: "https://www.researchgate.net/publication/380771681_Study_on_Empowering_Cyber_Security_by_Using_Adaptive_Machine_Learning_Methods"
    },
    {
      title: "Enhancing Cybersecurity: The Development of a Flexible Deep Learning Model for Enhanced Anomaly Detection",
      authors: "Gonaygunta, H., Nadella, G. S., Pawar, P. P., & Kumar, D.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/380772746_Enhancing_Cybersecurity_The_Development_of_a_Flexible_Deep_Learning_Model_for_Enhanced_Anomaly_Detection",
      pdf: "https://www.researchgate.net/publication/380772746_Enhancing_Cybersecurity_The_Development_of_a_Flexible_Deep_Learning_Model_for_Enhanced_Anomaly_Detection"
    },
    {
      title: "An Advanced Wasserstein-Enabled Generative Adversarial Network Enabled Attack Detection for Blockchain-Assisted Intelligent Transportation System",
      authors: "Pawar, P. P., Kumar, D., Ananthan, B., & Surya, R.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/381934336_An_Advanced_Wasserstein-Enabled_Generative_Adversarial_Network_Enabled_Attack_Detection_for_Blockchain-Assisted_Intelligent_Transportation_System",
      pdf: "https://www.researchgate.net/publication/381934336_An_Advanced_Wasserstein-Enabled_Generative_Adversarial_Network_Enabled_Attack_Detection_for_Blockchain-Assisted_Intelligent_Transportation_System"
    },
    {
      title: "Optimized Support Vector Machine Based Fused IoT Network Security Management",
      authors: "Kumar, D., Pawar, P. P., Ananthan, B., & Prabhakaran, T. V.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/381934981_Optimized_Support_Vector_Machine_Based_Fused_IoT_Network_Security_Management",
      pdf: "https://www.researchgate.net/publication/381934981_Optimized_Support_Vector_Machine_Based_Fused_IoT_Network_Security_Management"
    },
    {
      title: "Analyzing the Impact of Regulatory Policies on the Adoption of AI Technologies in Cybersecurity",
      authors: "Nadella, G. S., Gonaygunta, H., Pawar, P. P., & Kumar, D.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/380998804_Analyzing_the_Impact_of_Regulatory_Policies_on_the_Adoption_of_AI_Technologies_in_Cybersecurity",
      pdf: "https://www.researchgate.net/publication/380998804_Analyzing_the_Impact_of_Regulatory_Policies_on_the_Adoption_of_AI_Technologies_in_Cybersecurity"
    },
    {
      title: "Mayfly Optimization Algorithm with Bidirectional Long-Short Term Memory for Intrusion Detection System in Internet of Things",
      authors: "Pillai, S. V. S., Polimetla, K., Alsalami, Z., & Kumar, D.",
      journal: "Conference Paper",
      year: 2024,
      link: "https://www.researchgate.net/publication/381395179_Mayfly_Optimization_Algorithm_with_Bidirectional_Long-Short_Term_Memory_for_Intrusion_Detection_System_in_Internet_of_Things",
      pdf: "https://www.researchgate.net/publication/381395179_Mayfly_Optimization_Algorithm_with_Bidirectional_Long-Short_Term_Memory_for_Intrusion_Detection_System_in_Internet_of_Things"
    },
    {
      title: "Exploring the impact of AI-driven solutions on cybersecurity adoption in small and medium enterprises",
      authors: "Nadella, G. S., Gonaygunta, H., Kumar, D., & Pawar, P. P.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/380099020_Exploring_the_impact_of_AI-driven_solutions_on_cybersecurity_adoption_in_small_and_medium_enterprises",
      pdf: "https://www.researchgate.net/publication/380099020_Exploring_the_impact_of_AI-driven_solutions_on_cybersecurity_adoption_in_small_and_medium_enterprises"
    },
    {
      title: "Revolutionizing Healthcare: A review on exploring the impact of Telemedicine and Information Technology on Disease Prevention and Treatment",
      authors: "Kumar, D., Pawar, P. P., Gonaygunta, H., Nadella, G. S., & Singh, S.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/379909176_Revolutionizing_Healthcare_A_review_on_exploring_the_impact_of_Telemedicine_and_Information_Technology_on_Disease_Prevention_and_Treatment",
      pdf: "https://www.researchgate.net/publication/379909176_Revolutionizing_Healthcare_A_review_on_exploring_the_impact_of_Telemedicine_and_Information_Technology_on_Disease_Prevention_and_Treatment"
    },
    {
      title: "Machine learning's role in personalized medicine & treatment optimization",
      authors: "Kumar, D., Pawar, P. P., Gonaygunta, H., Nadella, G. S., & Singh, S.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/378550507_Machine_learning's_role_in_personalized_medicine_treatment_optimization",
      pdf: "https://www.researchgate.net/publication/378550507_Machine_learning's_role_in_personalized_medicine_treatment_optimization"
    },
    {
      title: "The Detection and Prevention of Cloud Computing Attacks Using Artificial Intelligence Technologies",
      authors: "Gonaygunta, H., Nadella, G. S., Meduri, K., & Kumar, D.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/378208392_The_Detection_and_Prevention_of_Cloud_Computing_Attacks_Using_Artificial_Intelligence_Technologies",
      pdf: "https://www.researchgate.net/publication/378208392_The_Detection_and_Prevention_of_Cloud_Computing_Attacks_Using_Artificial_Intelligence_Technologies"
    },
    {
      title: "Adaptive Intelligence: GPT-Powered Language Models for Dynamic Responses to Emerging Healthcare Challenges",
      authors: "Meduri, K., Gonaygunta, H., Nadella, G. S., & Kumar, D.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/377809358_Adaptive_Intelligence_GPT-Powered_Language_Models_for_Dynamic_Responses_to_Emerging_Healthcare_Challenges",
      pdf: "https://www.researchgate.net/publication/377809358_Adaptive_Intelligence_GPT-Powered_Language_Models_for_Dynamic_Responses_to_Emerging_Healthcare_Challenges"
    },
    {
      title: "Impact of Federated Learning on Industrial IoT - A Review",
      authors: "Singh, S., Kumar, D., Pawar, P., & Gonaygunta, H.",
      journal: "Article",
      year: 2024,
      link: "https://www.researchgate.net/publication/377487610_Impact_of_Federated_Learning_on_Industrial_IoT_-_A_Review",
      pdf: "https://www.researchgate.net/publication/377487610_Impact_of_Federated_Learning_on_Industrial_IoT_-_A_Review"
    },
    {
      title: "How can we make IoT Applications better with Federated Learning-A Review",
      authors: "Gonaygunta, H., Kumar, D., Maddini, S., & Rehman, S. F. U.",
      journal: "Article",
      year: 2023,
      link: "https://www.researchgate.net/publication/368661775_How_can_we_make_IoT_Applications_better_with_Federated_Learning-A_Review",
      pdf: "https://www.researchgate.net/publication/368661775_How_can_we_make_IoT_Applications_better_with_Federated_Learning-A_Review"
    },
    {
      title: "Factors relating to Adoption of IoT for Home",
      authors: "Kumar, D.",
      journal: "Thesis",
      year: 2022,
      link: "https://www.researchgate.net/publication/381547498_Factors_relating_to_Adoption_of_IoT_for_Home",
      pdf: "https://www.researchgate.net/publication/381547498_Factors_relating_to_Adoption_of_IoT_for_Home"
    }
  ];

  const conferences = [
    {
      title: "An Efficient DDoS Attack Detection using Attention based Hybrid Model in Blockchain based SDN-IoT",
      year: 2024,
      authors: "Pawar, P. P., Kumar, D., Ananthan, B., & Selvi, A. S.",
      link: "https://www.researchgate.net/publication/381943945_An_Efficient_DDoS_Attack_Detection_using_Attention_based_Hybrid_Model_in_Blockchain_based_SDN-IoT"
    },
    {
      title: "ChOs_LSTM: Chebyshev Osprey Optimization-Based Model for Detecting Attacks",
      year: 2024,
      authors: "Kumar, D., Pawar, P. P., Ananthan, B., & Murugan, M. S.",
      link: "https://www.researchgate.net/publication/381952076_ChOs_LSTM_Chebyshev_Osprey_Optimization-Based_Model_for_Detecting_Attacks"
    },
    {
      title: "A Blockchain-Based IoT Framework for Smart Homes: Enhancing Energy Prediction and Security with LSTM and Equilibrium Optimization",
      year: 2025,
      authors: "Pawar, P., Kumar, D., Addula, S. R., & Meesala, M. K.",
      link: "https://www.researchgate.net/publication/393374655_A_Blockchain-Based_IoT_Framework_for_Smart_Homes_Enhancing_Energy_Prediction_and_Security_with_LSTM_and_Equilibrium_Optimization"
    },
    {
      title: "Hierarchical Blockchain Framework for Node Authentication in IoT Networks: A Comprehensive Analysis",
      year: 2025,
      authors: "Kumar, D., Yadulla, A. R., Bhuvanesh, A., & Keerthanadevi, R.",
      link: "https://www.researchgate.net/publication/394006431_Hierarchical_Blockchain_Framework_for_Node_Authentication_in_IoT_Networks_A_Comprehensive_Analysis"
    },
    {
      title: "Enhanced Blockchain-Based Big Data Authentication for Distributed Environments: An Analytical Study",
      year: 2025,
      authors: "Pawar, P., Yadulla, A. R., Bhuvanesh, A., Kumar, D., & Keerthanadevi, R.",
      link: "https://www.researchgate.net/publication/391611027_Enhanced_Blockchain-Based_Big_Data_Authentication_for_Distributed_Environments_An_Analytical_Study"
    },
    {
      title: "Exploring Blockchain-Enabled Secure Storage and Trusted Data Sharing Mechanisms in IoT Systems",
      year: 2025,
      authors: "Pawar, P., Kasula, V. K., Bhuvanesh, A., Kumar, D., & Keerthanadevi, R.",
      link: "https://www.researchgate.net/publication/391616831_Exploring_Blockchain-Enabled_Secure_Storage_and_Trusted_Data_Sharing_Mechanisms_in_IoT_Systems"
    },
    {
      title: "Dynamic Load Balancing in Cloud Computing using Hybrid Kookaburra-Pelican Optimization Algorithms",
      year: 2024,
      authors: "Addula, S. R., Perugu, P. P., Kumar, M. K., Kumar, D., & Sreetha, G.",
      link: "https://www.researchgate.net/publication/394760231_Dynamic_Load_Balancing_in_Cloud_Computing_using_Hybrid_Kookaburra-Pelican_Optimization_Algorithms"
    },
    {
      title: "Enhanced Stock Market Trend Prediction on the Indonesia Stock Exchange Using Improved Bacterial Foraging Optimization and Elitist Whale Optimization Algorithms",
      year: 2024,
      authors: "Kumar, D., Pawar, P. P., Meesala, M. K., & Shwetha, K. S.",
      link: "https://www.researchgate.net/publication/388739428_Enhanced_Stock_Market_Trend_Prediction_on_the_Indonesia_Stock_Exchange_Using_Improved_Bacterial_Foraging_Optimization_and_Elitist_Whale_Optimization_Algorithms"
    },
    {
      title: "A Patient-Centric Blockchain Framework for Transparent and Secure Medical Data Sharing Using Modified AES",
      year: 2024,
      authors: "Pawar, P. P., Kumar, D., Meesala, M. K., & Shwetha, K. S.",
      link: "https://www.researchgate.net/publication/388739854_A_Patient-Centric_Blockchain_Framework_for_Transparent_and_Secure_Medical_Data_Sharing_Using_Modified_AES"
    },
    {
      title: "Securing Digital Governance: A Deep Learning and Blockchain Framework for Malware Detection in IoT Networks",
      year: 2024,
      authors: "Pawar, P. P., Kumar, D., Meesala, M. K., & Shwetha, K. S.",
      link: "https://www.researchgate.net/publication/388740837_Securing_Digital_Governance_A_Deep_Learning_and_Blockchain_Framework_for_Malware_Detection_in_IoT_Networks"
    },
    {
      title: "Trustworthy IoT Infrastructures: Privacy-Preserving Federated Learning with Efficient Secure Aggregation for Cybersecurity",
      year: 2024,
      authors: "Kumar, D., Pawar, P. P., Meesala, M. K., & Shwetha, K. S.",
      link: "https://www.researchgate.net/publication/388740840_Trustworthy_IoT_Infrastructures_Privacy-Preserving_Federated_Learning_with_Efficient_Secure_Aggregation_for_Cybersecurity"
    },
    {
      title: "Smart Agriculture in the Era of Big Data: IoT-Assisted Pest Forecasting and Resource Optimization for Sustainable Farming",
      year: 2024,
      authors: "Kumar, D., Pawar, P. P., Meesala, M. K., & Shwetha, K. S.",
      link: "https://www.researchgate.net/publication/388743397_Smart_Agriculture_in_the_Era_of_Big_Data_IoT-Assisted_Pest_Forecasting_and_Resource_Optimization_for_Sustainable_Farming"
    },
    {
      title: "Investigation on Digital Forensic Using Graph Based Neural Network With Blockchain Technology",
      year: 2024,
      authors: "Pawar, P. P., Kumar, D., Bhujang, R., & Deepika, K. S.",
      link: "https://www.researchgate.net/publication/384538103_Investigation_on_Digital_Forensic_Using_Graph_Based_Neural_Network_With_Blockchain_Technology"
    },
    {
      title: "SINN Based Federated Learning Model for Intrusion Detection with Blockchain Technology in Digital Forensic",
      year: 2024,
      authors: "Pawar, P. P., Kumar, D., Kumar, P., & Deepika, K. S.",
      link: "https://www.researchgate.net/publication/384543124_SINN_Based_Federated_Learning_Model_for_Intrusion_Detection_with_Blockchain_Technology_in_Digital_Forensic"
    },
    {
      title: "PFCM based Segmentation and TFA based DCNN model for Skin Cancer Classification using Dermoscopic Images",
      year: 2024,
      authors: "Pawar, P. P., Kumar, D., Kumar, P., & Manoj, H. M.",
      link: "https://www.researchgate.net/publication/384548636_PFCM_based_Segmentation_and_TFA_based_DCNN_model_for_Skin_Cancer_Classification_using_Dermoscopic_Images"
    },
    {
      title: "Innovative Horizons in Agricultural Technology with TSA Based StrawberrySqueezeNet Classification Model",
      year: 2024,
      authors: "Kumar, D., Pawar, P. P., Kumar, P., & Manoj, H. M.",
      link: "https://www.researchgate.net/publication/384548880_Innovative_Horizons_in_Agricultural_Technology_with_TSA_based_StrawberrySqueezeNet_Classification_Model"
    },
    {
      title: "Study on Empowering Cyber Security by Using Adaptive Machine Learning Methods",
      year: 2024,
      authors: "Gonaygunta, H., Nadella, G. S., Pawar, P. P., & Kumar, D.",
      link: "https://www.researchgate.net/publication/380771681_Study_on_Empowering_Cyber_Security_by_Using_Adaptive_Machine_Learning_Methods"
    },
    {
      title: "Enhancing Cybersecurity: The Development of a Flexible Deep Learning Model for Enhanced Anomaly Detection",
      year: 2024,
      authors: "Gonaygunta, H., Nadella, G. S., Pawar, P. P., & Kumar, D.",
      link: "https://www.researchgate.net/publication/380772746_Enhancing_Cybersecurity_The_Development_of_a_Flexible_Deep_Learning_Model_for_Enhanced_Anomaly_Detection"
    },
    {
      title: "An Advanced Wasserstein-Enabled Generative Adversarial Network Enabled Attack Detection for Blockchain-Assisted Intelligent Transportation System",
      year: 2024,
      authors: "Pawar, P. P., Kumar, D., Ananthan, B., & Surya, R.",
      link: "https://www.researchgate.net/publication/381934336_An_Advanced_Wasserstein-Enabled_Generative_Adversarial_Network_Enabled_Attack_Detection_for_Blockchain-Assisted_Intelligent_Transportation_System"
    },
    {
      title: "Optimized Support Vector Machine Based Fused IoT Network Security Management",
      year: 2024,
      authors: "Kumar, D., Pawar, P. P., Ananthan, B., & Prabhakaran, T. V.",
      link: "https://www.researchgate.net/publication/381934981_Optimized_Support_Vector_Machine_Based_Fused_IoT_Network_Security_Management"
    },
    {
      title: "Mayfly Optimization Algorithm with Bidirectional Long-Short Term Memory for Intrusion Detection System in Internet of Things",
      year: 2024,
      authors: "Pillai, S. V. S., Polimetla, K., Alsalami, Z., & Kumar, D.",
      link: "https://www.researchgate.net/publication/381395179_Mayfly_Optimization_Algorithm_with_Bidirectional_Long-Short_Term_Memory_for_Intrusion_Detection_System_in_Internet_of_Things"
    }
  ];

  const researchInterests = [
    {
      title: "Artificial Intelligence",
      description: "Machine learning algorithms, neural networks, and AI ethics",
      icon: <FileCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      color: "blue"
    },
    {
      title: "Human-Computer Interaction",
      description: "User experience, adaptive interfaces, accessibility",
      icon: <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      color: "purple"
    },
    {
      title: "Distributed Systems",
      description: "Edge computing, IoT networks, system optimization",
      icon: <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />,
      color: "green"
    }
  ];

  return (
    <Layout>
      {/* Header section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-indigo-50/50 to-white dark:from-slate-900 dark:via-blue-950/10 dark:to-gray-950 py-20 md:py-28">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.slate.100/50)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.100/50)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.slate.700/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.700/20)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        
        {/* Research icon */}
        <div className="absolute top-1/4 right-1/4 opacity-10 dark:opacity-5 hidden lg:block">
          <div className="relative h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900 p-6 animate-pulse">
            <BookOpen className="h-full w-full text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-slate-800/80 shadow-sm backdrop-blur-sm">
            <BookOpen className="w-3.5 h-3.5 mr-2" /> Research Portfolio
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Research
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-6">
            My research explores the intersection of artificial intelligence, human-computer interaction, and distributed systems, with a focus on practical applications.
          </p>
          
          {/* ORCID ID */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <a 
              href="https://orcid.org/0009-0009-2137-0864"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-all shadow-sm hover:shadow-md group"
            >
              <svg className="h-5 w-5" viewBox="0 0 256 256" fill="currentColor">
                <path fill="#A6CE39" d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z"/>
                <g>
                  <path fill="#FFFFFF" d="M86.3,186.2H70.9V79.1h15.4v48.4V186.2z"/>
                  <path fill="#FFFFFF" d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z"/>
                  <path fill="#FFFFFF" d="M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1C84.2,46.7,88.7,51.3,88.7,56.8z"/>
                </g>
              </svg>
              <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                ORCID: 0009-0009-2137-0864
              </span>
              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
            </a>
          </div>
          
          {/* Navigation tabs */}
          <div className="flex flex-wrap justify-center mt-12 gap-4">
            <Button
              variant={activeTab === 'interests' ? 'default' : 'outline'}
              onClick={() => setActiveTab('interests')}
              className={activeTab === 'interests' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 dark:border-slate-700'}
            >
              Research Interests
            </Button>
            <Button
              variant={activeTab === 'publications' ? 'default' : 'outline'}
              onClick={() => {
                setActiveTab('publications');
                document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={activeTab === 'publications' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 dark:border-slate-700'}
            >
              Publications
            </Button>
            <Button
              variant={activeTab === 'conferences' ? 'default' : 'outline'}
              onClick={() => {
                setActiveTab('conferences');
                document.getElementById('conferences')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={activeTab === 'conferences' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 dark:border-slate-700'}
            >
              Conference Paper
            </Button>
            <Button
              variant={activeTab === 'research-publications' ? 'default' : 'outline'}
              onClick={() => {
                setActiveTab('research-publications');
                document.getElementById('research-publications')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={activeTab === 'research-publications' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 dark:border-slate-700'}
            >
              Research Publication
            </Button>
            <Button
              variant={activeTab === 'articles' ? 'default' : 'outline'}
              onClick={() => {
                setActiveTab('articles');
                document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={activeTab === 'articles' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 dark:border-slate-700'}
            >
              Article
            </Button>
            <Button
              variant={activeTab === 'book-chapters' ? 'default' : 'outline'}
              onClick={() => {
                setActiveTab('book-chapters');
                document.getElementById('book-chapters')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={activeTab === 'book-chapters' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 dark:border-slate-700'}
            >
              Book Chapter
            </Button>
            <Button
              variant={activeTab === 'preprints' ? 'default' : 'outline'}
              onClick={() => {
                setActiveTab('preprints');
                document.getElementById('preprints')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={activeTab === 'preprints' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 dark:border-slate-700'}
            >
              Preprint
            </Button>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          {/* Research Interests */}
          <div id="interests" className={`mb-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mr-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Research Interests
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchInterests.map((interest, index) => {
                const colorMap = {
                  blue: "from-blue-500 to-indigo-500 bg-blue-50 dark:bg-blue-900/20",
                  purple: "from-purple-500 to-pink-500 bg-purple-50 dark:bg-purple-900/20",
                  green: "from-green-500 to-emerald-500 bg-green-50 dark:bg-green-900/20"
                };
                
                return (
                  <div 
                    key={index}
                    className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
                  >
                    <div className={`h-2 w-full bg-gradient-to-r ${colorMap[interest.color]}`}></div>
                    <div className="p-6">
                      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${colorMap[interest.color]}`}>
                        {interest.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {interest.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Publications */}
          <div id="publications" className={`mb-20 scroll-mt-24 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mr-4">
                <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Publications
              </h2>
            </div>
            
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <div 
                  key={index}
                  className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {pub.title}
                        </h3>
                        <p className="italic text-slate-600 dark:text-slate-300 mb-2">
                          {pub.authors}
                        </p>
                        <div className="flex items-center mb-6">
                          <Badge className="bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 mr-3">
                            {pub.year}
                          </Badge>
                          <span className="text-slate-600 dark:text-slate-300 font-medium">{pub.journal}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700">
                          <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Download className="h-3.5 w-3.5 mr-1.5" /> PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Conference Participation */}
          <div id="conferences" className={`mb-20 scroll-mt-24 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mr-4">
                <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Conference Paper
              </h2>
            </div>
            
            <div className="space-y-8">
              {conferences.map((conf, index) => (
                <div 
                  key={index}
                  className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {conf.title}
                        </h3>
                        <p className="italic text-slate-600 dark:text-slate-300 mb-2">
                          {conf.authors}
                        </p>
                        <div className="flex items-center mb-4">
                          <Badge className="bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                            {conf.year}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700">
                          <a href={conf.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View Paper
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Publications */}
          <div id="research-publications" className={`mb-20 scroll-mt-24 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-2 mr-4">
                <FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Research Publications
              </h2>
            </div>
            
            <div className="space-y-8">
              {publications.filter(pub => pub.journal === "Research Publication").map((pub, index) => (
                <div 
                  key={index}
                  className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-amber-500"></div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {pub.title}
                        </h3>
                        <p className="italic text-slate-600 dark:text-slate-300 mb-2">
                          {pub.authors}
                        </p>
                        <div className="flex items-center mb-6">
                          <Badge className="bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                            {pub.year}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700">
                          <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Download className="h-3.5 w-3.5 mr-1.5" /> PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div id="articles" className={`mb-20 scroll-mt-24 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-lg p-2 mr-4">
                <FileText className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Articles
              </h2>
            </div>
            
            <div className="space-y-8">
              {publications.filter(pub => pub.journal === "Article").map((pub, index) => (
                <div 
                  key={index}
                  className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {pub.title}
                        </h3>
                        <p className="italic text-slate-600 dark:text-slate-300 mb-2">
                          {pub.authors}
                        </p>
                        <div className="flex items-center mb-6">
                          <Badge className="bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                            {pub.year}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-700">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-700">
                          <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Download className="h-3.5 w-3.5 mr-1.5" /> PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book Chapters */}
          <div id="book-chapters" className={`mb-20 scroll-mt-24 transition-all duration-700 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-pink-100 dark:bg-pink-900/30 rounded-lg p-2 mr-4">
                <BookOpen className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Book Chapters
              </h2>
            </div>
            
            <div className="space-y-8">
              {publications.filter(pub => pub.journal === "Book Chapter").map((pub, index) => (
                <div 
                  key={index}
                  className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-pink-500 to-rose-500"></div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                          {pub.title}
                        </h3>
                        <p className="italic text-slate-600 dark:text-slate-300 mb-2">
                          {pub.authors}
                        </p>
                        <div className="flex items-center mb-6">
                          <Badge className="bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                            {pub.year}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-700">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-700">
                          <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Download className="h-3.5 w-3.5 mr-1.5" /> PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preprints */}
          <div id="preprints" className={`scroll-mt-24 transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 dark:bg-amber-900/30 rounded-lg p-2 mr-4">
                <FileCode className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Preprints
              </h2>
            </div>
            
            <div className="space-y-8">
              {publications.filter(pub => pub.journal === "Preprint").map((pub, index) => (
                <div 
                  key={index}
                  className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-amber-500 to-yellow-500"></div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {pub.title}
                        </h3>
                        <p className="italic text-slate-600 dark:text-slate-300 mb-2">
                          {pub.authors}
                        </p>
                        <div className="flex items-center mb-6">
                          <Badge className="bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                            {pub.year}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-700">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-700">
                          <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Download className="h-3.5 w-3.5 mr-1.5" /> PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}










