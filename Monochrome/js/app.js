$(function () {
  let $page = $('.monochrome-lookbook');

  if ($page.length > 0) {
    const $form = $('.form-lookbook');
    if ($form.length > 0) {
      $form.validate();
    }
  }
});
