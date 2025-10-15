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
  skillMall: {
    hero: {
      badge: string
      title: string
      subtitle: string
      exploreButton: string
      learnButton: string
      stats: {
        courses: string
        learners: string
        completion: string
        rating: string
      }
    }
    topRecommended: {
      title: string
      subtitle: string
      learnNowButton: string
      exploreButton: string
      buyButton: string
      creator: string
      difficulty: string
      price: string
      spReward: string
      sbtType: string
      web3Value: string
    }
    latestReleases: {
      title: string
      subtitle: string
      newBadge: string
      web3Value: string
      certification: string
      exploreButton: string
      buyButton: string
      viewAllButton: string
      learnNowButton: string
      creator: string
      difficulty: string
      price: string
      spReward: string
      sbtType: string
      category: string
    }
    featuredSkills: {
      title: string
      subtitle: string
      viewAllButton: string
      learnNowButton: string
      creator: string
      difficulty: string
      price: string
      spReward: string
      sbtType: string
      category: string
    }
    skillCategories: {
      title: string
      subtitle: string
      popularBadge: string
      coursesLabel: string
      studentsLabel: string
      ratingLabel: string
      exploreButton: string
      viewAllButton: string
      categories: {
        programming: string
        design: string
        marketing: string
        business: string
        dataScience: string
        ai: string
        blockchain: string
        finance: string
      }
    }
    cta: {
      title: string
      subtitle: string
      startLearningButton: string
      learnMoreButton: string
      createSkillButton: string
      joinCommunityButton: string
      features: string
    }
    common: {
      difficulty: {
        beginner: string
        intermediate: string
        advanced: string
        expert: string
      }
      rating: string
      students: string
      duration: string
      free: string
      premium: string
    }
    courses: {
      featured: {
        aiFinancialTrading: {
          title: string
          subtitle: string
          description: string
          creator: string
          difficulty: string
          sbtType: string
          skills: string[]
        }
        aiMedicalDiagnosis: {
          title: string
          subtitle: string
          description: string
          creator: string
          difficulty: string
          sbtType: string
          skills: string[]
        }
        aiCreativeDesigner: {
          title: string
          subtitle: string
          description: string
          creator: string
          difficulty: string
          sbtType: string
          skills: string[]
        }
      }
      latest: {
        aiVirtualStreamer: {
          title: string
          subtitle: string
          description: string
          creator: string
          difficulty: string
          sbtType: string
          category: string
        }
        web3GameDevelopment: {
          title: string
          subtitle: string
          description: string
          creator: string
          difficulty: string
          sbtType: string
          category: string
        }
        aiMusicComposition: {
          title: string
          subtitle: string
          description: string
          creator: string
          difficulty: string
          sbtType: string
          category: string
        }
        smartContractAuditing: {
          title: string
          subtitle: string
          description: string
          creator: string
          difficulty: string
          sbtType: string
          category: string
        }
        aiVideoEditing: {
          title: string
          subtitle: string
          description: string
          creator: string
          difficulty: string
          sbtType: string
          category: string
        }
        defiProtocolDevelopment: {
          title: string
          subtitle: string
          description: string
          creator: string
          difficulty: string
          sbtType: string
          category: string
        }
      }
    }
  }
  creatorHub: {
    hero: {
      badge: string
      title: string
      subtitle: string
      features: {
        aiTeacher: {
          label: string
          description: string
        }
        nftRights: {
          label: string
          description: string
        }
        tripleIncentive: {
          label: string
          description: string
        }
      }
      startCreatingButton: string
      learnMoreButton: string
    }
    successStories: {
      title: string
      subtitle: string
      description: string
      joinButton: string
      stories: {
        story1: {
          name: string
          title: string
          achievement: string
          result: string
          period: string
          description: string
          tags: string[]
        }
        story2: {
          name: string
          title: string
          achievement: string
          result: string
          period: string
          description: string
          tags: string[]
        }
        story3: {
          name: string
          title: string
          achievement: string
          result: string
          period: string
          description: string
          tags: string[]
        }
      }
    }
    revenueExplanation: {
      title: string
      subtitle: string
      revenueTypes: {
        courseRevenue: {
          title: string
          description: string
        }
        nftRevenue: {
          title: string
          description: string
        }
        incentiveRevenue: {
          title: string
          description: string
        }
      }
      settlement: {
        title: string
        description: string
        frequency: string
        method: string
      }
      calculator: {
        title: string
        inputs: {
          students: string
          price: string
          completion: string
        }
        results: {
          monthlyRevenue: string
          yearlyRevenue: string
          nftValue: string
          totalRevenue: string
        }
        calculateButton: string
      }
    }
    tripleIncentive: {
      badge: string
      title: string
      subtitle: string
      incentives: {
        financial: {
          title: string
          description: string
          features: {
            leadingShare: {
              title: string
              description: string
            }
            instantSettlement: {
              title: string
              description: string
            }
          }
        }
        reputation: {
          title: string
          description: string
          features: {
            createToEarn: {
              title: string
              description: string
            }
            airdropEligibility: {
              title: string
              description: string
            }
          }
        }
        growth: {
          title: string
          description: string
          features: {
            skillAgent: {
              title: string
              description: string
            }
            ipProtection: {
              title: string
              description: string
            }
          }
        }
      }
    }
    creatorStudio: {
      badge: string
      title: string
      subtitle: string
      introTitle: string
      liveCreationTitle: string
      features: {
        aiAssistant: {
          title: string
          description: string
        }
        contentCreation: {
          title: string
          description: string
        }
        analytics: {
          title: string
          description: string
        }
      }
      tryNowButton: string
    }
    faq: {
      title: string
      subtitle: string
      whyNowTitle: string
      whyNowDescription: string
      painPoints: {
        title: string
        description: string
        icon: string
      }[]
      whyNowReasons: {
        title: string
        description: string
        icon: string
      }[]
      stats: {
        marketSize: {
          value: string
          label: string
        }
        growth: {
          value: string
          label: string
        }
        creators: {
          value: string
          label: string
        }
      }
      questions: {
        q1: {
          question: string
          answer: string
        }
        q2: {
          question: string
          answer: string
        }
        q3: {
          question: string
          answer: string
        }
        q4: {
          question: string
          answer: string
        }
        q5: {
          question: string
          answer: string
        }
      }
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
    skillMall: {
      hero: {
        badge: 'Skill Marketplace',
        title: 'Discover AI-Powered Skills',
        subtitle: 'Browse thousands of expert-crafted skill bodies and start your learning journey with AI mentors',
        exploreButton: 'Explore Skills',
        learnButton: 'Start Learning',
        stats: {
          courses: 'Premium Courses',
          learners: 'Learners',
          completion: 'Completion Rate',
          rating: 'Average Rating'
        }
      },
      topRecommended: {
        title: 'Top Recommended',
        subtitle: 'Handpicked skills by our AI experts',
        learnNowButton: 'Learn Now',
        exploreButton: 'Explore',
        buyButton: 'Buy',
        creator: 'Creator',
        difficulty: 'Difficulty',
        price: 'Price',
        spReward: 'SP Reward',
        sbtType: 'SBT Type',
        web3Value: 'Web3 Value'
      },
      latestReleases: {
        title: 'Latest Releases',
        subtitle: 'Newest skills added to the marketplace',
        newBadge: 'NEW',
        web3Value: 'Web3 Value',
        certification: 'Certification',
        exploreButton: 'Explore',
        buyButton: 'Buy',
        viewAllButton: 'View All',
        learnNowButton: 'Learn Now',
        creator: 'Creator',
        difficulty: 'Difficulty',
        price: 'Price',
        spReward: 'SP Reward',
        sbtType: 'SBT Type',
        category: 'Category'
      },
      featuredSkills: {
        title: 'Featured Skills',
        subtitle: 'Popular skills trending in the community',
        viewAllButton: 'View All',
        learnNowButton: 'Learn Now',
        creator: 'Creator',
        difficulty: 'Difficulty',
        price: 'Price',
        spReward: 'SP Reward',
        sbtType: 'SBT Type',
        category: 'Category'
      },
      skillCategories: {
        title: 'Skill Categories',
        subtitle: 'Explore skills by category',
        popularBadge: 'Popular',
        coursesLabel: 'Courses',
        studentsLabel: 'Students',
        ratingLabel: 'Rating',
        exploreButton: 'Explore Courses',
        viewAllButton: 'View All',
        categories: {
          programming: 'Programming',
          design: 'Design',
          marketing: 'Marketing',
          business: 'Business',
          dataScience: 'Data Science',
          ai: 'Artificial Intelligence',
          blockchain: 'Blockchain',
          finance: 'Finance'
        }
      },
      cta: {
        title: 'Ready to Create Your Own Skill?',
        subtitle: 'Join thousands of creators and monetize your expertise',
        startLearningButton: 'Start Learning',
        learnMoreButton: 'Learn More',
        createSkillButton: 'Create Skill',
        joinCommunityButton: 'Join Community',
        features: '🎯 Personalized Learning Paths • 🤖 AI Smart Tutoring • 📊 Real-time Progress Tracking • 🏆 Authoritative Skill Certification'
      },
      common: {
        difficulty: {
          beginner: 'Beginner',
          intermediate: 'Intermediate',
          advanced: 'Advanced',
          expert: 'Expert'
        },
        rating: 'Rating',
        students: 'Students',
        duration: 'Duration',
        free: 'Free',
        premium: 'Premium'
      },
      courses: {
        featured: {
          aiFinancialTrading: {
            title: 'AI Financial Trading',
            subtitle: 'Master AI-driven trading strategies',
            description: 'Learn to build intelligent trading systems using machine learning algorithms and quantitative analysis techniques.',
            creator: 'Dr. Sarah Chen',
            difficulty: 'Advanced',
            sbtType: 'AI Trading Expert',
            skills: ['Machine Learning', 'Quantitative Analysis', 'Risk Management', 'Python']
          },
          aiMedicalDiagnosis: {
            title: 'AI Medical Diagnosis',
            subtitle: 'AI-powered medical image analysis',
            description: 'Master medical image analysis using deep learning, covering X-ray, CT, and MRI diagnosis techniques.',
            creator: 'Dr. Michael Zhang',
            difficulty: 'Expert',
            sbtType: 'Medical AI Specialist',
            skills: ['Deep Learning', 'Computer Vision', 'Medical Imaging', 'TensorFlow']
          },
          aiCreativeDesigner: {
            title: 'AI Creative Designer',
            subtitle: 'AI-assisted creative design',
            description: 'Learn to use AI tools for creative design, including image generation, style transfer, and automated design workflows.',
            creator: 'Emma Rodriguez',
            difficulty: 'Intermediate',
            sbtType: 'Creative AI Designer',
            skills: ['AI Art Generation', 'Style Transfer', 'Creative Workflow', 'Design Thinking']
          }
        },
        latest: {
          aiVirtualStreamer: {
            title: 'AI Virtual Streamer',
            subtitle: 'Create AI-powered virtual streamers',
            description: 'Learn to build virtual streaming personas using AI voice synthesis, motion capture, and real-time interaction technologies.',
            creator: 'Alex Kim',
            difficulty: 'Advanced',
            sbtType: 'Virtual Content Creator',
            category: 'Entertainment'
          },
          web3GameDevelopment: {
            title: 'Web3 Game Development',
            subtitle: 'Build blockchain-based games',
            description: 'Master Web3 game development including NFT integration, tokenomics design, and decentralized game mechanics.',
            creator: 'David Wilson',
            difficulty: 'Advanced',
            sbtType: 'Web3 Game Developer',
            category: 'Blockchain'
          },
          aiMusicComposition: {
            title: 'AI Music Composition',
            subtitle: 'AI-assisted music creation',
            description: 'Learn to compose music using AI tools, covering melody generation, harmony analysis, and automated arrangement.',
            creator: 'Luna Martinez',
            difficulty: 'Intermediate',
            sbtType: 'AI Music Producer',
            category: 'Creative Arts'
          },
          smartContractAuditing: {
            title: 'Smart Contract Auditing',
            subtitle: 'Blockchain security expert training',
            description: 'Master smart contract security auditing, vulnerability detection, and best practices for secure blockchain development.',
            creator: 'Robert Chen',
            difficulty: 'Expert',
            sbtType: 'Blockchain Security Expert',
            category: 'Security'
          },
          aiVideoEditing: {
            title: 'AI Video Editing',
            subtitle: 'Intelligent video production',
            description: 'Learn advanced video editing techniques using AI, including automated cutting, style transfer, and content generation.',
            creator: 'Sophie Taylor',
            difficulty: 'Intermediate',
            sbtType: 'AI Video Producer',
            category: 'Media Production'
          },
          defiProtocolDevelopment: {
            title: 'DeFi Protocol Development',
            subtitle: 'Build decentralized finance protocols',
            description: 'Master DeFi protocol development including liquidity pools, yield farming, and automated market makers.',
            creator: 'James Liu',
            difficulty: 'Expert',
            sbtType: 'DeFi Protocol Developer',
            category: 'Finance'
          }
        }
      }
    },
    creatorHub: {
      hero: {
        badge: 'Creator Hub',
        title: 'AI Smart Teacher',
        subtitle: 'Create AI-powered courses and earn triple rewards through our innovative creator ecosystem',
        features: {
          aiTeacher: {
            label: 'AI Smart Teacher',
            description: 'Zero-code AI teaching assistant creation'
          },
          nftRights: {
            label: 'NFT Rights Protection',
            description: 'Blockchain technology protects intellectual property'
          },
          tripleIncentive: {
            label: 'Triple Incentive System',
            description: '60% revenue share + SP points + NFT benefits'
          }
        },
        startCreatingButton: 'Start Creating',
        learnMoreButton: 'Learn More'
      },
      successStories: {
        title: 'Successful Creator Stories',
        subtitle: 'Join the ranks of successful creators',
        description: 'Every day, new experts achieve knowledge monetization breakthroughs through AI Smart Teacher. Your success story could be next.',
        joinButton: 'Join Successful Creators',
        stories: {
          story1: {
            name: 'Alex Kim',
            title: 'AI Programming Expert',
            achievement: 'Monthly Revenue',
            result: '$15,000',
            period: '6 months',
            description: 'Created 12 AI programming courses with over 5,000 students enrolled',
            tags: ['AI Programming', 'Machine Learning', 'Python']
          },
          story2: {
            name: 'Sarah Chen',
            title: 'Digital Marketing Specialist',
            achievement: 'Student Count',
            result: '8,500+',
            period: '1 year',
            description: 'Built comprehensive digital marketing curriculum with high completion rates',
            tags: ['Digital Marketing', 'Social Media', 'Analytics']
          },
          story3: {
            name: 'David Wilson',
            title: 'Blockchain Developer',
            achievement: 'Course Rating',
            result: '4.9/5.0',
            period: '8 months',
            description: 'Developed cutting-edge blockchain and DeFi courses with excellent reviews',
            tags: ['Blockchain', 'DeFi', 'Smart Contracts']
          }
        }
      },
      revenueExplanation: {
        title: 'Revenue Explanation',
        subtitle: 'Revenue Guarantee',
        revenueTypes: {
          courseRevenue: {
            title: 'Course Revenue',
            description: 'Earn 70% of course sales revenue with transparent settlement'
          },
          nftRevenue: {
            title: 'NFT Revenue',
            description: 'Receive NFT rights protection and secondary market royalties'
          },
          incentiveRevenue: {
            title: 'Incentive Revenue',
            description: 'Get additional rewards based on course quality and student engagement'
          }
        },
        settlement: {
          title: 'Settlement Details',
          description: 'Transparent and timely revenue settlement',
          frequency: 'Monthly Settlement',
          method: 'Cryptocurrency/Bank Transfer'
        },
        calculator: {
          title: 'Revenue Calculator',
          inputs: {
            students: 'Number of Students',
            price: 'Course Price ($)',
            completion: 'Completion Rate (%)'
          },
          results: {
            monthlyRevenue: 'Monthly Revenue',
            yearlyRevenue: 'Annual Revenue',
            nftValue: 'NFT Value',
            totalRevenue: 'Total Revenue'
          },
          calculateButton: 'Calculate Revenue'
        }
      },
      tripleIncentive: {
        badge: '💰 Triple Incentive System',
        title: 'Triple Incentive System',
        subtitle: 'Comprehensive reward system for creators',
        incentives: {
          financial: {
            title: 'Financial Incentives',
            description: 'Direct revenue sharing and performance bonuses',
            features: {
              leadingShare: {
                title: 'Leading Revenue Share',
                description: 'Industry-leading 60% revenue share ratio'
              },
              instantSettlement: {
                title: 'Instant Settlement',
                description: 'Smart contract auto-settlement, real-time earnings'
              }
            }
          },
          reputation: {
            title: 'Reputation Building',
            description: 'Build your brand and establish industry authority',
            features: {
              createToEarn: {
                title: 'Create-to-Earn',
                description: 'Create to mine, continuously earn SP points'
              },
              airdropEligibility: {
                title: 'Airdrop Eligibility',
                description: 'Priority access to platform token airdrops'
              }
            }
          },
          growth: {
            title: 'Growth Support',
            description: 'Platform promotion and marketing support for your courses',
            features: {
              skillAgent: {
                title: 'Skill Agent',
                description: 'AI skill NFT, permanent asset ownership'
              },
              ipProtection: {
                title: 'IP Protection',
                description: 'Blockchain technology protects intellectual property'
              }
            }
          }
        }
      },
      creatorStudio: {
        badge: '⭐ AI Smart Teacher Experience Portal',
        title: 'AI Smart Teacher Experience Portal',
        subtitle: 'Zero-threshold introduction',
        introTitle: 'Zero-threshold Introduction',
        liveCreationTitle: 'Live Creation Portal',
        features: {
          aiAssistant: {
            title: 'AI Course Assistant',
            description: 'AI-powered course creation and content optimization'
          },
          contentCreation: {
            title: 'Content Creation Tools',
            description: 'Professional tools for creating engaging course materials'
          },
          analytics: {
            title: 'Analytics Dashboard',
            description: 'Track student progress and course performance metrics'
          }
        },
        tryNowButton: 'Try Now'
      },
      faq: {
        title: 'Creator FAQ',
        subtitle: 'Why choose now?',
        whyNowTitle: 'Why Choose Now?',
        whyNowDescription: 'The creator economy is booming and this is the perfect time to start your journey.',
        painPoints: [
          {
            title: 'High Content Creation Barriers',
            description: 'Traditional content creation requires extensive technical skills and expensive equipment',
            icon: '🚧'
          },
          {
            title: 'Limited Monetization Options',
            description: 'Creators struggle to find sustainable revenue streams beyond basic course sales',
            icon: '💸'
          },
          {
            title: 'Lack of IP Protection',
            description: 'Content creators face challenges in protecting their intellectual property rights',
            icon: '🔒'
          }
        ],
        whyNowReasons: [
          {
            title: 'AI-Powered Creation Tools',
            description: 'Advanced AI assistants dramatically reduce content creation time and complexity',
            icon: '🤖'
          },
          {
            title: 'Growing Market Demand',
            description: 'Online education market is experiencing unprecedented growth with increasing demand',
            icon: '📈'
          },
          {
            title: 'Web3 Innovation',
            description: 'Blockchain technology enables new monetization models and IP protection mechanisms',
            icon: '⛓️'
          }
        ],
        stats: {
          marketSize: {
            value: '$104B',
            label: 'Creator Economy Market Size'
          },
          growth: {
            value: '165%',
            label: 'Annual Growth Rate'
          },
          creators: {
            value: '2,500+',
            label: 'Active Creators'
          }
        },
        questions: {
          q1: {
            question: 'How do I get started as a creator?',
            answer: 'Sign up, complete your profile, and start creating your first course with our AI assistant guidance.'
          },
          q2: {
            question: 'What are the revenue sharing terms?',
            answer: 'Creators receive 70% of course revenue, plus additional incentives based on performance and quality metrics.'
          },
          q3: {
            question: 'How does NFT rights protection work?',
            answer: 'Your course content is protected by NFT technology, ensuring ownership rights and enabling royalty collection.'
          },
          q4: {
            question: 'What support do creators receive?',
            answer: 'Access to AI tools, marketing support, analytics, and dedicated creator success team assistance.'
          },
          q5: {
            question: 'How long does it take to see results?',
            answer: 'Most creators see their first earnings within 30 days of publishing their first course.'
          }
        }
      }
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
    skillMall: {
      hero: {
        badge: '技能市场',
        title: '发现AI驱动的技能',
        subtitle: '浏览数千个专家精心制作的技能体，与AI导师开始您的学习之旅',
        exploreButton: '探索技能',
        learnButton: '开始学习',
        stats: {
          courses: '精品课程',
          learners: '学习者',
          completion: '完成率',
          rating: '平均评分'
        }
      },
      topRecommended: {
        title: '热门推荐',
        subtitle: 'AI专家精选的技能',
        learnNowButton: '立即学习',
        exploreButton: '探索',
        buyButton: '购买',
        creator: '创作者',
        difficulty: '难度',
        price: '价格',
        spReward: 'SP奖励',
        sbtType: 'SBT类型',
        web3Value: 'Web3价值'
      },
      latestReleases: {
        title: '最新发布',
        subtitle: '市场中最新添加的技能',
        newBadge: '新',
        web3Value: 'Web3价值',
        certification: '认证',
        exploreButton: '探索',
        buyButton: '购买',
        viewAllButton: '查看全部',
        learnNowButton: '立即学习',
        creator: '创作者',
        difficulty: '难度',
        price: '价格',
        spReward: 'SP奖励',
        sbtType: 'SBT类型',
        category: '分类'
      },
      featuredSkills: {
        title: '精选技能',
        subtitle: '社区中热门的技能',
        viewAllButton: '查看全部',
        learnNowButton: '立即学习',
        creator: '创作者',
        difficulty: '难度',
        price: '价格',
        spReward: 'SP奖励',
        sbtType: 'SBT类型',
        category: '分类'
      },
      skillCategories: {
        title: '技能分类',
        subtitle: '按分类探索技能',
        popularBadge: '热门',
        coursesLabel: '课程数',
        studentsLabel: '学习者',
        ratingLabel: '评分',
        exploreButton: '探索课程',
        viewAllButton: '查看全部',
        categories: {
          programming: '编程',
          design: '设计',
          marketing: '营销',
          business: '商业',
          dataScience: '数据科学',
          ai: '人工智能',
          blockchain: '区块链',
          finance: '金融'
        }
      },
      cta: {
        title: '准备创建您自己的技能？',
        subtitle: '加入数千名创作者，将您的专业知识变现',
        startLearningButton: '立即开始学习',
        learnMoreButton: '了解更多',
        createSkillButton: '创建技能',
        joinCommunityButton: '加入社区',
        features: '🎯 个性化学习路径 • 🤖 AI智能辅导 • 📊 实时进度跟踪 • 🏆 权威技能认证'
      },
      common: {
        difficulty: {
          beginner: '初级',
          intermediate: '中级',
          advanced: '高级',
          expert: '专家'
        },
        rating: '评分',
        students: '学员',
        duration: '时长',
        free: '免费',
        premium: '付费'
      },
      courses: {
        featured: {
          aiFinancialTrading: {
            title: 'AI金融交易',
            subtitle: '掌握AI驱动的交易策略',
            description: '学习使用机器学习算法和量化分析技术构建智能交易系统。',
            creator: '陈博士',
            difficulty: '高级',
            sbtType: 'AI交易专家',
            skills: ['机器学习', '量化分析', '风险管理', 'Python']
          },
          aiMedicalDiagnosis: {
            title: 'AI医疗诊断',
            subtitle: 'AI驱动的医学影像分析',
            description: '掌握使用深度学习进行医学影像分析，涵盖X光、CT和MRI诊断技术。',
            creator: '张医生',
            difficulty: '专家',
            sbtType: '医疗AI专家',
            skills: ['深度学习', '计算机视觉', '医学影像', 'TensorFlow']
          },
          aiCreativeDesigner: {
            title: 'AI创意设计师',
            subtitle: 'AI辅助创意设计',
            description: '学习使用AI工具进行创意设计，包括图像生成、风格迁移和自动化设计工作流。',
            creator: '艾玛·罗德里格斯',
            difficulty: '中级',
            sbtType: '创意AI设计师',
            skills: ['AI艺术生成', '风格迁移', '创意工作流', '设计思维']
          }
        },
        latest: {
          aiVirtualStreamer: {
            title: 'AI虚拟主播',
            subtitle: '创建AI驱动的虚拟主播',
            description: '学习使用AI语音合成、动作捕捉和实时交互技术构建虚拟直播角色。',
            creator: '金亚历克斯',
            difficulty: '高级',
            sbtType: '虚拟内容创作者',
            category: '娱乐'
          },
          web3GameDevelopment: {
            title: 'Web3游戏开发',
            subtitle: '构建基于区块链的游戏',
            description: '掌握Web3游戏开发，包括NFT集成、代币经济设计和去中心化游戏机制。',
            creator: '大卫·威尔逊',
            difficulty: '高级',
            sbtType: 'Web3游戏开发者',
            category: '区块链'
          },
          aiMusicComposition: {
            title: 'AI音乐创作',
            subtitle: 'AI辅助音乐创作',
            description: '学习使用AI工具进行音乐创作，涵盖旋律生成、和声分析和自动编曲。',
            creator: '露娜·马丁内斯',
            difficulty: '中级',
            sbtType: 'AI音乐制作人',
            category: '创意艺术'
          },
          smartContractAuditing: {
            title: '智能合约审计',
            subtitle: '区块链安全专家培训',
            description: '掌握智能合约安全审计、漏洞检测和安全区块链开发最佳实践。',
            creator: '罗伯特·陈',
            difficulty: '专家',
            sbtType: '区块链安全专家',
            category: '安全'
          },
          aiVideoEditing: {
            title: 'AI视频剪辑',
            subtitle: '智能视频制作',
            description: '学习使用AI进行高级视频剪辑技术，包括自动剪切、风格迁移和内容生成。',
            creator: '索菲·泰勒',
            difficulty: '中级',
            sbtType: 'AI视频制作人',
            category: '媒体制作'
          },
          defiProtocolDevelopment: {
            title: 'DeFi协议开发',
            subtitle: '构建去中心化金融协议',
            description: '掌握DeFi协议开发，包括流动性池、收益农场和自动化做市商。',
            creator: '詹姆斯·刘',
            difficulty: '专家',
            sbtType: 'DeFi协议开发者',
            category: '金融'
          }
        }
      }
    },
    creatorHub: {
      hero: {
        badge: '创作者中心',
        title: '成为AI时代的技能创作者',
        subtitle: '利用AI技术创建高质量技能课程，获得多重收益激励',
        features: {
          aiTeacher: {
            label: 'AI智课师辅助',
            description: '零代码创建智能教学助手'
          },
          nftRights: {
            label: 'NFT版权保护',
            description: '区块链技术保护知识产权'
          },
          tripleIncentive: {
            label: '三重激励机制',
            description: '60%分成+SP积分+NFT权益'
          }
        },
        startCreatingButton: '开始创作',
        learnMoreButton: '了解更多'
      },
      successStories: {
        title: '创作者成功案例',
        subtitle: '看看其他创作者如何通过我们的平台实现成功',
        description: '每天都有新的专家通过AI智课师实现知识变现突破，下一个成功故事就是你',
        joinButton: '加入我们',
        stories: {
          story1: {
            name: '李明',
            title: 'AI算法工程师',
            achievement: '月收入增长',
            result: '300%',
            period: '6个月内',
            description: '通过创建深度学习课程，李明在6个月内实现了月收入300%的增长，同时建立了自己的技术品牌。',
            tags: ['深度学习', 'Python', 'TensorFlow']
          },
          story2: {
            name: '王小雅',
            title: 'UI/UX设计师',
            achievement: '学员数量',
            result: '10,000+',
            period: '1年内',
            description: '王小雅的设计思维课程吸引了超过10,000名学员，她的NFT设计作品也获得了可观的版权收益。',
            tags: ['UI设计', 'Figma', '设计思维']
          },
          story3: {
            name: '张博士',
            title: '区块链专家',
            achievement: '被动收入',
            result: '50,000元/月',
            period: '持续增长',
            description: '张博士的智能合约开发课程为他带来了稳定的被动收入，同时通过激励机制获得额外奖励。',
            tags: ['智能合约', 'Solidity', 'Web3']
          }
        }
      },
      revenueExplanation: {
        title: '收益模式详解',
        subtitle: '了解创作者如何通过多种方式获得收益',
        revenueTypes: {
          courseRevenue: {
            title: '课程销售收益',
            description: '学员购买课程时获得直接收益，平台抽成低至15%'
          },
          nftRevenue: {
            title: 'NFT版权收益',
            description: '课程内容自动生成NFT，享受二次交易版权收益'
          },
          incentiveRevenue: {
            title: '激励奖励收益',
            description: '基于课程质量和学员反馈获得平台激励奖励'
          }
        },
        settlement: {
          title: '结算方式',
          description: '收益每月结算一次，支持多种提现方式',
          frequency: '月度结算',
          method: '智能合约自动结算'
        },
        calculator: {
          title: '收益计算器',
          inputs: {
            students: '预期学员数',
            price: '课程定价（元）',
            completion: '完成率（%）'
          },
          results: {
            monthlyRevenue: '月收入',
            yearlyRevenue: '年收入',
            nftValue: 'NFT价值',
            totalRevenue: '总收益'
          },
          calculateButton: '计算收益'
        }
      },
      tripleIncentive: {
        badge: '💰 三重激励体系',
        title: '三重激励机制',
        subtitle: '多维度激励体系，最大化创作者收益',
        incentives: {
          financial: {
            title: '经济激励',
            description: '课程销售分成、NFT版权收益、平台奖励金',
            features: {
              leadingShare: {
                title: '领先分成比例',
                description: '行业最高的60%收入分成比例'
              },
              instantSettlement: {
                title: '即时到账',
                description: '智能合约自动结算，实时收益'
              }
            }
          },
          reputation: {
            title: '声誉激励',
            description: '专家认证、排行榜展示、社区影响力提升',
            features: {
              createToEarn: {
                title: 'Create-to-Earn',
                description: '创作即挖矿，持续获得SP积分'
              },
              airdropEligibility: {
                title: '空投凭证',
                description: '优先获得平台代币空投资格'
              }
            }
          },
          growth: {
            title: '成长激励',
            description: 'AI工具升级、优先推荐、专属培训资源',
            features: {
              skillAgent: {
                title: 'Skill Agent',
                description: 'AI技能体NFT，永久资产确权'
              },
              ipProtection: {
                title: 'IP确权',
                description: '区块链技术保护知识产权'
              }
            }
          }
        }
      },
      creatorStudio: {
        badge: '⭐ AI智课师体验窗口',
        title: '创作者工作室',
        subtitle: '一站式课程创作平台',
        introTitle: '零门槛介绍说明',
        liveCreationTitle: '实时创作窗口',
        features: {
          aiAssistant: {
            title: 'AI智能助手',
            description: 'AI辅助的课程内容生成和优化工具'
          },
          contentCreation: {
            title: '内容创作',
            description: '专业的视频录制和编辑工具'
          },
          analytics: {
            title: '数据分析',
            description: '详细的学员行为和收益分析'
          }
        },
        tryNowButton: '立即体验'
      },
      faq: {
        title: '常见问题',
        subtitle: '关于创作者中心的常见问题解答',
        whyNowTitle: '为什么现在是成为创作者的最佳时机？',
        whyNowDescription: 'AI技术的发展降低了内容创作门槛，同时市场对高质量技能培训的需求急剧增长。',
        painPoints: [
          {
            title: '内容创作门槛高',
            description: '传统内容创作需要大量技术技能和昂贵设备',
            icon: '🚧'
          },
          {
            title: '变现渠道有限',
            description: '创作者难以找到除基础课程销售外的可持续收入来源',
            icon: '💸'
          },
          {
            title: '知识产权保护难',
            description: '内容创作者面临知识产权保护的挑战',
            icon: '🔒'
          }
        ],
        whyNowReasons: [
          {
            title: 'AI赋能创作工具',
            description: '先进的AI助手大幅降低内容创作时间和复杂度',
            icon: '🤖'
          },
          {
            title: '市场需求增长',
            description: '在线教育市场正经历前所未有的增长，需求不断增加',
            icon: '📈'
          },
          {
            title: 'Web3技术创新',
            description: '区块链技术实现新的变现模式和知识产权保护机制',
            icon: '⛓️'
          }
        ],
        stats: {
          marketSize: {
            value: '¥5000亿',
            label: '在线教育市场规模'
          },
          growth: {
            value: '25%',
            label: '年增长率'
          },
          creators: {
            value: '100万+',
            label: '活跃创作者需求'
          }
        },
        questions: {
          q1: {
            question: '我需要什么技能才能成为创作者？',
            answer: '只要你在某个领域有专业知识或经验，就可以成为创作者。我们的AI工具会帮助你优化内容创作过程。'
          },
          q2: {
            question: '创作课程需要多长时间？',
            answer: '借助AI辅助工具，一门基础课程通常可以在1-2周内完成创作，包括内容编写、视频录制和互动元素设计。'
          },
          q3: {
            question: '如何保护我的知识产权？',
            answer: '我们使用NFT技术为每门课程生成唯一的数字版权证书，确保你的知识产权得到区块链级别的保护。'
          },
          q4: {
            question: '收益如何分配？',
            answer: '创作者可获得课程销售收入的85%，同时享受NFT二次交易收益和平台激励奖励。'
          },
          q5: {
            question: '平台提供哪些支持？',
            answer: '我们提供AI创作工具、营销推广支持、技术培训、社区交流和专属客服等全方位支持。'
          }
        }
      }
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