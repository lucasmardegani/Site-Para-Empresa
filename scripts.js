const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target)
      }
    })
  })
  
  const elements = document.querySelectorAll('.hidden')
  
  elements.forEach((element) => myObserver.observe(element))
  