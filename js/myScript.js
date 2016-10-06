function completeForm() {
  if(document.getElementById('punk').checked) {
    document.getElementById('errorMusicChoice').innerHTML = '';
    document.getElementById('punkInputs').className = 'visible';
    document.getElementById('hipHopInputs').className = 'hidden';
  } else if(document.getElementById('hiphop').checked) {
    document.getElementById('errorMusicChoice').innerHTML = '';
    document.getElementById('hipHopInputs').className = 'visible';
    document.getElementById('punkInputs').className = 'hidden';
  } else{
    document.getElementById('errorMusicChoice').innerHTML = 'You must select punk or hiphop before continuing!';
  }
}

function submitForm(genre) {
  if(document.getElementById('punk').checked) {
    var recommendation = document.getElementById('newBand').name;
    if((document.getElementById('propagandhi').checked) || (document.getElementById('mischiefBrew').checked) || (document.getElementById('nofx').checked) || (document.getElementById('theFlatliners').checked)) {
      document.getElementById('errorSubmitPunk').innerHTML = '';
      if(document.getElementById('newBand').value != ''){
        document.getElementById('errorSubmitPunk').innerHTML = '';
        removeElement();
      } else {
        document.getElementById('errorSubmitPunk').innerHTML = 'You must enter ' + recommendation;
      }
    } else {
      document.getElementById('errorSubmitPunk').innerHTML = 'You must select one of the bands!';
    }
  } else {
    var recommendation = document.getElementById('newArtist').name;
    if((document.getElementById('asapRocky').checked) || (document.getElementById('vinceStaples').checked) || (document.getElementById('freddieGibbs').checked) || (document.getElementById('dannyBrown').checked)) {
      document.getElementById('errorSubmitHipHop').innerHTML = '';
      if(document.getElementById('newArtist').value != ''){
        document.getElementById('errorSubmitHipHop').innerHTML = '';
        removeElement();
      } else {
        document.getElementById('errorSubmitHipHop').innerHTML = 'You must enter ' + recommendation;
      }
    } else {
      document.getElementById('errorSubmitHipHop').innerHTML = 'You must select one of the artists!';
    }
  }
}

function removeElement() {
  var remove = document.querySelector('#musicForm');
  var success = document.createElement('p');
  success.id='musicForm';
  success.innerHTML = '<h4>Success! Thank you for the recommendation!</h4>';
  remove.parentNode.replaceChild(success, remove);
}
