interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}


// Project Type
enum ProjectStatus {
  Active,
  Finished
}

class Project {
  constructor(
    public userName: string,
    public age: string,
    public status: ProjectStatus
  ) {}
}


//validation Interface

interface Validatatble {
  value?: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatatble) {
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && validatableInput.value?.toString().trim().length !== 0;
  }

  if (
    validatableInput.minLength &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length > validatableInput.minLength;
  }

  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length < validatableInput.maxLength;
  }

  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value > validatableInput.min;
  }

  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value < validatableInput.max;
  }
  return isValid;
}

//autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}




// Component Base Class
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? 'afterbegin' : 'beforeend',
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

//Creating Another Class - Project State

class ProjectState{
  private listeners: any[] = [];
    private projects: any[] = [];
    private static instance: ProjectState;

    private constructor(){

    }

    static getInstance(){
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }

    addProject(username: string, age: number){
      const newProject = new Project(
        Math.random().toString(),
        username,
        age,
        // ProjectStatus.Active
      );
        this.projects.push(newProject);
        this.updateListeners();

    }


    moveProject(projectId: string, newStatus: ProjectStatus) {
      const project = this.projects.find(prj => prj.id === projectId);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    private updateListeners() {
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice());
      }
    }
}

const projectState = ProjectState.getInstance();


//Creating Another Class - Project Lists

class ProjectList extends Component<HTMLDivElement, HTMLElement>{
   assignedProjects: Project[];

    constructor(private type: 'active' | 'finished'){
      super('project-list', 'app', false,`${type}-projects`);
            this.templateElement = document.getElementById(
              "project-list"
            )! as HTMLTemplateElement;
        

            this.assignedProjects = [];

            this.hostElement = document.getElementById("app")! as HTMLDivElement;
        
            const importedNode = document.importNode(
              this.templateElement.content,
              true);
              
              this.element = importedNode.firstElementChild as HTMLElement;
              this.element.id = `${this.type}-projects`;


              this.renderContent();
            }

            configure(): void {
              
            }

             renderContent(){
                const listId = `${this.type}-projects-list`;
                this.element.querySelector("ul")!.id = listId;
                this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + ' PROJECTS';
            }
}


//Project State Management
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];
  
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}


//creating a Class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
 

  //Getting from Input Elements
  userName: HTMLInputElement;
  age: HTMLInputElement;

  //constructor

  constructor() {
    super("main-template",'app', true, "formTag")
    // this.templateElement = document.getElementById(
    //   "main-template"
    // )! as HTMLTemplateElement;
    // this.formInputElement = document.getElementById(
    //   "formTag"
    // )! as HTMLFormElement;

    // this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // const importedNode = document.importNode(
    //   this.templateElement.content,
    //   true
    // );

    this.formInputElement = importedNode.firstElementChild as HTMLFormElement;

    //Assinging Form Input Elements

    this.configure();
    

    this.userName = document.getElementById("username")! as HTMLInputElement;
    this.age = document.getElementById("Age")! as HTMLInputElement;
  }
  
  
  
  configure() {
    this.formInputElement.addEventListener(
      "submit",
      this.submitHandler.bind(this)
    );
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.formInputElement);
  }

  //getting User Input function

  private gettingUserInput(): [string, number] | void {
    const enteredUserName = this.userName.value;
    const enteredAge = this.age.value;

    const userName: Validatatble = {
      value: enteredUserName,
      required: true,
      min: 1,
      max: 5,
    };

    const age: Validatatble = {
      value: +enteredAge,
      required: true,
      min: 1,
      max: 5,
    };

    if (!validate(userName) || !validate(age)) {
      alert("Invalid Input");
      return;
    } else {
      return [enteredUserName, +enteredAge];
    }
  }
  
  private ClearInputs(){
    this.userName.value = " ";
    this.age.value = " ";

  }
  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    // console.log(this.userName.value);
    // console.log(this.age.value);

    const userInput = this.gettingUserInput();
    console.log(userInput);
  }
}


const project = new ProjectInput();
const activeProject = new ProjectList('active');
const finishedProject = new ProjectList('finished');
