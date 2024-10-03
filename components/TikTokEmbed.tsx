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

        // Tự động phát video sau khi script tải
        script.onload = () => {
            // Tìm iframe chứa video TikTok sau khi script tải
            const iframe = blockquoteRef.current?.querySelector('iframe');
            if (iframe) {
                // Thêm thuộc tính autoplay
                iframe.setAttribute('autoplay', '1');
                iframe.setAttribute('muted', 'true'); // Thêm thuộc tính muted nếu cần
            }
        };

        // Cleanup script khi component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <blockquote
            ref={blockquoteRef}
            className="tiktok-embed mx-0"
            cite={videoUrl}
            data-video-id={videoUrl.split('/').pop()}
            style={{ maxWidth: '325px', minWidth: '325px' }}>
            <section>
                <a target="_blank" title="TikTok" href={videoUrl}>TikTok Video</a>
            </section>
        </blockquote>
    );
};

export default TikTokEmbed;
