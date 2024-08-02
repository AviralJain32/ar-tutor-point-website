import React from 'react'
import DemoVideo from "../assets/Demo_Video.mp4"
import YouTubeEmbed from '../components/YouTubeEmbed';

const DemoVideoPage = () => {

  const videoIds = [
    'f5pTCjR-n24', // Example Video ID
    '2h4MJFwZCjM', // Example Video ID
    'CwKZxXzyeog'  // Example Video ID
  ];


  return (
    <div className='font-Main-font'>
      <div className="flex justify-center">
        <h1 className="text-[32px] font-extrabold">Demo Videos</h1>
      </div>    
      <div className='flex justify-center'>
        <video src={DemoVideo} autoPlay={true} muted loop={true} controls className='h-auto w-auto sm:w-[600px] sm:h-[400px]'/>
      </div>
      <div className='flex flex-col items-center justify-center my-4'>
        <h1 className="text-[20px] font-semibold p-2">More Demo Videos</h1>
        <div className='flex flex-col gap-5 justify-center items-center sm:flex-row sm:gap-20'>
          {videoIds.map((id, index) => (
            <YouTubeEmbed key={index} videoId={id} />
          ))}
        </div>
    </div>
    </div>
  )
}


export default DemoVideoPage

// <iframe width="560" height="315" src="https://www.youtube.com/embed/qk3kw8XpOfE?si=-UQb8izaeT_gkNZb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>