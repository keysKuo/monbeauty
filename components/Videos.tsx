import React from 'react'
import TikTokEmbed from './TikTokEmbed'
import Heading from './Heading'

export default function Videos() {
    return (
        <section className='w-full my-16'>
            <Heading title='TikTok Videos' />
            <div className="flex laptop:flex-row flex-col justify-center gap-4">
                <TikTokEmbed videoUrl="https://www.tiktok.com/@monbeauty1412/video/7401326014770466066?is_from_webapp=1&sender_device=pc&web_id=7371070402397193735" />
                <TikTokEmbed videoUrl="https://www.tiktok.com/@monbeauty1412/video/7413968298909486343?is_from_webapp=1&sender_device=pc&web_id=7371070402397193735" />
                <TikTokEmbed videoUrl="https://www.tiktok.com/@monbeauty1412/video/7392606290012425479?is_from_webapp=1&sender_device=pc&web_id=7371070402397193735" />
            </div>
        </section>
    )
}
