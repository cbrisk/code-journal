var $form = document.querySelector('form');
var $inputAvatar = document.querySelector('#avatar-url');
var $image = document.querySelector('img');
var $views = document.querySelectorAll('div.view');

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
  viewSwapping('profile');
});

window.addEventListener('beforeunload', function (event) {
  var inputData = JSON.stringify(data);
  localStorage.setItem('profile', inputData);
});

function profileRender(data) {
/* <div>
    <div class="column-full">
      <h1>data.profile.fullName</h1>
    </div>
    <div class="row">
      <div class="column-half">
        <i class="fas fa-user"></i>
      </div>
      <div class="column-half">
        <div class="flex">
          <i class="fas fa-user"></i>
          <h4>data.profile.username</h4>
        </div>
        <div class="flex">
          <img class="image-two" src="https://www.clipartkey.com/mpngs/m/179-1791285_little-location-icon.png" alt="Location icon">
          <h4>data.profile.location</h4>
        </div>
        <p>data.profile.bio</p>
        <a href="#" data-view="edit-profile"><button type="submit">Edit</button></a>
      </div>
    </div>
  </div> */
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
  var $icon1 = document.createElement('i');
  $icon1.setAttribute('class', 'fas fa-user');
  var $h4one = document.createElement('h4');
  $h4one.textContent = data.profile.username;

  $flex.appendChild($icon1);
  $flex.appendChild($h4one);
  $divHalf2.appendChild($flex);

  var $flex2 = document.createElement('div');
  $flex2.setAttribute('class', 'flex');
  var $icon2 = document.createElement('i');
  $icon2.setAttribute('class', 'fas fa-map-marker-alt');
  var $h4two = document.createElement('h4');
  $h4two.textContent = data.profile.location;

  $flex2.appendChild($icon2);
  $flex2.appendChild($h4two);
  $divHalf2.appendChild($flex2);

  var $para = document.createElement('p');
  $para.textContent = data.profile.bio;
  $divHalf2.appendChild($para);

  var $edit = document.createElement('a');
  $edit.setAttribute('href', '#');
  $edit.setAttribute('dataview', 'edit-profile');
  $edit.className = 'edit';
  $edit.textContent = 'Edit';
  $divHalf2.appendChild($edit);

  $row.appendChild($divHalf2);
  $container.appendChild($row);

  return $container;
}

function viewSwapping(dataView) {
  for (var j = 0; j < $views.length; j++) {
    if ($views[j].getAttribute('data-view') === dataView) {
      $views[j].classList.remove('hidden');
    } else {
      $views[j].classList.add('hidden');
    }
  }
  if (dataView === 'profile') {
    $views[1].innerHTML = '';
    $views[1].appendChild(profileRender(data));
  } else {
    $form.elements.avatarUrl.value = data.profile.avatarUrl;
    $form.elements.username.value = data.profile.username;
    $form.elements.fullName.value = data.profile.fullName;
    $form.elements.location.value = data.profile.location;
    $form.elements.bio.value = data.profile.bio;
    $image.setAttribute('src', $form.elements.avatarUrl.value);
  }
  data.view = dataView;
}

document.addEventListener('DOMContentLoaded', function (event) {
  var profileStorage = localStorage.getItem('profile');
  profileStorage = JSON.parse(profileStorage);
  if (profileStorage !== null) {
    data = profileStorage;
  }
  if (data.profile.username === '') {
    viewSwapping('edit-profile');
  } else {
    viewSwapping('profile');
  }
});

document.addEventListener('click', function (event) {
  if (event.target.tagName !== 'A') {
    return;
  }
  if (event.target.matches('a.edit')) {
    viewSwapping('edit-profile');
  } else if (event.target.matches('a.link.prof') && data.profile.username !== '') {
    viewSwapping('profile');
  } else if (event.target.matches('a.link.entry') && data.profile.username !== '') {
    viewSwapping('entries');
  }
});
