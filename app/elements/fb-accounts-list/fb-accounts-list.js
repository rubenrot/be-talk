(function (document) {
  'use strict';


  class FbAccountsList extends Polymer.Element {
    static get is() {
      return 'fb-accounts-list';
    }

    static get properties() {
      return {
        name: String,
        accounts: {
          type: Array,
          value: [],
          observer: '_test'
        },
        _isVisibleSummary: {
          type: Boolean,
          value: false
        },
      };
    }


    ready() {
      super.ready();
      this._docListenerClick = function () {
        this._closeSummary();
      }.bind(this);
    }

    _handleClickOnSummary(ev) {
      ev.stopPropagation();
    }

    _test(newValue, oldValue) {
      console.log(newValue);
    }

    /* _setScale(amount) {

       const amountLength = amount.toString().split('.')[0].length;

       if (amountLength >= 13) {
         // Working with billions (eg: 1B €)
         return 9;
       } else if (amountLength >= 9) {
         // Working with millions (eg: 1M €)
         return 6;
       } else {
         // Working with the whole digit (eg: 100000 €)
         return 0;
       }
     }*/

    _handleTapOnSummaryElement(ev) {
      const requestElement = ev.currentTarget;
      const requestId = requestElement && requestElement.dataset.requestId;
      this._accountDetail(requestId);
      window.top.accountId = requestId;
      //ev.stopPropagation();
      //this._toggleSummaryInfo(ev);
    }

    /**
     * Remove the active state over each guarantee request on the list which
     * shows the guarantee summary.
     */
    _toggleActiveElements() {
      let listenerElements = Polymer.dom(this.root).querySelectorAll('.active');
      listenerElements.map((item) => {
        item.nextElementSibling.hidden = true;
        item.classList.remove('active');
      });
    }

    /**
     * Toggle summary info for each guarantee request. Only in case the
     * guarantee request item status is different from draft we try to show
     * it
     * @param {evet} ev - ev info for tap on each guarantee request
     */
    _toggleSummaryInfo(ev) {
      const requestStatus = ev.currentTarget && ev.currentTarget.dataset.requestStatusId;
      /**
       * We show the request summary for requests which state are different
       * to 'draft'
       */
      if (requestStatus !== '00') {


        const requestElement = ev.currentTarget;
        const requestId = requestElement && requestElement.dataset.requestId;
        const viewport = requestElement && requestElement.dataset.viewport;
        let summaryElement;
        let summaryItem;

        /**
         * Detecting which HTML element contains the
         * egat-global-position-summary-item, which is the summary component
         */
        if (viewport === 'desktop') {
          //summaryElement = this.$('.desktop-summary-' + requestId);
          //summaryItem = this.$['desktop-summary-' + requestId];
          summaryElement = this.shadowRoot.querySelector('.desktop-summary-' + requestId);
          summaryItem = this.shadowRoot.querySelector('#desktop-summary-' + requestId);
          console.log(summaryItem);

        }

        const isSummaryElementHidden = summaryElement.hidden;

        /**
         * We toggle based on hidden property of HTML wrapper for
         * egat-global-position-summary-item
         */
        if (isSummaryElementHidden) {
          //It controls the handler in case we do tap outside this component
          this._isVisibleSummary = !this._isVisibleSummary;
          document.addEventListener('tap', this._docListenerClick);

          //And then we show the summary info
          requestElement.classList.add('active');
          summaryElement.hidden = false;
          summaryItem.showSummary();
        }
        else {
          requestElement.classList.remove('active');
          summaryElement.hidden = true;
          this._closeSummary();
        }
      }
    }

    /**
     * Hide all active requests summary items and remove listeners
     * for hiding them in case we make taps outside of active elements
     * which are the elements
     */
    _closeSummary() {

      if (this._isVisibleSummary) {

        this._isVisibleSummary = false;
        this._toggleActiveElements();
        // must remove listener because no longer needed
        document.removeEventListener('tap', this._docListenerClick);
      }
    }


    _accountDetail(account) {
      // BE AWARE! If you are not sending a payload, you can use 'Event' instead of 'CustomEvent'
      // resource: https://developer.mozilla.org/en-USf/docs/Web/Guide/Events/Creating_and_triggering_events
      this.dispatchEvent(new CustomEvent('account-detail',
        {
          bubbles: true, composed: true,
          detail: {
            accountId: account
          }
        }));
    }

  }

  customElements.define(FbAccountsList.is, FbAccountsList);

}(document));

