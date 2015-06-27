### Selecting and Displaying an Image Chosen from Thumbnails

In one of our recent cohort group projects, I worked on a feature I assume will be very common in the future as a front end developer. The project was to recreate an etsy product page using some cached data from the etsy API, and the feature was to display the main product image with additional functionality for changing that image per a collection of product thumbnails. To accomplish this, I first set the main image as default using my JSON object, then used jQuery to attach an event handler to a parent element for the thumbnails. Because the thumbnails were added to the page using `v-repeat` from the vue.js library, setting the event listener to a parent element was crucial because the content of the thumbnail row would be added dynamically after initial page load. The code I used to accomplish the image rotation is included below, as well as my process for setting the selected thumbnail to class='active' for future styling:

```JavaScript
$('.product-images')
   .on('click', 'a[href^="#"]', function(event){
     event.preventDefault();
     var photo_fullsize = $(this).find('img').attr('src').replace('75x75', '570x570');
     $('img', '.main-image').attr('src', photo_fullsize);
     $(this).add(this.hash).trigger('activate');
   })

   .on('activate', 'a', function(event){
     $(this)
       .addClass('active')
     .siblings()
       .removeClass('active');
   })
```

A couple of important things to note here would be the use of .on('click'...) as opposed to using `$('a', '.product-images').click...` as I've used in the past. Additionally, I've begun taking baby steps toward proper separation of concerns with regard to an event handler firing, and the side-effects of that the event. Using `.trigger('activate')` is a prime example that I used to set the active class on the appropriate thumbnail.

To perform the meat of the task, I am assigned the `src` attribute of the clicked thumbnail to a variable, and then used that variable to reassign the `src` attribute of `.main-image`. Yahtzee.
