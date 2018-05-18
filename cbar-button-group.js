import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { IronSelectableBehavior } from '@polymer/iron-selector/iron-selectable.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import '@polymer/polymer/polymer-legacy.js';
class CbarButtonGroup extends mixinBehaviors([ IronSelectableBehavior ], PolymerElement) {
  static get template() {
    return html`
    <slot></slot>
`;
  }

  static get is() {
    return 'cbar-button-group';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  select(value) {
    super.select(value);

    let item = this._valueToItem(value);

    // If we're using an selectedAttribute/selectedClass that is toggled automatically
    // by our button, ensure it is correctly re-toggled truthy.
    // selected-attribute="active" is a good example.
    if( this.selectedClass ) {
      this.toggleClass(this.selectedClass, true, item);
    }

    if( this.selectedAttribute ) {
      this.toggleAttribute(this.selectedAttribute, true, item);
    }
  }
}

window.customElements.define(CbarButtonGroup.is, CbarButtonGroup);
