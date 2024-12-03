import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="language-toggle"
export default class extends Controller {
  static targets = ["toggle"]

  connect() {
    console.log("Stimulus connected");

    // Set the initial state of the toggle based on the current locale
    const url = new URL(window.location.href);
    const lang = url.searchParams.get("locale");
    console.log(lang)

    // Default to Japanese if no locale is present
    if (!lang || lang === "jp") {
      this.toggleTarget.checked = false;
    } else {
      this.toggleTarget.checked = true;
    }
  }

  toggleLanguage(event) {
    // Determine the new locale based on the checkbox state
    const newLocale = this.toggleTarget.checked ? "en" : "jp";

    // Update the URL with the new locale
    const url = new URL(window.location.href);
    url.searchParams.set("locale", newLocale);

    // Redirect to the updated URL
    window.location.href = url.toString();
  }
}
