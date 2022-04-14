import { Router } from 'itty-router'
import flightsMock from './mocks/flights'
import hotelsMock from './mocks/hotels'
import { toursMock, allaLejitosTours } from './mocks/tours'

// Create a new router
const router = Router()

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
  'Access-Control-Allow-Headers':
    'x-requested-with,Content-Type,origin,authorization,accept,client-sent-security-token',
  'Access-Control-Expose-Headers': 'Content-Security-Policy, Location',
}

router.get('/api/hotels/', ({ params }) => {
  const data = JSON.stringify(hotelsMock)
  return new Response(data, {
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  })
})

router.options('/api/hotels/', ({ params }) => {
  return new Response('Allow: OPTIONS, GET, HEAD, POST', {
    headers: {
      'Content-Type': 'html/text',
      ...corsHeaders,
    },
  })
})

router.get('/api/tours/', ({ params }) => {
  const data = JSON.stringify(toursMock)
  return new Response(data, {
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  })
})

router.options('/api/tours/', ({ params }) => {
  return new Response('Allow: OPTIONS, GET, HEAD, POST', {
    headers: {
      'Content-Type': 'html/text',
      ...corsHeaders,
    },
  })
})

router.get('/api/tours/:idTourAgency', ({ params }) => {
  const data = JSON.stringify(allaLejitosTours)
  return new Response(data, {
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  })
})

router.get('/api/flights/', ({ params }) => {
  const data = JSON.stringify(flightsMock)
  return new Response(data, {
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  })
})

router.options('/api/flights/', ({ params }) => {
  return new Response('Allow: OPTIONS, GET, HEAD, POST', {
    headers: {
      'Content-Type': 'html/text',
      ...corsHeaders,
    },
  })
})

router.all('*', () => new Response('404, not found!', { status: 404 }))

addEventListener('fetch', e => {
  e.respondWith(router.handle(e.request))
})
