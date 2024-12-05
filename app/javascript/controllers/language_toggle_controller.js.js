import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="language-toggle"
export default class extends Controller {
  static targets = ["toggle"]

  connect() {
    console.log("Stimulus connected");

    // Set the initial state of the toggle based on the current locale
    const url = new URL(window.location.href);
    const locale = window.location.pathname.split("/")[1];
    console.log("Locale:", locale);
    console.log("url:", url);

    // Default to Japanese if no locale is present
    if (locale === "jp") {
      this.toggleTarget.checked = false;
    } else {
      this.toggleTarget.checked = true;
    }
  }

  toggleLanguage(event) {
    console.log("I'm toggled!");
    // Determine the new locale based on the checkbox state
    const newLocale = this.toggleTarget.checked ? "en" : "jp";
    console.log("Locale:", newLocale);

    // Update the URL path with the new locale
    const segments = window.location.pathname.split("/"); // Split the path into segments
    console.log("segments:", segments);
    segments[1] = newLocale; // Replace the first segment with the new locale

    const newPath = segments.join("/"); // Rejoin the segments into a full path

    // Redirect to the updated path, preserving any query string parameters
    window.location.href = newPath + window.location.search;
  }
}
