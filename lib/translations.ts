export type Language = 'en' | 'zh'

interface TranslationStructure {
  navigation: {
    solutions: string
    skillMall: string
    creatorHub: string
    pricing: string
    technology: string
    whitepapers: string
    docs: string
    blog: string
    aboutUs: string
  }
  buttons: {
    bookDemo: string
    launchApp: string
    toggleMenu: string
    switchLanguage: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    exploreButton: string
    demoButton: string
  }
  video: {
    placeholder: string
    playHint: string
  }
  howItWorks: {
    title: string
    subtitle: string
    steps: {
      step1: {
        title: string
        description: string
      }
      step2: {
        title: string
        description: string
      }
      step3: {
        title: string
        description: string
      }
    }
    cta: {
      question: string
      startButton: string
      learnMoreButton: string
    }
  }
  aiChallenges: {
    title: string
    subtitle: string
    challenges: {
      challenge1: {
        title: string
        subtitle: string
        description: string
      }
      challenge2: {
        title: string
        subtitle: string
        description: string
      }
      challenge3: {
        title: string
        subtitle: string
        description: string
      }
    }
  }
  bottomCta: {
    title: string
    subtitle: string
    whitepaperButton: string
    joinCommunityButton: string
    additionalInfo: {
      free: {
        value: string
        description: string
      }
      support: {
        value: string
        description: string
      }
      updates: {
        value: string
        description: string
      }
    }
  }
  ecosystemArchitecture: {
    title: string
    subtitle: string
    applicationLayer: {
      title: string
      subtitle: string
    }
    protocolLayer: {
      title: string
      subtitle: string
    }
    dataInteraction: string
    learnMoreButton: string
  }
  valueHub: {
    title: string
    subtitle: string
    learners: {
      title: string
      subtitle: string
      description: string
      benefits: string[]
      cta: string
    }
    creators: {
      title: string
      subtitle: string
      description: string
      benefits: string[]
      cta: string
    }
    enterprises: {
      title: string
      subtitle: string
      description: string
      benefits: string[]
      cta: string
    }
  }
  partnersCarousel: {
    trustedBy: string
  }
  newsletter: {
    title: string
    subtitle: string
    placeholder: string
    subscribeButton: string
    subscribingButton: string
    privacyNote: string
    successTitle: string
    successMessage: string
    benefits: {
      weekly: string
      weeklyDesc: string
      exclusive: string
      exclusiveDesc: string
      priority: string
      priorityDesc: string
    }
  }
  solutions: {
    hero: {
      badge: string
      title: string
      subtitle: string
      demoButton: string
      pricingButton: string
    }
    aiSkillPlatform: {
      title: string
      subtitle: string
      flowchartTitle: string
      learnMoreButton: string
      steps: {
        create: {
          title: string
          subtitle: string
          description: string
        }
        learn: {
          title: string
          subtitle: string
          description: string
        }
        practice: {
          title: string
          subtitle: string
          description: string
        }
        effect: {
          title: string
          subtitle: string
          description: string
        }
      }
    }
    oaasEngine: {
      title: string
      subtitle: string
      description: string
      learnMoreButton: string
      workflowTitle: string
      workflowSteps: {
        defineKPI: {
          title: string
          description: string
        }
        matchSkills: {
          title: string
          description: string
        }
        lockFunds: {
          title: string
          description: string
        }
        achieveKPI: {
          title: string
          description: string
        }
        verifyResults: {
          title: string
          description: string
        }
        autoSettle: {
          title: string
          description: string
        }
      }
    }
    industryScenarios: {
      title: string
      subtitle: string
      learnMoreButton: string
      scenarios: {
        finance: {
          title: string
          subtitle: string
          description: string
          features: string[]
        }
        retail: {
          title: string
          subtitle: string
          description: string
          features: string[]
        }
        programming: {
          title: string
          subtitle: string
          description: string
          features: string[]
        }
      }
      stats: {
        coverage: {
          value: string
          label: string
        }
        successRate: {
          value: string
          label: string
        }
        roiImprovement: {
          value: string
          label: string
        }
      }
    }
    talentVerification: {
      badge: string
      title: string
      subtitle: string
      description: string
      learnMoreButton: string
      featuresTitle: string
      features: {
        transparent: {
          title: string
          description: string
        }
        tamperProof: {
          title: string
          description: string
        }
        preciseMatching: {
          title: string
          description: string
        }
        simplifiedInvestigation: {
          title: string
          description: string
        }
      }
      sbtTitle: string
      sbtSubtitle: string
      sbtStatus: {
          verified: string
          onChain: string
          qsvScore: string
          qsvScoreLabel: string
        }
      benefits: {
        accuracy: {
          title: string
          subtitle: string
          description: string
        }
        timeSaving: {
          title: string
          subtitle: string
          description: string
        }
        costReduction: {
          title: string
          subtitle: string
          description: string
        }
      }
    }
    roiCalculator: {
      title: string
      subtitle: string
      inputs: {
        teamSize: string
        currentConversion: string
        targetConversion: string
        avgDealValue: string
        trainingCost: string
      }
      results: {
          title: string
          currentRevenue: string
          projectedRevenue: string
          revenueIncrease: string
          totalCost: string
          roi: string
          paybackPeriod: string
          totalTrainingInvestment: string
          currentStatus: string
          expectedStatus: string
          conversionRate: string
          annualRevenue: string
        }
      calculateButton: string
      getCustomizedPlan: string
    }
  }
}

export const translations: Record<Language, TranslationStructure> = {
  en: {
    navigation: {
      solutions: 'Solutions',
      skillMall: 'Skill Mall',
      creatorHub: 'Creator Hub',
      pricing: 'Pricing',
      technology: 'Technology',
      whitepapers: 'Whitepapers',
      docs: 'Docs',
      blog: 'Blog',
      aboutUs: 'About Us'
    },
    buttons: {
      bookDemo: 'Book Demo',
      launchApp: 'Launch APP',
      toggleMenu: 'Toggle menu',
      switchLanguage: 'Switch Language'
    },
    hero: {
      badge: 'Launching Soon',
      title: 'Skill³: AI-Driven Learning, Immersive AI Testing, Skill Unit Monetization',
      subtitle: 'Master new skills through AI-driven learning, test your expertise with real-world AI Coaching, and publish your Skill Units to earn substantial rewards.',
      exploreButton: 'Explore Skill Mall',
      demoButton: 'Book a Demo'
    },
    video: {
      placeholder: 'Video Demo',
      playHint: 'Click to play product introduction video'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'A simple, visual three-step process designed to quickly explain the platform\'s core loop and lower the barrier to understanding for new users.',
      steps: {
        step1: {
          title: 'Choose Your Skill',
          description: 'Browse our skill marketplace and select a \'Skill Agent\' crafted by industry experts.'
        },
        step2: {
          title: 'Learn with AI',
          description: 'Interact with your dedicated AI tutor to complete real projects and truly master skills.'
        },
        step3: {
          title: 'Prove Your Results',
          description: 'Earn your NFT certificates and $SKILL rewards on the blockchain, building your digital career portfolio.'
        }
      },
      cta: {
        question: 'Ready to start your skill learning journey?',
        startButton: 'Start Learning Now',
        learnMoreButton: 'Learn More'
      }
    },
    aiChallenges: {
      title: 'AI Era Challenges',
      subtitle: 'In the AI era, the human capital market faces a lack of trust infrastructure',
      challenges: {
        challenge1: {
          title: 'Paradigm Shift',
          subtitle: 'Competitiveness Shift',
          description: '"What can be achieved"'
        },
        challenge2: {
          title: 'Efficiency Black Hole',
          subtitle: 'Traditional Recruitment Cost',
          description: 'Enormous'
        },
        challenge3: {
          title: 'Knowledge Assetization',
          subtitle: 'Expert Tool Demand',
          description: 'Prevent Commoditization'
        }
      }
    },
    bottomCta: {
      title: 'Ready to Start Your Skill Revolution?',
      subtitle: 'Learn more about how SKILL³ redefines skill verification and value creation',
      whitepaperButton: 'View Whitepaper',
      joinCommunityButton: 'Join Community',
      additionalInfo: {
        free: {
          value: 'Free',
          description: 'Whitepaper Download'
        },
        support: {
          value: '24/7',
          description: 'Community Support'
        },
        updates: {
          value: 'Real-time',
          description: 'Tech Updates'
        }
      }
    },
    ecosystemArchitecture: {
      title: 'Dual-Layer Ecosystem Architecture',
      subtitle: 'Trust Settlement Layer & Skill Assetization Platform',
      applicationLayer: {
        title: 'Application Layer (Skill3.com)',
        subtitle: 'AI Skill Agent Creation & Circulation Platform'
      },
      protocolLayer: {
        title: 'Protocol Layer (Skill3.org)',
        subtitle: 'Human Capital Oracle, Trust Settlement Layer'
      },
      dataInteraction: 'Data Interaction',
      learnMoreButton: 'Learn More About the Protocol'
    },
    valueHub: {
      title: 'Value Proposition Hub',
      subtitle: 'Tailored solutions for learners, creators, and enterprises',
      learners: {
        title: 'For Learners',
        subtitle: 'Beyond Certificates, Master Skills',
        description: 'Gain real capabilities and truly own your achievements with blockchain technology. Every progress you make becomes an immutable digital asset.',
        benefits: [
          'Personalized AI tutor guidance',
          'Real project practice',
          'NFT skill certificates',
          '$SKILL token rewards',
          'Lifelong learning portfolio'
        ],
        cta: 'Start Learning'
      },
      creators: {
        title: 'For Creators',
        subtitle: 'Monetize Your Expertise',
        description: 'Here, you\'re not just teaching courses, you\'re building the future of education. Enjoy 60% revenue sharing and multiple incentives.',
        benefits: [
          '60% revenue sharing',
          'Creator studio',
          'Multiple incentive mechanisms',
          'Professional teaching tools',
          'Global student community'
        ],
        cta: 'Become a Creator'
      },
      enterprises: {
        title: 'For Enterprises',
        subtitle: 'Stop Paying for \'Training\', Start Investing in \'Results\'',
        description: 'Through our unique \'Proof of Results\' model, ensure every training investment brings measurable business returns.',
        benefits: [
          'Results-oriented training',
          'Employee skill tracking',
          'Customized training solutions',
          'ROI data analysis',
          'Enterprise-level support'
        ],
        cta: 'Book Demo'
      }
    },
    partnersCarousel: {
      trustedBy: 'Trusted by individuals at'
    },
    newsletter: {
      title: 'Newsletter Subscription',
      subtitle: 'Subscribe to our newsletter for the latest updates',
      placeholder: 'Enter your email address',
      subscribeButton: 'Subscribe',
      subscribingButton: 'Subscribing...',
      privacyNote: 'We promise to protect your privacy and will not send spam',
      successTitle: 'Subscription Successful!',
      successMessage: 'Thank you for subscribing, we will regularly send you the latest updates',
      benefits: {
        weekly: 'Weekly',
        weeklyDesc: 'Tech Updates',
        exclusive: 'Exclusive',
        exclusiveDesc: 'Content Access',
        priority: 'Priority',
        priorityDesc: 'Event Notifications'
      }
    },
    solutions: {
      hero: {
        badge: 'Enterprise Solutions',
        title: 'AI-Driven Skill Transformation & ROI Delivery Platform',
        subtitle: 'We work with you to achieve measurable business KPIs. Through our AI-native training platform, we transform skill development into actual business outcomes, ensuring every training investment generates quantifiable returns.',
        demoButton: 'Request Demo',
        pricingButton: 'View Pricing'
      },
      aiSkillPlatform: {
        title: '1. AI Skill Training Platform',
        subtitle: '"Create-Learn-Practice-Effect" Loop: AI Agent-Driven Skill Transformation',
        flowchartTitle: 'Create-Learn-Practice-Effect Loop Flowchart',
        learnMoreButton: 'Learn More',
        steps: {
          create: {
            title: 'Create',
            subtitle: 'AI Course Creator',
            description: 'Build AI Skill Units'
          },
          learn: {
            title: 'Learn',
            subtitle: 'AI Tutor',
            description: 'Interactive Learning'
          },
          practice: {
            title: 'Practice',
            subtitle: 'AI Training Partner',
            description: 'High-Fidelity Simulation Practice'
          },
          effect: {
            title: 'Effect',
            subtitle: 'AI Supervisor',
            description: 'Intelligent Analysis & ROI Quantification'
          }
        }
      },
      oaasEngine: {
        title: '2. Outcome Proof Engine (OaaS)',
        subtitle: 'Outcome as a Service (OaaS): Fully Align Financial Incentives with Business Results',
        description: 'Explains how enterprises achieve "pay for results". Emphasizes the key role of Web3 technology (smart contracts and oracles) in providing transparent, tamper-proof, and automatically executed settlement mechanisms.',
        learnMoreButton: 'Learn More',
        workflowTitle: 'OaaS Workflow',
        workflowSteps: {
          defineKPI: {
            title: 'Define Business KPIs',
            description: 'Clarify measurable business objectives'
          },
          matchSkills: {
            title: 'Match AI Skill Units',
            description: 'Intelligently recommend the most suitable skill training'
          },
          lockFunds: {
            title: 'Lock Training Funds',
            description: 'Smart contract escrow for training investment'
          },
          achieveKPI: {
            title: 'Employees Learn & Achieve KPIs',
            description: 'AI-driven personalized learning paths'
          },
          verifyResults: {
            title: 'AI Verify Results',
            description: 'Oracle verification of business outcomes'
          },
          autoSettle: {
            title: 'Auto Settlement',
            description: 'Smart contract automatic payment execution'
          }
        }
      },
      industryScenarios: {
        title: '3. Industry Application Scenarios',
        subtitle: 'Customized AI skill training solutions tailored to different industry characteristics',
        learnMoreButton: 'Learn More',
        scenarios: {
          finance: {
            title: 'Financial AI Training',
            subtitle: 'Empowering Bank Account Managers',
            description: 'High-fidelity conversational training through AI customer simulation, real-time speech analysis to improve conversion efficiency',
            features: [
              'AI simulates customers for high-fidelity conversational training',
              'Real-time speech analysis and optimization suggestions',
              'Improve customer conversion efficiency',
              'Quantify training ROI'
            ]
          },
          retail: {
            title: 'Retail AI Practice',
            subtitle: 'Assisting Sales Teams',
            description: 'AI analyzes real sales recordings, provides optimization suggestions, improves order rates',
            features: [
              'AI analyzes real sales recordings',
              'Intelligently provides optimization suggestions',
              'Improve customer order rates',
              'Quantitative sales skill assessment'
            ]
          },
          programming: {
            title: 'Programming Practice',
            subtitle: 'Providing Online Programming Environment',
            description: 'Integrated OJ/Jupyter, efficiently master core technical skills',
            features: [
              'Provide online programming environment',
              'Integrated OJ/Jupyter platform',
              'Efficiently master core technical skills',
              'Real-time code evaluation feedback'
            ]
          }
        },
        stats: {
          coverage: {
            value: '50+',
            label: 'Industry Scenarios Covered'
          },
          successRate: {
            value: '95%',
            label: 'Skill Transformation Success Rate'
          },
          roiImprovement: {
            value: '300%',
            label: 'Average ROI Improvement'
          }
        }
      },
      talentVerification: {
        badge: 'Web3 Skill Verification',
        title: '4. Verified Talent Pool',
        subtitle: 'Precise Recruitment Based on Trusted On-Chain Skill Data',
        description: 'Explains how Skill SBT (Skill Passport) provides transparent, trustworthy, and tamper-proof talent verification. Utilizes QSV data for precise candidate matching and simplified background checks.',
        learnMoreButton: 'Learn More',
        featuresTitle: 'Skill SBT Passport Features',
        features: {
          transparent: {
            title: 'Transparent & Trustworthy',
            description: 'Blockchain-based immutable skill records'
          },
          tamperProof: {
            title: 'Tamper-Proof',
            description: 'Cryptographically guaranteed skill data integrity'
          },
          preciseMatching: {
            title: 'Precise Matching',
            description: 'QSV data-driven candidate matching'
          },
          simplifiedInvestigation: {
            title: 'Simplified Investigation',
            description: 'Automated background check process'
          }
        },
        sbtTitle: 'Skill SBT Passport',
        sbtSubtitle: 'Soul Bound Token',
        sbtStatus: {
          verified: 'Verified',
          onChain: 'Immutable',
          qsvScore: 'A-Grade',
          qsvScoreLabel: 'QSV Score'
        },
        benefits: {
          accuracy: {
            title: '95%',
            subtitle: 'Recruitment Accuracy',
            description: 'Precise matching based on real skill data'
          },
          timeSaving: {
            title: '70%',
            subtitle: 'Time Savings',
            description: 'Simplified background checks and skill verification'
          },
          costReduction: {
            title: '85%',
            subtitle: 'Cost Reduction',
            description: 'Reduce losses from incorrect hiring'
          }
        }
      },
      roiCalculator: {
        title: 'ROI Calculator',
        subtitle: 'Enter team size and conversion rates to estimate revenue growth from OaaS',
        inputs: {
          teamSize: 'Team Size (People)',
          currentConversion: 'Current Conversion Rate (%)',
          targetConversion: 'Target Conversion Rate (%)',
          avgDealValue: 'Average Deal Value (CNY)',
          trainingCost: 'Training Cost per Person (CNY)'
        },
        results: {
          title: 'Estimated Revenue Analysis',
          currentRevenue: 'Current Annual Revenue',
          projectedRevenue: 'Projected Annual Revenue',
          revenueIncrease: 'Revenue Increase',
          totalCost: 'Total Training Cost',
          roi: 'ROI',
          paybackPeriod: 'Payback Period (Months)',
          totalTrainingInvestment: 'Total Training Investment',
          currentStatus: 'Current Status',
          expectedStatus: 'Expected Status',
          conversionRate: 'Conversion Rate',
          annualRevenue: 'Annual Revenue'
        },
        calculateButton: 'Calculate ROI',
        getCustomizedPlan: 'Get Customized ROI Plan'
      }
    }
  },
  zh: {
    navigation: {
      solutions: '解决方案',
      skillMall: '技能商城',
      creatorHub: '创作者中心',
      pricing: '定价',
      technology: '技术',
      whitepapers: '白皮书',
      docs: '文档',
      blog: '博客',
      aboutUs: '关于我们'
    },
    buttons: {
      bookDemo: '预约演示',
      launchApp: '启动应用',
      toggleMenu: '切换菜单',
      switchLanguage: '切换语言'
    },
    hero: {
      badge: '即将推出',
      title: 'Skill³：AI驱动学习，沉浸式AI测试，技能单元货币化',
      subtitle: '通过AI驱动的学习掌握新技能，通过真实世界的AI指导测试您的专业知识，发布您的技能单元以获得丰厚奖励。',
      exploreButton: '探索技能商城',
      demoButton: '预约演示'
    },
    video: {
      placeholder: '视频演示',
      playHint: '点击播放产品介绍视频'
    },
    howItWorks: {
      title: '平台运作模式',
      subtitle: '一个简洁明了、视觉化的三步流程，旨在快速解释平台的核心循环，降低新用户的理解门槛。',
      steps: {
        step1: {
          title: '选择您的技能',
          description: '浏览我们的技能市场，选择一个由行业专家打造的"技能体"'
        },
        step2: {
          title: '与 AI 共同学习',
          description: '与您的专属 AI 导师互动，完成真实项目，真正掌握技能'
        },
        step3: {
          title: '证明您的成果',
          description: '获得您在区块链上的"成果NFT"和 $SKILL 奖励，构建您的数字化职业档案'
        }
      },
      cta: {
        question: '准备开始您的技能学习之旅？',
        startButton: '立即开始学习',
        learnMoreButton: '了解更多'
      }
    },
    aiChallenges: {
      title: 'AI时代的挑战',
      subtitle: 'AI时代，人力资本市场面临信任基础设施的缺失',
      challenges: {
        challenge1: {
          title: '范式转移',
          subtitle: '竞争力转向',
          description: '"做到什么"'
        },
        challenge2: {
          title: '效率黑洞',
          subtitle: '传统招聘代价',
          description: '巨大'
        },
        challenge3: {
          title: '知识资产化',
          subtitle: '专家工具需求',
          description: '防止公地化'
        }
      }
    },
    bottomCta: {
      title: '准备开启您的技能革命？',
      subtitle: '深入了解SKILL³如何重新定义技能验证和价值创造',
      whitepaperButton: '查看白皮书',
      joinCommunityButton: '加入社区',
      additionalInfo: {
        free: {
          value: '免费',
          description: '白皮书下载'
        },
        support: {
          value: '24/7',
          description: '社区支持'
        },
        updates: {
          value: '实时',
          description: '技术更新'
        }
      }
    },
    ecosystemArchitecture: {
      title: '双层生态系统架构',
      subtitle: '信任结算层与技能资产化平台',
      applicationLayer: {
        title: '应用层 (Skill3.com)',
        subtitle: 'AI技能体创造与流通平台'
      },
      protocolLayer: {
        title: '协议层 (Skill3.org)',
        subtitle: '人力资本预言机，信任结算层'
      },
      dataInteraction: '数据交互',
      learnMoreButton: '了解更多关于协议的信息'
    },
    valueHub: {
      title: '价值主张中心',
      subtitle: '为学习者、创作者和企业量身定制的解决方案',
      learners: {
        title: '面向学习者',
        subtitle: '超越证书，掌握技能',
        description: '获得真实的能力，并以区块链技术真正拥有您的成就。您的每一次进步都将成为不可篡改的数字资产。',
        benefits: [
          '个性化AI导师指导',
          '真实项目实战练习',
          'NFT技能证书',
          '$SKILL代币奖励',
          '终身学习档案'
        ],
        cta: '开始学习'
      },
      creators: {
        title: '面向创作者',
        subtitle: '将您的专业知识变现',
        description: '在我们这里，您不仅仅是教授课程，更是在构建未来的教育。享受60%的收入分成和多重激励。',
        benefits: [
          '60%收入分成',
          '创作者工作室',
          '多重激励机制',
          '专业教学工具',
          '全球学员群体'
        ],
        cta: '成为创作者'
      },
      enterprises: {
        title: '面向企业',
        subtitle: '停止为\'培训\'付费，开始为\'成果\'投资',
        description: '通过我们独有的\'成果证明\'模式，确保您的每一笔培训投入都带来可衡量的业务回报。',
        benefits: [
          '成果导向培训',
          '员工技能追踪',
          '定制培训方案',
          'ROI数据分析',
          '企业级支持'
        ],
        cta: '预约演示'
      }
    },
    partnersCarousel: {
      trustedBy: 'Trusted by individuals at'
    },
    newsletter: {
      title: 'Newsletter订阅',
      subtitle: '订阅我们的邮件，获取最新动态',
      placeholder: '输入您的邮箱地址',
      subscribeButton: '订阅',
      subscribingButton: '订阅中...',
      privacyNote: '我们承诺保护您的隐私，不会发送垃圾邮件',
      successTitle: '订阅成功！',
      successMessage: '感谢您的订阅，我们会定期向您发送最新动态',
      benefits: {
        weekly: '每周',
        weeklyDesc: '技术更新',
        exclusive: '独家',
        exclusiveDesc: '内容访问',
        priority: '优先',
        priorityDesc: '活动通知'
      }
    },
    solutions: {
      hero: {
        badge: '企业解决方案',
        title: 'AI驱动的技能转化与ROI交付平台',
        subtitle: '我们与您共同达成可衡量的业务KPI。通过AI原生的训战平台，将技能培养转化为实际业务成果，确保每一笔培训投入都产生可量化的回报。',
        demoButton: '申请演示',
        pricingButton: '查看定价'
      },
      aiSkillPlatform: {
        title: '1. AI技能训战平台',
        subtitle: '"创-学-练-效"闭环：AI Agent驱动的技能转化',
        flowchartTitle: '创-学-练-效闭环流程图',
        learnMoreButton: '了解更多',
        steps: {
          create: {
            title: '创',
            subtitle: 'AI智课师',
            description: '构建AI技能体'
          },
          learn: {
            title: '学',
            subtitle: 'AI导师',
            description: '交互式学习'
          },
          practice: {
            title: '练',
            subtitle: 'AI陪练师',
            description: '高保真模拟实战'
          },
          effect: {
            title: '效',
            subtitle: 'AI督导师',
            description: '智能分析量化ROI'
          }
        }
      },
      oaasEngine: {
        title: '2. 成果证明引擎(OaaS)',
        subtitle: '成果即服务(OaaS)：将财务激励与业务成果完全对齐',
        description: '解释企业如何实现"为结果付费"。强调Web3技术（智能合约与预言机）在其中的关键作用——提供透明、不可篡改且自动执行的结算机制。',
        learnMoreButton: '了解更多',
        workflowTitle: 'OaaS工作流程',
        workflowSteps: {
          defineKPI: {
            title: '定义业务KPI',
            description: '明确可衡量的业务目标'
          },
          matchSkills: {
            title: '匹配AI技能体',
            description: '智能推荐最适合的技能培训'
          },
          lockFunds: {
            title: '锁定培训资金',
            description: '智能合约托管培训投资'
          },
          achieveKPI: {
            title: '员工学习达成KPI',
            description: 'AI驱动的个性化学习路径'
          },
          verifyResults: {
            title: 'AI验证成果',
            description: '预言机验证业务成果'
          },
          autoSettle: {
            title: '自动结算',
            description: '智能合约自动执行付款'
          }
        }
      },
      industryScenarios: {
        title: '3. 行业应用场景',
        subtitle: '针对不同行业特点，提供定制化的AI技能训练解决方案',
        learnMoreButton: '了解更多',
        scenarios: {
          finance: {
            title: '金融AI陪练',
            subtitle: '赋能银行客户经理',
            description: '通过AI模拟客户进行高仿真对话训练，实时分析话术，提升转化效率',
            features: [
              'AI模拟客户进行高仿真对话训练',
              '实时分析话术优化建议',
              '提升客户转化效率',
              '量化培训ROI'
            ]
          },
          retail: {
            title: '零售AI真练',
            subtitle: '助力销售团队',
            description: 'AI分析真实销售录音，提供优化建议，提升下单率',
            features: [
              'AI分析真实销售录音',
              '智能提供优化建议',
              '提升客户下单率',
              '销售技能量化评估'
            ]
          },
          programming: {
            title: '编程实操',
            subtitle: '提供在线编程环境',
            description: '集成OJ/Jupyter，高效掌握核心技术技能',
            features: [
              '提供在线编程环境',
              '集成OJ/Jupyter平台',
              '高效掌握核心技术技能',
              '实时代码评估反馈'
            ]
          }
        },
        stats: {
          coverage: {
            value: '50+',
            label: '行业场景覆盖'
          },
          successRate: {
            value: '95%',
            label: '技能转化成功率'
          },
          roiImprovement: {
            value: '300%',
            label: '平均ROI提升'
          }
        }
      },
      talentVerification: {
        badge: 'Web3技能验证',
        title: '4. 验证人才库',
        subtitle: '精准招聘，基于可信的链上技能数据',
        description: '解释Skill SBT（技能护照）如何提供透明可信、防篡改的人才验证。利用QSV数据精准匹配候选人，简化背景调查。',
        learnMoreButton: '了解更多',
        featuresTitle: 'Skill SBT 技能护照特性',
        features: {
          transparent: {
            title: '透明可信',
            description: '基于区块链的不可篡改技能记录'
          },
          tamperProof: {
            title: '防篡改',
            description: '密码学保证的技能数据完整性'
          },
          preciseMatching: {
            title: '精准匹配',
            description: 'QSV数据驱动的候选人匹配'
          },
          simplifiedInvestigation: {
            title: '简化调查',
            description: '自动化背景调查流程'
          }
        },
        sbtTitle: 'Skill SBT 技能护照',
        sbtSubtitle: 'Soul Bound Token',
        sbtStatus: {
          verified: '已验证',
          onChain: '不可篡改',
          qsvScore: 'A级',
          qsvScoreLabel: 'QSV评分'
        },
        benefits: {
          accuracy: {
            title: '95%',
            subtitle: '招聘准确率',
            description: '基于真实技能数据的精准匹配'
          },
          timeSaving: {
            title: '70%',
            subtitle: '时间节省',
            description: '简化背景调查和技能验证流程'
          },
          costReduction: {
            title: '85%',
            subtitle: '成本降低',
            description: '减少错误招聘带来的损失'
          }
        }
      },
      roiCalculator: {
        title: 'ROI 计算器',
        subtitle: '输入团队规模和转化率，预估 OaaS 带来的收益增长',
        inputs: {
          teamSize: '团队规模（人）',
          currentConversion: '当前转化率（%）',
          targetConversion: '目标转化率（%）',
          avgDealValue: '平均成交金额（元）',
          trainingCost: '人均培训成本（元）'
        },
        results: {
          title: '预估收益分析',
          currentRevenue: '当前年收入',
          projectedRevenue: '预期年收入',
          revenueIncrease: '收入增长',
          totalCost: '总培训成本',
          roi: 'ROI',
          paybackPeriod: '回本周期（月）',
          totalTrainingInvestment: '总培训投入',
          currentStatus: '当前状态',
          expectedStatus: '预期状态',
          conversionRate: '转化率',
          annualRevenue: '年收入'
        },
        calculateButton: '计算ROI',
        getCustomizedPlan: '获取定制化 ROI 方案'
      }
    }
  }
}

export type TranslationKeys = TranslationStructure