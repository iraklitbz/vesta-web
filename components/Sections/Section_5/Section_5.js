import Image from "next/image";
const Section_5 = () => {
  return ( 
    <section className="prod-color-feature padding-top-xl padding-bottom-xxl position-relative z-index-1 -translate-y-2" data-theme="dark-1">
      <div className="container max-width-adaptive-lg position-relative">
        <div className="grid gap-md items-center">
          <div className="col-6@md order-2@md">
            <div className="text-sm color-contrast-medium margin-bottom-xxs">Label</div>

            <div className="text-component">
              <h1>Servicio Name</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum similique delectus voluptatibus!</p>
            </div>

            

            <div className="margin-top-md">
              <a href="#0" className="btn btn--primary">Contacto</a>
            </div>
          </div>

          <div className="col-6@md order-1@md">
            <div id="prd-color-slideshow" className="slideshow slideshow--transition-prx reveal-fx reveal-fx--translate-up js-slideshow reveal-fx--is-visible" data-navigation="off">
              <p className="sr-only">Product Color Variations</p>

              <ul className="slideshow__content">
                <li className="slideshow__item bg js-slideshow__item slideshow__item--selected">
                  <figure>
                    <Image className="block width-100%" width="625px" height="625px" src="/img/prod-color-feature-img-1.jpg" alt="Image description" />
                  </figure>
                </li>

          
              </ul>
            <div className="sr-only js-slideshow__aria-live" aria-live="polite" aria-atomic="true"></div></div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Section_5;