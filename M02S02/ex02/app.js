const createTextCaptureInput = (placeholder = 'Adauga o valoare') => {
  const $widget = $('<div>', {
    class: 'text-wdiget',
  });

  $widget
    .append(
      $('<input>', {
        type: 'text',
        placeholder,
      }),
    )
    .append();
  return $widget;
};

const formId = 'personForm';
const createSkillUl = () => {
  const ulId = 'skills-list';
  let $ul = $(`#${ulId}`);
  let editMode = false;
  if ($ul.length !== 1) {
    $ul = $('<ul>', {
      id: ulId,
    });

    $(`#${formId}`).after($ul);
    //nu merge adaugatul. as fi incercat $ul.remove()
    $ul.on('click', 'button', (event) => {
      const $element = $(event.currentTarget);

      $element.parent().remove();
      if ($('li').length === 0) {
        $('ul').remove();
      }
    });
  }
  $ul.on('click', '.edit', (event) => {
    if (editMode === true) {
      return;
    }
    editMode = true;
    const $element = $(event.currentTarget);
    const $parentLi = element.parent();
    const $widget = createTextCaptureInput('Modifica numele skill-ului');

    $parentLi.prepend($widget);
  });
  $ul.on('click', '.text-widget .cancel', (event) => {
    editMode = false;
    $(event.currentTarget).parent().remove();
  });
  $ul.on('click', '.text-widget .save', function () {
    $saveButton = $(this);
    let value = $saveButton.prev().val();
    let $parentLi = $saveButton.parents('li');
    $parentLi.find('.skill-text').text(value);
    editMode = false;
    $saveButton.parent().remove();
  });
  return $ul;
};

const createPersonDetails = () => {
  const detailsId = 'person-details';
  let $p = $(`#${detailsId}`);

  if ($p.length < 1) {
    $p = $('<p>', {
      id: detailsId,
    });

    $(`#${formId}`).after($p);
  }

  return $p;
};

$(document).ready(() => {
  let $skillInput = $('#skills');
  // nextElementSibling <- DOM
  $skillInput.next().on('click', () => {
    const value = $skillInput.val(); // DOM -> elem.value
    const $skillsUl = createSkillUl();
    const $skillLi = $('<li>')
      .append(
        $('<span>', {
          class: 'skill-text',
          text: value,
        }),
      )
      .append(
        $('<button>', {
          text: '-',
          class: 'delete',
        }),
      )
      .append(
        $('<button>', {
          text: 'Edit',
          class: 'edit',
        }),
      );

    $skillsUl.append($skillLi);

    $skillInput.val('');
  });

  // function version:
  $(`#${formId}`).on('submit', function (event) {
    let $form = $(this); // <-- function version this = dom element
    const data = $form.serializeArray();
    const desiredKeys = ['name', 'surname', 'age'];

    const userData = data.filter((key) => {
      if (desiredKeys.includes(key.name)) {
        return true;
      } else {
        return false;
      }
    });

    $personDetails = createPersonDetails();
    let message = `
      Numele meu este ${userData[0].value} ${userData[1].value} si am ${userData[2].value} ani.
    `;
    $personDetails.text(message);

    event.preventDefault();
  });
});
