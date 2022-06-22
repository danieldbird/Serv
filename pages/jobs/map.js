import React from 'react'
import { useEffect, useRef } from 'react'
import Head from 'next/head'
import { fetchAllJobs } from '../../utils/api'

export default function Map() {
  const googlemap = useRef(null)
  useEffect(() => {
    fetchAllJobs()
      .then((jobs) => {
        var infowindow = new google.maps.InfoWindow()
        let map = new google.maps.Map(googlemap.current, {
          center: { lat: -36.848, lng: 174.764 },
          zoom: 11,
        })
        jobs.forEach((job) => {
          let marker = new google.maps.Marker({
            position: {
              lat: Number(job.lat),
              lng: Number(job.lng),
            },
            map: map,
          })
          marker.addListener('click', function () {
            infowindow.setContent(`<div>
            <a href=/jobs/${job.id} class="text-blue-500 text-xl font-medium">${job.address}, ${job.suburb}</a>
            <p class="my-1"><strong class="font-bold">Summary:</strong> ${job.summary}</p>
            <p class="my-1 leading-5"><strong class="font-bold">Description:</strong> ${job.description}</p>
            </div>`)
            infowindow.open(map, marker)
          })
        })
      })
      .catch(() => {
        console.log('Error fetching all jobs.')
      })
  })
  return (
    <div className="w-full h-full">
      <Head>
        <title>Jobs Map - Serv</title>
        <meta name="description" content="Jobs Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="map" ref={googlemap} className="w-full h-full" />
    </div>
  )
}
