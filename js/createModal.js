export default function createModal() {
  document.querySelector('body').insertAdjacentHTML('beforeend', `
    <div class="modal-container" aria-modal="true" role="dialog" hidden="true">
      <div class="modal">
        <div class="modal__overlay">
          <div class="modal__btn-container">
            <button class="modal__btn modal__arrow modal__arrow--left" id="left" aria-label="Previous image">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 6.75L4.75 12L10.25 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12H5"></path>
              </svg>
            </button>
            <button class="modal__btn modal__close" aria-label="Close gallery">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
              </svg>
            </button>
            <button class="modal__btn modal__arrow modal__arrow--right" id="right" aria-label="Next image">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path>
              </svg>
            </button>
          </div>
          <div class="modal__indicator-container">
         
          </div>
        </div>
        
        <div class="modal__image-container">
        
        </div>
      </div>
    </div>
    `)
}