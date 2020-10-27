var $form = document.querySelector('form');
var $inputAvatar = document.querySelector('#avatar-url');
var $image = document.querySelector('img');

$inputAvatar.addEventListener('input', function (event) {
  $image.setAttribute('src', event.target.value);
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  data.profile.avatarUrl = $form.elements.avatarUrl.value;
  data.profile.username = $form.elements.username.value;
  data.profile.fullName = $form.elements.fullName.value;
  data.profile.location = $form.elements.location.value;
  data.profile.bio = $form.elements.bio.value;
  $form.reset();
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
});

window.addEventListener('beforeunload', function (event) {
  var inputData = JSON.stringify(data);
  localStorage.setItem('profile', inputData);
});

/* $views = document.querySelectorAll('.view');
function profileRender() {
//<div>
    <div class="column-full">
      <h1>data.profile.fullName</h1>
    </div>
    <div class="row">
      <div class="column-half">
        <img class="image-one" src=data.profile.avatarUrl alt="Avatar Image">
      </div>
      <div class="column-half">
        <div class="flex">
          <img class="image-two" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlx1OjBPG6fKXrDWNxQuIuCq5cI9qxT7goMA&usqp=CAU" alt="Profile icon">
          <h4>data.profile.username</h4>
        </div>
        <div class="flex">
          <img class="image-two" src="https://www.clipartkey.com/mpngs/m/179-1791285_little-location-icon.png" alt="Location icon">
          <h4>data.profile.location</h4>
        </div>
        <p>data.profile.bio</p>
      </div>
    </div>
  </div>//
  var $container = document.createElement('div');
  var $divFull = document.createElement('div');
  $divFull.setAttribute('class', 'column-full');
  var $h1 = document.createElement('h1');
  $h1.textContent = data.profile.fullName;
  $divFull.appendChild($h1);
  $container.appendChild($divFull);

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row');
  var $divHalf = document.createElement('div');
  $divHalf.setAttribute('class', 'column-half');
  var $img1 = document.createElement('img');
  $img1.setAttribute('class', 'image-one');
  $img1.setAttribute('src', data.profile.avatarUrl);
  $img1.setAttribute('alt', 'Avatar Image');
  $divHalf.appendChild($img1);
  $row.appendChild($divHalf);

  var $divHalf2 = document.createElement('div');
  $divHalf2.setAttribute('class', 'column-half');
  var $flex = document.createElement('div');
  $flex.setAttribute('class', 'flex');
  var $img2 = document.createElement('img');
  $img2.setAttribute('class', 'image-two');
  $img2.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlx1OjBPG6fKXrDWNxQuIuCq5cI9qxT7goMA&usqp=CAU');
  $img2.setAttribute('alt', 'Profile icon');
  var $h4one = document.createElement('h4');
  $h4one.textContent = data.profile.username;

  $flex.appendChild($img2);
  $flex.appendChild($h4one);
  $divHalf2.appendChild($flex);

  var $flex2 = document.createElement('div');
  $flex2.setAttribute('class', 'flex');
  var $img3 = document.createElement('img');
  $img3.setAttribute('class', 'image-two');
  $img3.setAttribute('src', 'https://www.clipartkey.com/mpngs/m/179-1791285_little-location-icon.png');
  $img2.setAttribute('alt', 'Location icon');
  var $h4two = document.createElement('h4');
  $h4two.textContent = data.profile.location;

  $flex2.appendChild($img3);
  $flex2.appendChild($h4two);
  $divHalf2.appendChild($flex2);

  var $para = document.createElement('p');
  $para.textContent = data.profile.bio;

  $divHalf2.appendChild($para);
  $row.appendChild($divHalf2);
  $container.appendChild($row);

  return $container;
} */
