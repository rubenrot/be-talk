var voiceText = '';
var recognition;
var recognizing = false;
if (!('webkitSpeechRecognition' in window)) {
  alert("¡API no soportada!");
} else {

  recognition = new webkitSpeechRecognition();
  recognition.lang = "es-VE";
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function () {
    recognizing = true;
    console.log("empezando a eschucar");
  };
  recognition.onresult = function (event) {

    for (var i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        //console.log(event.results[i][0].transcript);
        voiceText += event.results[i][0].transcript;
        //document.getElementById("texto").value += event.results[i][0].transcript;
      }

    }

    //console.log(voiceText);
    sessionStorage.setItem('my-text', voiceText);

    //texto
  };
  recognition.onerror = function (event) {
  };
  recognition.onend = function () {
    recognizing = false;
    //document.getElementById("procesar").innerHTML = "Escuchar";
    console.log("terminó de eschucar, llegó a su fin");

  }


}

(function (document) {
  'use strict';


  class GlobalPositionView extends Polymer.Element {
    static get is() {
      return 'global-position-view';
    }

    static get properties() {
      return {
        name: String,
        accounts: {
          type: Array,
          value: [],
          observer: '_test'
        },
        cards: {
          type: Array,
          value: [],
          observer: '_testCards'
        },
        mortgages: {
          type: Array,
          value: [],
          observer: '_testCards'
        },
        voicetext: {
          type: String,
          value: ''
        }
      };
    }


    ready() {
      super.ready();

    }

    _test(newValue, oldValue) {

    }

    _testCards(newValue, oldValue) {

    }

    procesar() {
      console.log('Procesando');
      var me = this;

      if (recognizing == false) {
        recognition.start();
        recognizing = true;
        //document.getElementById("procesar").innerHTML = "Detener";
      } else {
        recognition.stop();
        recognizing = false;

        setTimeout(function () {
          console.log(sessionStorage.getItem('my-text'));
          me._navigate();
          me.voicetext = sessionStorage.getItem('my-text');
        }, 1000);

        //  document.getElementById("procesar").innerHTML = "Escuchar";
      }
    }

    _navigate() {
      console.log('Navegando');
      this.dispatchEvent(new CustomEvent('show-accounts',
        {
          bubbles: true,
          composed: true,
          detail: ''

        }));
      console.log(this.$.testInversionList);
      this.$.testInversionList._showAccounts();
      this.voicetext = 'fjsdlfjsd';

    }


  }

  customElements.define(GlobalPositionView.is, GlobalPositionView);

}(document));

