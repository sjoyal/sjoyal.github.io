## Selecting tabs with JavaScript - From vanilla.js to jQuery

Recently, our cohort was given a project to recreate the JavaScript and CSS for a Blueprint from the codrops website. The template, "Full Width Tabs" looks simple to the eye. However, getting the functionality of clicking tabs to work proved to be a struggle for everyone. In this instance, the HTML included several tabs and sections of content, and the trick for us was linking the tabs and content together so that when the appropriate tab was clicked, only the content in the associated section was displayed. Sounds easy? It wasn't. At least not for noobs with less than 3 weeks of any type of programming experience. After numerous google sessions (see: bulldogging), I made the decision to break down what needed to be done in its simplest form. After some brainstorming, I concluded, we essentially needed to do 5 things with JavaScript:
  * Add a 'click' event listener to the tabs
  * Remove the appropriate class from all tabs that indicated active (in our case this, was the class `'tab-current'`)
  * Remove the appropriate class from each content section that indicated active (in our case, this was `'content-current'`)
  * Add the class to the tab clicked (`'tab-current'`)
  * Add the class (`'content-current'`) to the appropriate content section per the tab clicked  

**My fundamental approach is included below:**

```JavaScript
// Variables to use when clicking between tabs
  var tab1 = document.querySelector('.icon-shop');
  var tab2 = document.querySelector('.icon-cup');
  var tab3 = document.querySelector('.icon-food');
  var tab4 = document.querySelector('.icon-lab');
  var tab5 = document.querySelector('.icon-truck');
  var Section1 = document.querySelector('#section-1');
  var Section2 = document.querySelector('#section-2');
  var Section3 = document.querySelector('#section-3');
  var Section4 = document.querySelector('#section-4');
  var Section5 = document.querySelector('#section-5');

// Variables for parentElements used in forEach when removing previous class from tabs/content
  var listItems = document.querySelectorAll('li');
  var contentBlock = document.querySelectorAll('section');

// Adding 'click' event listener to each element; removes active tab and content, adds new active tab and content to appropriate element
  tab1.addEventListener('click', function(){
    _.forEach(listItems, function(element){
      if (element.className === 'tab-current') {
        element.classList.remove('tab-current');
      };
    });
    _.forEach(contentBlock, function(element){
      if (element.className === 'content-current') {
        element.classList.remove('content-current');
      };
    });
    this.parentNode.classList.add('tab-current');
    Section1.classList.add('content-current');
  });


  tab2.addEventListener('click', function(){
    _.forEach(listItems, function(element){
      if (element.className === 'tab-current') {
        element.classList.remove('tab-current');
      };
    });
    _.forEach(contentBlock, function(element){
      if (element.className === 'content-current') {
        element.classList.remove('content-current');
      };
    });
    this.parentNode.classList.add('tab-current');
    Section2.classList.add('content-current');
  });


  tab3.addEventListener('click', function(){
    _.forEach(listItems, function(element){
      if (element.className === 'tab-current') {
        element.classList.remove('tab-current');
      };
    });
    _.forEach(contentBlock, function(element){
      if (element.className === 'content-current') {
        element.classList.remove('content-current');
      };
    });
    this.parentNode.classList.add('tab-current');
    Section3.classList.add('content-current');
  });


  tab4.addEventListener('click', function(){
    _.forEach(listItems, function(element){
      if (element.className === 'tab-current') {
        element.classList.remove('tab-current');
      };
    });
    _.forEach(contentBlock, function(element){
      if (element.className === 'content-current') {
        element.classList.remove('content-current');
      };
    });
    this.parentNode.classList.add('tab-current');
    Section4.classList.add('content-current');
  });


  tab5.addEventListener('click', function(){
    _.forEach(listItems, function(element){
      if (element.className === 'tab-current') {
        element.classList.remove('tab-current');
      };
    });
    _.forEach(contentBlock, function(element){
      if (element.className === 'content-current') {
        element.classList.remove('content-current');
      };
    });
    this.parentNode.classList.add('tab-current');
    Section5.classList.add('content-current');
  });
```

Though it's not pleasing to the eye, this code did exactly what was needed. Using lodash, I've included `forEach` statements that iterate across tabs and content sections when a tab is click, removing the appropriate classes from each element. Additionally, I've included statements for adding the `'tab-current'` class to the tab clicked by using this.parentNode to target the individual `li` element clicked. The final statement applies the `'content-current'` class to the appropriate content section as well.

One of the main principles for developers is that copy/paste generally means something can be done in a more efficient way. That couldn't be more evident in this case. With a little refactoring, and reading documentation on jQuery, our cohort was able to trim the JavaScript to 5 total lines from the 80+ originally included in my example. I now resent jQuery with a passion......and I've included the refactored code below:

  ```JavaScript
  $('li').click(function(){
    $('li').removeClass('tab-current');
    $(this).addClass('tab-current');
    $('section').removeClass('content-current');
    $($(this).children().attr('href')).addClass('content-current');
  });
```
