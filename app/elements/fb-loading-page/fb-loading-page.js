(function (document) {
  'use strict';


  class FbLoadingPage extends Polymer.Element {
    static get is() {
      return 'fb-loading-page';
    }

    static get properties() {
      return {
        name: String
      };
    }


    ready() {
      super.ready();
    }


  }

  customElements.define(FbLoadingPage.is, FbLoadingPage);

}(document));

