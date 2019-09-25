(function (document) {
  'use strict';

  class FbNotification extends Polymer.Element {
    static get is() {
      return 'fb-notification';
    }

    static get properties() {
      return {
        name: String,
        /**
         * Type of notification, could be: none, success, error, warning, info
         * @type {String}
         */
        type: {
          type: String,
          value: 'info',
          observer: '_verifyType'
        },
        /**
         * Icon depending on type
         * @type {String}
         */
        icon: {
          type: String,
          value: 'info'
        },
        message: {
          type: String,
          value: 'Default message'
        }
      };
    }


    ready() {
      super.ready();
    }

    _setIcon(type) {
      switch (type) {
        case 'info':
          this.icon = 'coronita:info';
          break;
        case 'warning':
          this.icon = 'coronita:alarm';
          break;
        case 'error':
          this.icon = 'coronita:error';
          break;
        case 'success':
          this.icon = 'coronita:correct';
          break;
        default:
          this.icon = 'coronita:info';
      }
    }

    _verifyType(type) {
      if (type !== 'info' && type !== 'warning' && type !== 'error' && type !== 'success') {
        this.type = 'info';
      }
      this._setIcon(this.type);
    }
  }

  customElements.define(FbNotification.is, FbNotification);

}(document));


