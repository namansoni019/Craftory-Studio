import { Code, Smartphone, Cpu } from 'lucide-react';
import React from 'react';

export interface ServiceDetailItem {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    tags: string[];
    detailContent: {
        heroSub: string;
        deliverablesText: string;
        capabilities: string[];
        technologies: string[];
    };
}

export const servicesData: ServiceDetailItem[] = [
    {
        id: 'web-experiences',
        title: 'Web Experiences',
        description: 'High-performance websites engineered with refined UI, seamless interactions, and clean architecture — designed to convert attention into action.',
        icon: Code,
        tags: ['Design', 'Performance', 'Scalability'],
        detailContent: {
            heroSub: 'Crafting digital products that balance performance, usability, and refined visual design.',
            deliverablesText: 'We build web platforms that not only look stunning but are engineered to load instantly and scale effortlessly. Our focus is on clear user journeys that drive measurable business outcomes.',
            capabilities: [
                'Responsive High-Performance Frontends',
                'Advanced 3D WebGL Interactions',
                'Custom Content Management Systems',
                'SEO-Optimized Architectures',
                'E-commerce Solutions'
            ],
            technologies: ['React', 'Next.js', 'Framer Motion', 'Three.js', 'Node.js']
        }
    },
    {
        id: 'mobile-applications',
        title: 'Mobile Applications',
        description: 'Purpose-built mobile apps crafted for fluid interaction, platform consistency, and long-term product evolution.',
        icon: Smartphone,
        tags: ['iOS', 'Android', 'Cross-Platform'],
        detailContent: {
            heroSub: 'Native-feel applications that place your brand directly in the hands of your users.',
            deliverablesText: 'We design and develop mobile products that prioritize smooth interactions, minimal battery drain, and intuitive navigation loops, ensuring users stay engaged and return frequently.',
            capabilities: [
                'UI/UX Design for iOS & Android',
                'Cross-Platform Development',
                'Native Module Integration',
                'Offline-first Architectures',
                'App Store Deployment & Analytics'
            ],
            technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL']
        }
    },
    {
        id: 'ai-automation',
        title: 'AI & Automation',
        description: 'Intelligent systems that streamline workflows, unlock insights, and elevate operational efficiency through applied AI.',
        icon: Cpu,
        tags: ['Automation', 'Intelligence', 'Systems'],
        detailContent: {
            heroSub: 'Engineering intelligent tools that allow your team to transcend repetitive tasks.',
            deliverablesText: 'We integrate cutting-edge machine learning and LLM capabilities into your existing workflows, transforming unstructured data into actionable insights and automating time-consuming operational bottlenecks.',
            capabilities: [
                'LLM & Chatbot Integration',
                'Automated Data Processing Pipelines',
                'Predictive Analytics Dashboards',
                'Custom AI Agent Solutions',
                'Workflow Automation Scaffolding'
            ],
            technologies: ['OpenAI', 'Python', 'TensorFlow', 'LangChain', 'AWS']
        }
    }
];
