(function (document) {
  'use strict';


  class FbHeader extends Polymer.Element {
    static get is() {
      return 'fb-header';
    }

    static get properties() {
      return {};
    }


    ready() {
      super.ready();
    }

    _navigate() {
      this.dispatchEvent(new CustomEvent('futureconomy-view',
        {
          detail: ''
        }));
    }

  }


  customElements.define(FbHeader.is, FbHeader);

}(document));

