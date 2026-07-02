import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export function customValidator(control:AbstractControl){
  if(control.value === 'yuvraj'){
    return {checksError:true}
  }else{
    return null;
  }
}

export function customAsyncValidator(control:AbstractControl):Promise<any>{
  return new Promise((res)=>{
    if(control.value === '1234'){
      res({visa:true})
    }else{
      return res(null)
    }
  })
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'unstop';
  myVal:string = ''
  count!:number;
  userForm!:FormGroup;

  @ViewChild('container', {read:ViewContainerRef}) container!:ViewContainerRef;

  public get addresses(){
    return (this.userForm.get('addresseS') as FormArray).controls
  }
  constructor(private cdr:ChangeDetectorRef, private fb:FormBuilder){


    this.userForm = this.fb.group({
      name:['', Validators.required],
      emailAddress:['', [Validators.required, Validators.email]],
      cf:['', [Validators.required,customValidator], customAsyncValidator],
      addresseS: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    })
  }


  addAddresses(){
    let control = new FormControl('', Validators.required)
    this.addresses.push(control)
  }

  deleteAddress(i:number){
    (this.userForm.get('addresseS') as FormArray).removeAt(i)
  }



  enterValue(e:any){
    console.log(e.target.value);
    
    this.myVal = e.target.value;
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.count  =10;
      console.log(this.count);
      this.cdr.detectChanges();
    },2000)


  }
  updateValue(){
    this.count++;
  } 


  async loadComponent(){
    const comRef = await import('./topic/details/details.component')
    this.container.createComponent(comRef.DetailsComponent)
  }
}
