const form = document.getElementById('qr-form');
const qrCodeElement = document.getElementById('qr-code');
const dataInput= document.getElementById('data-input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const data = `${dataInput.value}`;
  const fmt = 'png';
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/qrcode?data=' + encodeURIComponent(data) + '&format=' + encodeURIComponent(fmt),
    headers: {
      'X-Api-Key': 'JR50CtTb5Bv031Rjk7libQ==eMq2WH7cURXA63vn'
    },
    contentType: 'application/json',
    success: function(result) {
 qrCodeElement.innerHTML = '<div class="flex justify-center ml-2.5 "> <img class="w-64 m-auto border border-gray-200 shadow-md rounded cursor-pointer" src="data:image/png;base64,' + result + '" alt="QR Code"> <div>';
 console.log(result)
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
});