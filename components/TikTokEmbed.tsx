'use client';

import { useEffect, useRef } from 'react';
interface TikTokEmbedProps {
    videoUrl: string;
}

const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ videoUrl }) => {
    const blockquoteRef = useRef<HTMLQuoteElement>(null);

    useEffect(() => {
        // Tải script TikTok
        const script = document.createElement('script');
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup script khi component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <blockquote
            ref={blockquoteRef}
            className="tiktok-embed"
            cite={videoUrl}
            data-video-id={videoUrl.split('/').pop()}
            style={{ maxWidth: '325px', minWidth: '325px' }}
            >
            <section>
                <a target="_blank" title="TikTok" href={videoUrl}>TikTok Video</a>
            </section>
        </blockquote>
    );
};

export default TikTokEmbed;
