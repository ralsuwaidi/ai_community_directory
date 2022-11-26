
import { SlSocialGithub, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";


const data = {
    flyers: [
        {
            username: "pub-cybersec",
            name: "Marya AlHabshi",
            headline: "Product, Design, Research, Partnerships at Notion",
            position: "NotionHQ, Dubai",
            about: "I m a software engineer with a lot of experience in Java and Matlab, I've worked with many institutes and did many things but now I have my startup and would like to make it the next UAE home grown unicorn",
            banner: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            highlights: [
                'Worked 3 years with google',
                'Joined competition',
                'Working on climate change',
                'Open to network'
            ],
            socials: [
                {
                    name: "LinkedIn",
                    url: "url",
                    icon: SlSocialLinkedin,
                },
                {
                    name: "Twitter",
                    url: "url",
                    icon: SlSocialTwitter,
                },
                {
                    name: "Github",
                    url: "url",
                    icon: SlSocialGithub,
                },
            ],
            timeline: [
                {
                    date: "November 2022",
                    title: "Joined The AI Community",
                    description: "",
                },
                {
                    date: "October 2022",
                    title: "Lead AI Team",
                    description: "Joined a project where I was leading the AI Code search",
                },
            ],
            metadata: [
                {
                    key: "Occupation",
                    value: "Software Engineer",
                },
                {
                    key: "Years of Experience",
                    value: "7",
                },
                {
                    key: "Academic Degree",
                    value: "Bachelors of Engineering",
                },
            ]
        },
    ],
}

export {data}
