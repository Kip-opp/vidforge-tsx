/**
 * AI Video Generation Models Data
 * TypeScript interfaces and data for the VidForge directory
 */

// ===========================================
// TypeScript Interfaces
// ===========================================

interface AIVideoModel {
    id: string;
    name: string;
    company: string;
    description: string;
    fullDescription: string;
    website: string;
    pricing: 'free' | 'freemium' | 'paid';
    categories: ('text-to-video' | 'image-to-video' | 'animation' | 'video-to-video')[];
    features: string[];
    launchYear: number;
    maxDuration: string;
    resolution: string;
    rating: number;
    popularity: number;
    icon: string;
    iconColor: string;
}

interface Category {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    useCases: string[];
    futureImpact: string[];
}

interface FuturePrediction {
    year: string;
    title: string;
    description: string;
    impact: 'low' | 'medium' | 'high' | 'revolutionary';
}

// ===========================================
// Category Data
// ===========================================

export const categories: Category[] = [
    {
        id: 'text-to-video',
        name: 'Text-to-Video',
        description: 'Generate videos from text descriptions using AI',
        icon: '📝',
        color: '#ff3366',
        useCases: [
            'Film & Movie Production',
            'Advertising & Marketing',
            'Social Media Content',
            'Educational Videos',
            'Storyboarding'
        ],
        futureImpact: [
            '完全自动化电影制作',
            '个性化广告实时生成',
            '即时内容创作'
        ]
    },
    {
        id: 'image-to-video',
        name: 'Image-to-Video',
        description: 'Animate static images into dynamic videos',
        icon: '🖼️',
        color: '#00d4ff',
        useCases: [
            'Photo Animation',
            'Product Visualization',
            'Historical Restoration',
            'Art Bring to Life',
            'Character Animation'
        ],
        futureImpact: [
            '静态照片复活',
            '老照片动态化',
            '艺术作品互动化'
        ]
    },
    {
        id: 'animation',
        name: 'Animation',
        description: 'Create animated content from various inputs',
        icon: '🎬',
        color: '#a855f7',
        useCases: [
            'Cartoon Creation',
            'Explainer Videos',
            'Gaming Content',
            'Anime Production',
            'Motion Graphics'
        ],
        futureImpact: [
            'AI驱动动画制作',
            '即时角色动画',
            '个性化动漫生成'
        ]
    },
    {
        id: 'video-to-video',
        name: 'Video-to-Video',
        description: 'Transform and enhance existing videos',
        icon: '🎥',
        color: '#f97316',
        useCases: [
            'Style Transfer',
            'Video Enhancement',
            'Face Swap',
            'Age Modification',
            'Quality Upscaling'
        ],
        futureImpact: [
            '视频风格即时转换',
            '虚拟形象生成',
            '电影级后期制作自动化'
        ]
    }
];

// ===========================================
// AI Video Models Data
// ===========================================

export const aiVideoModels: AIVideoModel[] = [
    // Text-to-Video Models
    {
        id: 'sora',
        name: 'Sora',
        company: 'OpenAI',
        description: 'Groundbreaking text-to-video model generating realistic videos up to 60 seconds.',
        fullDescription: 'OpenAI\'s Sora represents a paradigm shift in AI video generation, capable of creating highly realistic and imaginative videos from text descriptions. It can generate complex scenes with multiple characters, specific motions, and detailed backgrounds. The model demonstrates remarkable understanding of physical world physics and can create videos up to 60 seconds long.',
        website: 'https://openai.com/sora',
        pricing: 'freemium',
        categories: ['text-to-video'],
        features: ['60s video generation', 'Complex scene understanding', 'Physics simulation', 'Multi-character scenes', 'Background consistency'],
        launchYear: 2024,
        maxDuration: '60 seconds',
        resolution: 'Up to 1920x1080',
        rating: 4.9,
        popularity: 98,
        icon: 'S',
        iconColor: '#1a1a2e'
    },
    {
        id: 'runway-gen3',
        name: 'Runway Gen-3',
        company: 'Runway',
        description: 'Advanced multi-modal video generation with unprecedented control.',
        fullDescription: 'Runway Gen-3 Alpha represents the latest in AI video synthesis, offering improved fidelity, consistency, and control over motion and style. It supports text-to-video, image-to-video, and video-to-video transformations with advanced editing capabilities.',
        website: 'https://runwayml.com',
        pricing: 'paid',
        categories: ['text-to-video', 'image-to-video', 'video-to-video'],
        features: ['Multi-modal input', 'Advanced controls', 'Video editing', 'Motion brush', 'Consistent characters'],
        launchYear: 2024,
        maxDuration: '10 seconds',
        resolution: '1280x720',
        rating: 4.7,
        popularity: 92,
        icon: 'R',
        iconColor: '#2d1b4e'
    },
    {
        id: 'pika',
        name: 'Pika Labs',
        company: 'Pika',
        description: 'Fast and versatile AI video generation platform.',
        fullDescription: 'Pika Labs has quickly become one of the most popular AI video generation tools, known for its speed and quality. It offers both text-to-video and image-to-video capabilities with easy-to-use editing features. The platform continuously updates with new capabilities.',
        website: 'https://pika.art',
        pricing: 'freemium',
        categories: ['text-to-video', 'image-to-video'],
        features: ['Fast generation', 'Image to video', 'Video editing', 'Sound effects', 'API access'],
        launchYear: 2023,
        maxDuration: '10 seconds',
        resolution: '1024x576',
        rating: 4.6,
        popularity: 88,
        icon: 'P',
        iconColor: '#0f172a'
    },
    {
        id: 'luma-dream',
        name: 'Dream Machine',
        company: 'Luma AI',
        description: 'Photorealistic video generation with exceptional consistency.',
        fullDescription: 'Luma AI\'s Dream Machine produces photorealistic videos with exceptional consistency and natural motion from text or images. It excels at creating human-like movements and maintaining visual coherence across frames.',
        website: 'https://lumalabs.ai/dream-machine',
        pricing: 'freemium',
        categories: ['text-to-video', 'image-to-video'],
        features: ['Photorealistic', 'Natural motion', 'Character consistency', 'High quality output', 'Image animation'],
        launchYear: 2024,
        maxDuration: '5 seconds',
        resolution: '1536x1024',
        rating: 4.5,
        popularity: 85,
        icon: 'D',
        iconColor: '#1e3a5f'
    },
    {
        id: 'kling',
        name: 'Kling AI',
        company: 'Kuaishou',
        description: 'Powerful Chinese text-to-video model with cinematic quality.',
        fullDescription: 'Kling AI from Kuaishou is a powerful text-to-video model from China capable of generating cinematic-quality videos with complex motion and realistic physics. It supports videos up to 2 minutes long and offers advanced control options.',
        website: 'https://kling.ai',
        pricing: 'freemium',
        categories: ['text-to-video'],
        features: ['2 minute video', 'Cinematic quality', 'Complex motion', 'Physics simulation', 'Chinese language support'],
        launchYear: 2024,
        maxDuration: '2 minutes',
        resolution: '1920x1080',
        rating: 4.7,
        popularity: 90,
        icon: 'K',
        iconColor: '#1f1f1f'
    },
    {
        id: 'minimax',
        name: 'MiniMax Video',
        company: 'MiniMax',
        description: 'Chinese AI startup offering high-quality video generation.',
        fullDescription: 'MiniMax Video is a cutting-edge text-to-video model from Chinese AI startup MiniMax. It offers high-quality output with good prompt adherence and is particularly strong in handling complex, multi-scene videos.',
        website: 'https://minimax.io',
        pricing: 'freemium',
        categories: ['text-to-video'],
        features: ['High quality', 'Complex scenes', 'Multi-shot videos', 'Fast processing', 'Chinese optimization'],
        launchYear: 2024,
        maxDuration: '10 seconds',
        resolution: '1280x720',
        rating: 4.4,
        popularity: 78,
        icon: 'M',
        iconColor: '#1e293b'
    },
    {
        id: 'haiper',
        name: 'Haiper',
        company: 'Haiper',
        description: 'Perceptual AI platform for video generation and editing.',
        fullDescription: 'Haiper is a perceptual AI platform that offers both video generation and video editing capabilities. It combines text-to-video, image-to-video, and video-to-video features in one unified platform.',
        website: 'https://haiper.ai',
        pricing: 'freemium',
        categories: ['text-to-video', 'image-to-video', 'video-to-video'],
        features: ['Video editing', 'Text to video', 'Image to video', 'Video extension', 'Repainting'],
        launchYear: 2024,
        maxDuration: '14 seconds',
        resolution: '1280x720',
        rating: 4.3,
        popularity: 75,
        icon: 'H',
        iconColor: '#0f172a'
    },
    // Image-to-Video Models
    {
        id: 'runway-mb',
        name: 'Motion Brush',
        company: 'Runway',
        description: 'Animate specific regions of static images.',
        fullDescription: 'Motion Brush is an innovative tool that brings static images to life by applying motion to specific regions. It allows creators to select parts of an image and animate them while keeping other areas static.',
        website: 'https://runwayml.com/features/motion-brush',
        pricing: 'paid',
        categories: ['image-to-video', 'animation'],
        features: ['Selective animation', 'Region control', 'Motion presets', 'Image to video', 'Precise control'],
        launchYear: 2023,
        maxDuration: '4 seconds',
        resolution: '1024x576',
        rating: 4.6,
        popularity: 82,
        icon: 'M',
        iconColor: '#2d1b4e'
    },
    {
        id: 'kaiber',
        name: 'Kaiber',
        company: 'Kaiber',
        description: 'Artistic video generation favored by musicians.',
        fullDescription: 'Kaiber is an artistic AI video generation platform particularly favored by musicians and creative professionals. It excels at creating unique, stylized outputs and music visualization capabilities.',
        website: 'https://kaiber.ai',
        pricing: 'freemium',
        categories: ['text-to-video', 'image-to-video', 'animation'],
        features: ['Artistic styles', 'Music visualization', 'Unique aesthetics', 'Storytelling', 'Creative freedom'],
        launchYear: 2023,
        maxDuration: '90 seconds',
        resolution: '1280x720',
        rating: 4.4,
        popularity: 77,
        icon: 'K',
        iconColor: '#2e1065'
    },
    {
        id: 'leonardo-phoenix',
        name: 'Leonardo Phoenix',
        company: 'Leonardo AI',
        description: 'High-fidelity video generation within popular image platform.',
        fullDescription: 'Leonardo Phoenix brings video generation capabilities to the popular Leonardo AI image creation platform. It offers high-quality outputs with strong prompt adherence and excellent visual consistency.',
        website: 'https://leonardo.ai',
        pricing: 'freemium',
        categories: ['text-to-video', 'image-to-video'],
        features: ['High fidelity', 'Prompt accuracy', 'Multiple styles', 'Fast generation', 'Platform integration'],
        launchYear: 2024,
        maxDuration: '4 seconds',
        resolution: '1024x576',
        rating: 4.5,
        popularity: 83,
        icon: 'L',
        iconColor: '#1e293b'
    },
    {
        id: 'morph',
        name: 'Morph Studio',
        company: 'Morph',
        description: 'Turn images and ideas into stunning videos.',
        fullDescription: 'Morph Studio specializes in transforming static images and ideas into dynamic videos. It offers intuitive controls and high-quality output suitable for content creators and marketers.',
        website: 'https://morphstudio.io',
        pricing: 'freemium',
        categories: ['image-to-video', 'animation'],
        features: ['Image to video', 'Idea to video', 'Style transfer', 'Easy editing', 'High quality'],
        launchYear: 2024,
        maxDuration: '5 seconds',
        resolution: '1024x576',
        rating: 4.3,
        popularity: 72,
        icon: 'M',
        iconColor: '#1e1b4b'
    },
    // Video-to-Video Models
    {
        id: 'runway-gen2',
        name: 'Runway Gen-2',
        company: 'Runway',
        description: 'Previous generation but still powerful video synthesis.',
        fullDescription: 'While Gen-3 is out, Gen-2 remains a powerful and accessible option for video generation. It offers reliable text-to-video and image-to-video capabilities with a proven track record.',
        website: 'https://runwayml.com',
        pricing: 'paid',
        categories: ['text-to-video', 'image-to-video'],
        features: ['Proven quality', 'Video to video', 'Image to video', 'Consistent results', 'Affordable'],
        launchYear: 2023,
        maxDuration: '4 seconds',
        resolution: '768x768',
        rating: 4.4,
        popularity: 80,
        icon: 'G',
        iconColor: '#2d1b4e'
    },
    {
        id: 'topaz-video',
        name: 'Video AI',
        company: 'Topaz Labs',
        description: 'Professional video enhancement and upscaling.',
        fullDescription: 'Topaz Video AI specializes in video enhancement, upscaling, and interpolation. It\'s used by professionals for improving video quality, adding frames for smooth slow-motion, and enhancing details.',
        website: 'https://topazlabs.com/video-ai',
        pricing: 'paid',
        categories: ['video-to-video'],
        features: ['Video upscaling', 'Frame interpolation', 'Stabilization', 'Denoising', 'Professional grade'],
        launchYear: 2023,
        maxDuration: 'Unlimited',
        resolution: 'Up to 8K',
        rating: 4.8,
        popularity: 85,
        icon: 'T',
        iconColor: '#1e293b'
    },
    {
        id: 'warp-labs',
        name: 'Warp Video',
        company: 'Warp Labs',
        description: 'AI-powered video style transfer and effects.',
        fullDescription: 'Warp Video offers AI-powered video style transfer and effects, allowing creators to apply artistic styles to their videos with real-time preview and high-quality output.',
        website: 'https://warplabs.xyz',
        pricing: 'freemium',
        categories: ['video-to-video', 'animation'],
        features: ['Style transfer', 'Real-time preview', 'Multiple effects', 'Easy to use', 'Fast processing'],
        launchYear: 2024,
        maxDuration: '30 seconds',
        resolution: '1920x1080',
        rating: 4.2,
        popularity: 68,
        icon: 'W',
        iconColor: '#1e1b4b'
    },
    // Additional Models
    {
        id: 'cogvideo',
        name: 'CogVideo',
        company: 'Tsinghua & Shanghai AI Lab',
        description: 'Open-source large-scale text-to-video model.',
        fullDescription: 'CogVideo is an open-source text-to-video model developed by Tsinghua University and Shanghai AI Lab. It\'s one of the largest open-source video generation models and continues to improve with community contributions.',
        website: 'https://github.com/THUDM/CogVideo',
        pricing: 'free',
        categories: ['text-to-video'],
        features: ['Open source', 'Large scale', 'Customizable', 'Community driven', 'Free to use'],
        launchYear: 2023,
        maxDuration: '6 seconds',
        resolution: '1024x576',
        rating: 4.1,
        popularity: 70,
        icon: 'C',
        iconColor: '#1e3a5f'
    },
    {
        id: 'model-scope',
        name: 'ModelScope',
        company: 'Alibaba',
        description: 'Text-to-video from Alibaba\'s research division.',
        fullDescription: 'ModelScope offers text-to-video generation from Alibaba\'s research division. It provides good quality output with support for Chinese language and is integrated into the larger ModelScope ecosystem.',
        website: 'https://modelscope.cn',
        pricing: 'freemium',
        categories: ['text-to-video'],
        features: ['Chinese support', 'Large model', 'Ecosystem', 'API access', 'Continuous updates'],
        launchYear: 2023,
        maxDuration: '5 seconds',
        resolution: '1024x576',
        rating: 4.2,
        popularity: 74,
        icon: 'M',
        iconColor: '#1f2937'
    },
    {
        id: 'zero-shot',
        name: 'ZeroScope',
        company: 'cogfocus',
        description: 'Open-source video generation with custom training.',
        fullDescription: 'ZeroScope is an open-source video generation model built on top of Stable Diffusion. It allows for custom training and offers good quality output for those who want to run their own video generation.',
        website: 'https://huggingface.co/cogfocus/zeroscopev2',
        pricing: 'free',
        categories: ['text-to-video'],
        features: ['Open source', 'Customizable', 'Self-hosted', 'Stable diffusion based', 'Active community'],
        launchYear: 2023,
        maxDuration: '2.4 seconds',
        resolution: '576x320',
        rating: 3.9,
        popularity: 65,
        icon: 'Z',
        iconColor: '#1e1b4b'
    },
    {
        id: 'genmo',
        name: 'Genmo',
        company: 'Genmo',
        description: 'Creative video generation with editing capabilities.',
        fullDescription: 'Genmo combines video generation with powerful editing capabilities. It allows users to create and edit videos in a unified interface, making it accessible for both beginners and professionals.',
        website: 'https://genmo.ai',
        pricing: 'freemium',
        categories: ['text-to-video', 'image-to-video', 'video-to-video'],
        features: ['Video creation', 'Editing tools', 'Image to video', 'Video to video', 'Creative suite'],
        launchYear: 2024,
        maxDuration: '6 seconds',
        resolution: '1024x576',
        rating: 4.3,
        popularity: 76,
        icon: 'G',
        iconColor: '#1e293b'
    },
    {
        id: 'adobe-firefly',
        name: 'Adobe Firefly Video',
        company: 'Adobe',
        description: 'AI video generation integrated with Adobe ecosystem.',
        fullDescription: 'Adobe Firefly Video is Adobe\'s entry into AI video generation, integrated with the Creative Cloud ecosystem. It offers video generation capabilities that work seamlessly with other Adobe products.',
        website: 'https://firefly.adobe.com',
        pricing: 'paid',
        categories: ['text-to-video'],
        features: ['Adobe integration', 'Professional tools', 'Commercial safe', 'High quality', 'Workflow optimization'],
        launchYear: 2024,
        maxDuration: '5 seconds',
        resolution: '1920x1080',
        rating: 4.5,
        popularity: 82,
        icon: 'F',
        iconColor: '#1e293b'
    },
    {
        id: 'meta-cama',
        name: 'Emu Video',
        company: 'Meta',
        description: 'Meta\'s text-to-video and image-to-video model.',
        fullDescription: 'Meta\'s Emu (Empirical Understanding of Multimodal) Video model represents Meta\'s entry into text-to-video and image-to-video generation. It benefits from Meta\'s research in multimodal AI.',
        website: 'https://emu-video.metademolab.com',
        pricing: 'free',
        categories: ['text-to-video', 'image-to-video'],
        features: ['Research based', 'Text to video', 'Image to video', 'Open research', 'Meta backing'],
        launchYear: 2023,
        maxDuration: '4 seconds',
        resolution: '512x512',
        rating: 4.0,
        popularity: 72,
        icon: 'E',
        iconColor: '#1e3a8a'
    }
];

// ===========================================
// Future Predictions Data
// ===========================================

export const futurePredictions: FuturePrediction[] = [
    {
        year: '2025',
        title: 'Real-Time Video Generation',
        description: 'AI will generate video in real-time, enabling live streaming with AI-created content.',
        impact: 'revolutionary'
    },
    {
        year: '2025',
        title: 'Movie-Length Productions',
        description: 'AI will produce full-length movies (90+ minutes) with consistent characters and plot.',
        impact: 'high'
    },
    {
        year: '2026',
        title: 'Personalized Content at Scale',
        description: 'Every viewer gets uniquely generated video content tailored to their preferences.',
        impact: 'revolutionary'
    },
    {
        year: '2026',
        title: 'Virtual Production Mainstream',
        description: 'AI video tools become standard in Hollywood and independent film production.',
        impact: 'high'
    },
    {
        year: '2027',
        title: 'Thought-to-Video',
        description: 'Brain-computer interfaces allow generating video directly from thoughts.',
        impact: 'revolutionary'
    },
    {
        year: '2027',
        title: 'Complete Virtual Worlds',
        description: 'AI generates entire interactive 3D worlds in real-time video.',
        impact: 'revolutionary'
    },
    {
        year: '2028',
        title: 'Universal Translation',
        description: 'Video content automatically generated in every language with lip-sync.',
        impact: 'high'
    },
    {
        year: '2028',
        title: 'AI Filmmaker Assistants',
        description: 'AI acts as full co-director, handling scripting, casting, and editing.',
        impact: 'medium'
    }
];

// ===========================================
// Helper Functions
// ===========================================

export function getModelsByCategory(categoryId: string): AIVideoModel[] {
    return aiVideoModels.filter(model => model.categories.includes(categoryId as any));
}

export function getCategoryById(categoryId: string): Category | undefined {
    return categories.find(cat => cat.id === categoryId);
}

export function searchModels(query: string): AIVideoModel[] {
    const lowerQuery = query.toLowerCase();
    return aiVideoModels.filter(model => 
        model.name.toLowerCase().includes(lowerQuery) ||
        model.company.toLowerCase().includes(lowerQuery) ||
        model.description.toLowerCase().includes(lowerQuery) ||
        model.features.some(f => f.toLowerCase().includes(lowerQuery))
    );
}

export function sortByPopularity(models: AIVideoModel[]): AIVideoModel[] {
    return [...models].sort((a, b) => b.popularity - a.popularity);
}

export function sortByRating(models: AIVideoModel[]): AIVideoModel[] {
    return [...models].sort((a, b) => b.rating - a.rating);
}

export function getTotalModels(): number {
    return aiVideoModels.length;
}

export function getCategoryStats(): { category: string; count: number }[] {
    return categories.map(cat => ({
        category: cat.name,
        count: getModelsByCategory(cat.id).length
    }));
}
