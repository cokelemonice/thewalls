import Navbar from '@/components/Navbar'
import React from 'react'

const Privacypolicy = () => {
  return (
    <>
      <Navbar />
      <div className="text-lg text-center px-28 mt-28">
        <h2 className="text-2xl font-bold">Privacy Policy</h2>
        <br />
        <br />
        <p>
          Spotify was developed as an open source app powered by the
          Spotify/Apple Music Web API. By choosing to use this app, you
          agree to the use of your Spotify account username and data for your top
          artists and tracks.
        </p>
        <br />
        <p>
          None of the data used by Gramhophone is stored or collected anywhere, and
          it is NOT shared with any third parties. All information is used solely
          for displaying your Top Tracks .
        </p>
        <br />
        <p>
          Although you can rest assured that your data is not being stored or used
          maliciously, if you would like to revoke Gramhophone&#39;s permissions, you
          can visit
          <a href="http://www.spotify.com/account/apps/?_ga=2.57194153.2059435232.1677244602-1044990631.1616788427"> your apps page</a>
          and click &#39;REMOVE ACCESS&#39; on Gramhophone.
          <a href="https://support.spotify.com/us/article/spotify-on-other-apps/"> Here </a>
          is a more detailed guide for doing so.
        </p>
      </div>
    </>
  )
}

export default Privacypolicy