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
