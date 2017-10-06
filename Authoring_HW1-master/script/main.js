(function () {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeader = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

      function changeElements() {
        // i want to load dynamic content here
        //debugger;
        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];

        // remove all of the thumbnail images
        while (subImages.firstChild) {
          subImages.removeChild(subImages.firstChild);
        }
        // create an image element and add it to the page
        objectIndex.images.forEach(function(element, index){
          let newSubImg = document.createElement('img');

          // add a css class
          newSubImg.classList.add('thumb');
          // add an image source
          newSubImg.src = "images/" + objectIndex.images[index];
          //add an index number to the thumbnail for array reference
          newSubImg.dataset.index = index;
          // add some event handling
          newSubImg.addEventListener('click', function() {popLightbox(index, objectIndex); }, false);

          // append it to the container
          subImages.appendChild(newSubImg);
        });

        theSubhead.classList.remove(appliedClass);
        theHeader.classList.remove(appliedClass);

        theSubhead.classList.add(this.id);
        theHeader.classList.add(this.id);

        theSubhead.firstChild.nodeValue = objectIndex.headline;
        theSeasonText.firstChild.nodeValue = objectIndex.text;

        appliedClass = this.id;

        console.log(this.id);
      }

      theImages.forEach(function(element, index) {
        //loop through and do stuff to each element at the top of the page
        element.addEventListener('click', changeElements, false);
      });

      function popLightbox(currentIndex, currentObject) {

        //debugger;

        //turn on the lightbox
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";

        // turn on the lightbox
        let lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'block';

        // populate all the content on the page
        let lightboxImg = lightbox.querySelector('img');
        let lightboxClose = lightbox.querySelector('.close-lightbox');
        let lightboxDesc = lightbox.querySelector('p');

        lightboxImg.src = "images/" + currentObject.images[currentIndex];
        lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

        lightboxClose.addEventListener('click', closeLightbox, false);
      }

      function closeLightbox(){
        //console.log("The closeLightbox has fired");
        //debugger;
        //reset all the lightbox content, close the lightbox (not neccessarily in that order)
        document.body.style.overflow = "auto";

        let lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'none';

        let lightboxImg = lightbox.querySelector('img');
        let lightboxDesc = lightbox.querySelector('p');

        lightboxImg.src = " ";
        lightboxDesc.innerHTML = " ";
      }

      // initialize the app
      // theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
      // theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
      // theHeader.classList.add('spring');
      //
      //document.querySelector('#spring').click();

      changeElements.call(document.querySelector('#spring'));
})();
