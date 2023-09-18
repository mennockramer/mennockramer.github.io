var date;

fetch('https://api.github.com/repos/mennockramer/mennockramer.github.io/commits/main')
  .then(res => res.json())
  .then(data => {
    date = data['commit']['author']['date'].split("T")[0];
   })
  .then(() => {
    document.querySelector("footer").innerHTML='\
      \
      Last Updated '.concat(date).concat('\
      <br>\
      Copyright me, but GPLv3 unless stated otherwise.\
      \
      ');
   });