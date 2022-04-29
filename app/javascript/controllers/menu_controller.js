import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "menus" ]

  buttonClick() {
    this.menusTargets.forEach(el => {
      el.hidden = !el.hidden
    });
  }
}
