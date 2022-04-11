import { Router } from 'itty-router'
import flightsMock from './mocks/flights'
import hotelsMock from './mocks/hotels'
import { toursMock, allaLejitosTours } from './mocks/tours'

// Create a new router
const router = Router()

router.get('/api/hotels/', ({ params }) => {
  const data = JSON.stringify(hotelsMock)
  return new Response(data, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
})

router.get('/api/tours/', ({ params }) => {
  const data = JSON.stringify(toursMock)
  return new Response(data, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
})

router.get('/api/tours/:idTourAgency', ({ params }) => {
  const data = JSON.stringify(allaLejitosTours)
  return new Response(data, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
})

router.get('/api/flights/', ({ params }) => {
  const data = JSON.stringify(flightsMock)
  return new Response(data, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
})

router.all('*', () => new Response('404, not found!', { status: 404 }))

addEventListener('fetch', e => {
  e.respondWith(router.handle(e.request))
})
