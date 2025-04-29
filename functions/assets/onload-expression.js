;(function () {
  const script = document.createElement('script')
  script.src = 'https://ecom-braspag.web.app/dist/hash-card.min.js'
  script.async = true
  document.body.appendChild(script)

  if (window._braspag3dsToken) {
    const script3ds = document.createElement('script')
    script3ds.src = 'https://ecom-braspag.web.app/dist/3ds-client.min.js'
    script3ds.async = true
    document.body.appendChild(script3ds)
  }
}())
