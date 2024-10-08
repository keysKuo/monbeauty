import React from 'react'
import TikTokEmbed from './TikTokEmbed'
import Heading from './Heading'
import { API_URL } from '@/constants'

type VideoProps = {
    id: string,
    url: string
}

export default async function Videos() {
    const videos: VideoProps[] = await fetch(API_URL + "/api/videos", { cache: 'no-store' })
        .then(response => response.json())
        .then(result => result.data);

    return (
        <section className='w-full my-16'>
            <Heading title='TikTok Videos' />
            <div className="grid tablet:grid-cols-3 grid-cols-1 gap-0">
                {videos?.map(video => {
                    return <TikTokEmbed key={video.id} videoUrl={video.url} />
                })}
            </div>
        </section>
    )
}
