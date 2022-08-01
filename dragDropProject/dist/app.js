"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validate(validatableInput) {
    var _a;
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && ((_a = validatableInput.value) === null || _a === void 0 ? void 0 : _a.toString().trim().length) !== 0;
    }
    if (validatableInput.minLength &&
        typeof validatableInput.value === "string") {
        isValid =
            isValid && validatableInput.value.length > validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === "string") {
        isValid =
            isValid && validatableInput.value.length < validatableInput.maxLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value > validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
}
function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class ProjectState {
    constructor() {
        this.projects = [];
    }
    addProject(username, age) {
        const newProject = {
            username: username,
            age: age
        };
        this.projects.push(newProject);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
}
class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById("project-list");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        this.attach();
        this.renderContent();
    }
    attach() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent = this.type.toUpperCase() + ' PROJECTS';
    }
}
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("main-template");
        this.formInputElement = document.getElementById("formTag");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.formInputElement = importedNode.firstElementChild;
        this.configure();
        this.attach();
        this.userName = document.getElementById("username");
        this.age = document.getElementById("Age");
    }
    configure() {
        this.formInputElement.addEventListener("submit", this.submitHandler.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.formInputElement);
    }
    gettingUserInput() {
        const enteredUserName = this.userName.value;
        const enteredAge = this.age.value;
        const userName = {
            value: enteredUserName,
            required: true,
            min: 1,
            max: 5,
        };
        const age = {
            value: +enteredAge,
            required: true,
            min: 1,
            max: 5,
        };
        if (!validate(userName) || !validate(age)) {
            alert("Invalid Input");
            return;
        }
        else {
            return [enteredUserName, +enteredAge];
        }
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gettingUserInput();
        console.log(userInput);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
const project = new ProjectInput();
const activeProject = new ProjectList('active');
const finishedProject = new ProjectList('finished');
//# sourceMappingURL=app.js.map