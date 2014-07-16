(function(){

 /* James's code to add the surface shader */
      var ss ={
          container: document.createElement('div'),
          output: document.createElement('div')
      }

      ss.container.setAttribute('id', 'fss-container');
      ss.output.setAttribute('id', 'fss-output');

      ss.container.style.position = 'absolute';
      ss.container.style.width = '100%';
      ss.container.style.height = '100%';
      ss.container.style.top = '0';
      ss.container.style.left = '0';

      ss.output.style.position = 'absolute';
      ss.output.style.width = '100%';
      ss.output.style.height = '100%';
  
      ss.container.appendChild(ss.output);
      document.body.appendChild(ss.container);

})();
