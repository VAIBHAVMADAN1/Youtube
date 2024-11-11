import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return;
  return (
    <div
    className="m-5 grid grid-flow-col h-fit">
      <div className="shadow-lg">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Sports</li>
          <li>Games</li>
          <li>Movies</li>
          <li>Music</li>
        </ul>
        <h1 className="font-bold pt-5">Watch later</h1>
        <ul>
          <li>Sports</li>
          <li>Games</li>
          <li>Movies</li>
          <li>Music</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar