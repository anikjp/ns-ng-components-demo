import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./link";

let mainMenuLinks = [
    new Link("ActionBar", "/action-bar"),
    new Link("ActivityIndicator", "/activity-indicator"),
    new Link("Angular directives", "/angular-directives"),
    new Link("Animations", "/animations"),
    new Link("Button", "/button"),
    new Link("DatePicker", "/date-picker"),
    new Link("Dialogs", "/dialogs"),
    new Link("Layouts", "/layouts"),
    new Link("TimePicker", "/time-picker"),
    new Link("ScrollView", "/scroll-view"),
    new Link("SearchBar", "/search-bar"),
    new Link("SegmentedBar", "/segmented-bar"),
    new Link("Slider", "/slider"),
    new Link("Switch", "/switch"),
    new Link("TabView", "/tab-view"),
    new Link("TextField", "/text-field"),
    new Link("TextView", "/text-view"),
    new Link("WebView", "/web-view"),
    new Link("Style", "/style"),
    new Link("Gestures", "/gestures"),
    new Link("HtmlView", "/html-view"),
    new Link("IconFonts", "/icon-fonts"),
    new Link("Image", "/image"),
    new Link("Label", "/label"),
    new Link("ListPicker", "/list-picker"),
    new Link("ListView", "/list-view"),
    new Link("Progress", "/progress"),
    new Link("Formatted String", "/formatted-string"),
    new Link("Trace Module", "/trace"),
    new Link("Timer Module", "/timer"),
    new Link("Platform Module", "/platform"),
    new Link("Location", "/location"),
    new Link("FPS Meter", "/fps-meter"),
    new Link("HTTP Module", "/http"),
    new Link("Application", "/application"),
    new Link("Application Settings", "/application-settings"),
    new Link("Color", "/color"),
    new Link("Connectivity", "/connectivity"),
    new Link("File System", "/file-system"),
    new Link("Modal view", "/modal-view"),
    new Link("ListView (extended examples)", "/extended-listview"),
    new Link("DataEntry (extended examples)", "/dataentry"),
    new Link("User Profile (extended examples)", "/userprofile"),
    new Link("Content Screens", "/content-screens"),
    new Link("Camera", "/camera"),
    new Link("Angular routing", "/routing")
];

@Component({
    moduleId: module.id,
    templateUrl: "examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExamplesListComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        mainMenuLinks.sort(function (a, b) {
            let titleA = a.title.toUpperCase();
            let titleB = b.title.toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });

        for (let i = 0; i < mainMenuLinks.length; i++) {
            this.links.push(mainMenuLinks[i]);
        }
    }
}
