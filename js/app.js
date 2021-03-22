window.onload = function () {
  Particles.init({
    selector: '.background',
    color: '#7ADFF9',
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200,
          color: '#48F2E3',
          connectParticles: false,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 100,
          connectParticles: true,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0,

          // disables particles.js
        },
      },
    ],
  })
}
