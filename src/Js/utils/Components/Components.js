import Html from "../Html/Html";
import Api from "../Api/Api";

export default () => new Components();
class Components {
  getAppContext() {
    return Html().select("#app");
  }

  getWrapperDiv() {
    return Html()
      .create("div")
      .addClass("wrapper");
  }
  renderHeader() {
    const mainHeader = Html()
      .create("header")
      .addClass("header");
    const mainHeaderTitle = Html()
      .create("h1")
      .addClass("header__title")
      .text("In-Line Connect");
    mainHeader.addChild(mainHeaderTitle);
    return mainHeader;
  }
  renderLoginFields() {
    const loginContentBlock = Html()
      .create("div")
      .addClass("Login");
    const loginPageTitle = Html()
      .create("h2")
      .addClass("Login__title");
    const loginFieldSet = Html()
      .create("fieldset")
      .addClass("login__form");
    const MedicNumLabel = Html()
      .create("label")
      .addClass("login__form-label")
      .text("Medic #:");
    const medicNumInputForm = Html()
      .create("input")
      .addAttribute("type", "text");
    const companyNameLabel = Html()
      .create("label")
      .addClass("login__form-label")
      .text("Company Name:");
    const companyInputForm = Html()
      .create("input")
      .addAttribute("type", "text");
    const submitButton = Html()
      .create("button")
      .addClass("login__form-button")
      .text("Login");
    loginContentBlock.addChild(loginPageTitle);
    loginContentBlock.addChild(loginFieldSet);
    loginFieldSet.addChild(MedicNumLabel);
    loginFieldSet.addChild(medicNumInputForm);
    loginFieldSet.addChild(companyNameLabel);
    loginFieldSet.addChild(companyInputForm);
    loginContentBlock.addChild(submitButton);
    return loginContentBlock;
  }
  renderMainFooter() {
    const footer = Html()
      .create("footer")
      .addClass("footer");
    const footerContent = Html()
      .create("small")
      .addClass("footer__copy")
      .text("&copy 2019 In-Line Connect");
    footer.addChild(footerContent);
    return footer;
  }
  renderPageHome() {
    const app = this.getAppContext();
    const wrapperDiv = this.getWrapperDiv();
    const mainHeader = this.renderHeader();
    const loginContent = this.renderLoginFields();
    const mainFooter = this.renderMainFooter();
    wrapperDiv.addChild(mainHeader);
    wrapperDiv.addChild(loginContent);
    wrapperDiv.addChild(mainFooter);
    app.replace(wrapperDiv);
  }

  renderTraumaFormContent() {
    const traumaFormContentBlock = Html()
      .create("div")
      .addClass("traumaForm");
    const traumaFormTitle = Html()
      .create("h2")
      .addClass("header__trauma")
      .text("TRAUMA");
    const traumaFormContainer = Html()
      .create("div")
      .addClass("container");
    const traumaButtonContainer = Html()
      .create("div")
      .addClass("buttons__container");
    const mvcButton = Html()
      .create("button")
      .addAttribute("id", "MVC")
      .addClass("report__buttons");
  }
}
